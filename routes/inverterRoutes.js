const express = require('express');
const router = express.Router();
const { fetchInverterData, insertInverterData } = require('../controllers/inverterController');

 router.get('/inverter-data', fetchInverterData); //getting solar inverter data
 router.post('/inverter-data', insertInverterData); //Adding Solar inverter data

 module.exports = router;


