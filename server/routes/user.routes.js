// Import our controller functions and utilize them with our desired URLs
const UserController = require('../controllers/user.controller');

// Routes that will go towards the controller to query the DB with server.js
module.exports = (app) => {

    // Find All Users
    app.get('/api/users', UserController.findAllUsers);

    // Create a User
    app.post('/api/users', UserController.createUser);

    // Edit a User
    app.put('/api/user/:id', UserController.updateUser);

    // Find a User
    app.get('/api/user/:id', UserController.findOneUser);

}