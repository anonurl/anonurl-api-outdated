const express = require('express');
const cors = require('cors');

const app = express();
const router = require('./routes');

app
    .use(cors())

    .use(express.json())

    .use(router)

    .listen(3001, () => console.log('> Server listening on port 3001'));
