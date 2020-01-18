const express = require('express');

const config = require('../config.js');
const app = express();
app.set('secret', config.secret);

// Get DB models
const User = require('../models/users');

const bcrypt = require('bcrypt-nodejs');

const router = express.Router();
const saltRounds = bcrypt.genSaltSync(10);

router.post('/', (req, res, next) => {
  const { email, password } = req.body;
  const user = new User({
      email: email,
      password: password
  });
  user.save();
  res.send('User created !')
});

router.put('/newpassword', (req, res, next) => {
  const { oldPassword, newPassword1, newPassword2 } = req.body;
  const { accountId } = req.decoded;
  if (newPassword1 === newPassword2) {
    Account.findOne({ _id: accountId })
      .then((account) => {
        if (account != null && bcrypt.compareSync(oldPassword, account.password)) {
          account.password = bcrypt.hashSync(newPassword1, saltRounds);
          account.save();
          res.status(200).send("Success");
        } else {
          res.status(400).send("Wrong password")
        }
      })
  } else {
    next();
  }
});

module.exports = router;