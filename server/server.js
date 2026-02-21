const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
require("dotenv").config();  

app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/auth", authRoutes);
//test 
app.get("/", (req, res) => {
    res.send("Server is running successfully");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})