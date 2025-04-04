const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const questionRoutes = require('./routes/questionRoutes');
const optionRoutes = require('./routes/optionRoutes');

dotenv.config();
const { sequelize } = require('./config/db'); // Import sequelize correctly

const PORT = 8000;

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    credentials: true, // Allow cookies
  })
);

// API routes
app.use("/api/question", questionRoutes);
app.use("/api/option", optionRoutes);

// Test the database connection and start the server
sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connection has been established successfully.');
    return sequelize.sync({ force: false, alter: false }); // Set force: true to reset tables
  })
  .then(() => {
    console.log('✅ Database synced.');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Unable to connect to the database:', err);
  });
