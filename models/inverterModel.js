const admin = require('firebase-admin');
const db = admin.firestore();

const inverterDataCollection = db.collection('solarinverterdata');


// Get all data from solar inverter

const getAllInverterData = async () => {
  const snapshot = await inverterDataCollection.orderBy('timestamp').get();
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Add new data fro solar inverter

const addInverterData = async (powerValue) => {
  const data = {
    power: powerValue,
    timestamp: admin.firestore.Timestamp.now(),
  };
  const docRef = await inverterDataCollection.add(data);
  return docRef.id;
};

module.exports = { getAllInverterData,addInverterData };
