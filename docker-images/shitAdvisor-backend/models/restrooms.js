const mongoose = require('mongoose');

const { Schema } = mongoose;

const restroom = new Schema({
    lat: Number,
    long: Number,
    hygiene: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    gendered: Boolean,
    handicapped: Boolean,
    free: Boolean,
    shower: Boolean,
    changingTable: Boolean
});

module.exports = mongoose.model('restrooms', restroom);