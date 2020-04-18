const Sequelize = require('sequelize');
const db = require('../config/database')


const Advert = db.define('advert',{
    title:{
        type:Sequelize.STRING
    },
    timestamp:false
},)

module.exports = Advert;