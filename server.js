// Import deconstructing from DOTENV and invoking DOTENV
const { config } = require('dotenv');
config();

// -- STEP 1 --
const express = require('express');
const cors = require('cors');
const app = express();

// store DOTENV port information
const port = process.env.DB_PORT;

// -- STEP 2 --
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// -- STEP 3 --
// Routing
// Uncomment to test with Postman
const AllMyUserRoutes = require('./server/routes/user.routes.js');
AllMyUserRoutes(app);


/** -- STEP 4 --
 * Connect to DB, if error, check file struture and file nomenclature.
 * Goes to mongoose.config.js file then the following.
 * React18 + MongoDB Cloud (backend). Using the below code, ends with ().
 * Needed for establishing our connection securely
 * require('./server/config/mongoose.config');
 */
require('./server/config/mongoose.config.js')();

// Custom Response on successful connection to our backend
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})