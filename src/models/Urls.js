const db = require('../database');

module.exports = db.model('urls', new db.Schema({
    url: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    create: {
        type: String,
        required: true
    },
    clicks: {
        type: Number
    }
}, {
    collection: 'urls'
}));
