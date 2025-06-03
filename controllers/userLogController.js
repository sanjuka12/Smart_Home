// controllers/userLogController.js
const admin = require("firebase-admin");
const db = admin.firestore();

exports.addUserLog = async (req, res) => {
  try {
    const { userName, role } = req.body;

    if (!userName || !role) {
      return res.status(400).json({ message: "userName and role are required" });
    }

    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-GB'); // e.g., "29/05/2025"
    const loginTime = now.toLocaleTimeString(); // e.g., "14:35:21"
    const logout = ' - ';

    const logData = {
      userName,
      role,
      date: formattedDate,
      login: loginTime,
      logout:logout
    };

    await db.collection("userlog").add(logData);

    res.status(201).json({ message: "User log added successfully", data: logData });
  } catch (error) {
    console.error("Error adding user log:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
