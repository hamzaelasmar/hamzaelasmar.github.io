const express = require('express');
const path = require('path');

const app = express();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory))

app.set('view engine', 'hbs');

app.use('/', require('./routes/pages'));

app.listen(80, () => {
    console.log("Server Started, Join in https://localhost");
})