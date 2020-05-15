const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pendingresidents: {
        type: Number,
        required: true,
        default: 0
    },
    negativeresidents: {
        type: Number,
        required: true,
        default: 0
    },
    positiveresidents: {
        type: Number,
        required: true,
        default: 0
    },
    pendingstaff: {
        type: Number,
        required: true,
        default: 0
    },
    negativestaff: {
        type: Number,
        required: true,
        default: 0
    },
    positivestaff: {
        type: Number,
        required: true,
        default: 0
    },
    admittedwithcovid: {
        type: Number,
        required: true,
        default: 0
    },
    dateUpdated: {
        type: String,
        required: true
    },
    locationId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;