const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('> Database connected'))
    .Promise = global.Promise;

module.exports = mongoose;
