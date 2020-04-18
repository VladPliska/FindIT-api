const express  = require('express');
const Advert = require('./../models/advert');

    exports.index = (req,res,next)=>{
        Advert.create({
            title:'asdasdsad'
        })

    }


