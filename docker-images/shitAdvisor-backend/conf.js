const conf = {
  db: {
    port: '27017',
    host: 'mongodb',
    name: 'shitAdvisor',
    usr: 'admin',
    pwd: 'admin',
    reconnectTries: 10,
    reconnectInterval: 500,
  },
};

conf.db.url = `mongodb://${conf.db.usr}:${conf.db.pwd}@${conf.db.host}:${conf.db.port}/${conf.db.name}`;

exports.default = conf;
