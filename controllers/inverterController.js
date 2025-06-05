const { getAllInverterData, addInverterData } = require('../models/inverterModel');


//getting solar inverter data

const fetchInverterData = async (req, res) => {
  try {
    const data = await getAllInverterData();
console.log('Raw inverter data from Firestore:', data);
    const formatted = data.map(item => ({
      power: item.power,
      timestamp: item.timestamp?.toDate().toISOString() || null, 
    }));

    res.status(200).json(formatted);
  } catch (error) {
    console.error('Error fetching inverter data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//Adding solar inverter data

const insertInverterData = async (req, res) => {
  try {
    const { power } = req.body;

    if (typeof power !== 'number') {
      return res.status(400).json({ message: 'Power must be a number (e.g., 1200)' });
    }

    const docId = await addInverterData(power);
    res.status(201).json({ message: 'Inverter data added', id: docId });
  } catch (error) {
    console.error('Error inserting inverter data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { fetchInverterData, insertInverterData };
