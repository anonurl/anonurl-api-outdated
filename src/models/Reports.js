const db = require('../database');

module.exports = db.model('reports', new db.Schema({
    message: {
        type: String,
        required: true
    },
    contact: {
        type: String
    }
}, {
    collection: 'reports'
}));
