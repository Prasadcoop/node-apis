const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/routes');
const db = require('./config/db.config'); // Initiate database connection

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Use the user routes
app.use('/api', userRoutes); // Base route path set as `/api`

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

