const express = require("express");
const cors = require("cors"); // ✅ Import CORS
const app = express();
const loginRoutes = require("./routes/loginRoutes");
const userLogRoutes = require("./routes/userLogRoutes"); // 👈 Import userlog routes
const inverterRoutes = require('./routes/inverterRoutes');

// ✅ Enable CORS for frontend at localhost:3001
app.use(cors({
  origin: "http://localhost:3002",
  credentials: true // Optional: only needed if using cookies or sessions
}));

// ✅ Enable JSON parsing
app.use(express.json());

// ✅ Mount your login routes
app.use("/api", loginRoutes); //FOR USER LOGIN PURPOSE
app.use("/api", userLogRoutes);
app.use('/api', inverterRoutes); //Inverter data storage

module.exports = app;
