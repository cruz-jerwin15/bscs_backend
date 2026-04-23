require('dotenv').config();
const express = require('express'); 
const pool = require('./config/db');
const PORT = process.env.PORT || 8002;

// declare all routes
const userRoutes = require('./routes/userRoutes');

const app = express();

//Middleware
app.use(express.json());


//Routes
app.use('/api/users', userRoutes);
// app.use('/api/courses', courseRoutes);


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



