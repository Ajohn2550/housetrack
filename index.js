const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get('/', (req, res) => res.send('hello World'));

app.listen(process.env.PORT, () => console.log(`housetrack running on port ${process.env.PORT}`))