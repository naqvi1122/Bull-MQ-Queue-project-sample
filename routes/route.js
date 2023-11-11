const express = require('express')
const {test}=require('./controller/sampleController')


const router = express.Router();

router.post('/test', test);




module.exports = { router };