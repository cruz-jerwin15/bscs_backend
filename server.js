require('dotenv').config();
const express = require('express'); 
const pool = require('./config/db');
const PORT = process.env.PORT || 8002;

const app = express();

//Middleware
app.use(express.json());



// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



