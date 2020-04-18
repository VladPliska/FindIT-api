const express = require('express');
const body = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

const db =require('./config/database');

const AdvertModel = require('./models/advert');

const mainHandler = require('./handlers/mainHandler');
const index = require('./routes/index');


app.use(index);

app.use((req, res, next) => {
    res.send('err 404')
})
app.listen(3000, () => {
    console.log('server listen 3000 port');
    db
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

});
