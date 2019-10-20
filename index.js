const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.get('/', (req, res) => res.render('home'));

app.listen(process.env.PORT, () => console.log(`housetrack running on port ${process.env.PORT}`))