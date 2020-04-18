const path = require('path');

const express = require('express');

const mainHandler = require('./../handlers/mainHandler');

const router = express.Router();

router.get('/',mainHandler.index);


module.exports = router;