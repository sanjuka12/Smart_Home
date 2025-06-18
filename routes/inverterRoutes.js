// const express = require('express');
// const router = express.Router();
// const { fetchInverterData, insertInverterData } = require('../controllers/inverterController');

// router.get('/inverter-data', fetchInverterData); //getting solar inverter data
// router.post('/inverter-data', insertInverterData); //Adding Solar inverter data

// module.exports = router;

const express = require('express');
const router = express.Router();
const { fetchInverterData, insertInverterData } = require('../controllers/inverterController');
const checkAuth = require('../middleware/authMiddleware'); // 👈 import middleware

// 👇 protect both GET and POST routes
router.get('/inverter-data', checkAuth, fetchInverterData); 
router.post('/inverter-data', checkAuth, insertInverterData); 

module.exports = router;
