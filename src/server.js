const express = require('express');
const cors = require('cors');

const app = express();
const router = require('./routes');
const port = process.env.PORT || 3000;

app
    .use(cors())

    .use(express.json())

    .use(router)

    .listen(() => console.log(`> Server listening on port ${port}`));
