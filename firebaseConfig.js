// config/firebaseConfig.js
/*const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Check if database is accessible
(async () => {
  try {
    await db.collection("Login").limit(1).get(); // simple test query
    console.log("✅ Firestore DB Connected");
  } catch (error) {
    console.error("❌ Firestore DB Disconnected", error.message);
  }
})();

module.exports = db;
*/

require("dotenv").config();
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
});

const db = admin.firestore();

// Optional: test connection
(async () => {
  try {
    await db.collection("Login").limit(1).get();
    console.log("✅ Firestore DB Connected");
  } catch (error) {
    console.error("❌ Firestore DB Disconnected:", error.message);
  }
})();

module.exports = db;
