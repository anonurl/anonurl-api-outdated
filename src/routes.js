const router = require('express').Router();

const createShort = require('./services/createShort');
const redirect = require('./services/redirect');
const report = require('./services/report');
const track = require('./services/track');
const updateClick = require('./services/updateClick');

module.exports =
    router
        .post('/api/create', (req, res) => createShort(req, res))

        .get('/api/track/:tracked', (req, res) => track(req, res))

        .get('/api/redirect/:id', (req, res) => redirect(req, res))

        .post('/api/report', (req, res) => report(req, res))

        .post('/api/update', (req, res) => updateClick(req, res));
