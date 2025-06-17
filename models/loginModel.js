// models/loginModel.js
const db = require("../Config/firebaseConfig");

const loginCollection = db.collection("Login");

const findUserByUsername = async (username) => {
  const snapshot = await loginCollection.where("userName", "==", username).get();
  if (snapshot.empty) return null;

  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() };
};

module.exports = {
  findUserByUsername,
};
