//Import all the dependecies
const express = require('express');
const routes = require('../src/routes');
require('dotenv').config();

//Server Creation
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(routes);

//Listen Server at port specified or by defaulr 3000
app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});
