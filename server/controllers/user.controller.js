// Controller grabs the schema from our model file
// We can import the model's name here.
const User = require('../models/user.model');

module.exports.sayHello = (req, res) => {
    res.json({msg:'Did we connect? We are seeing Hello in our msg'})
}

// Find ALL Users
module.exports.findAllUsers = (req, res) => {
    User.find()
        .then(allUsers => {
            res.json({ results: allUsers })
        })
        .catch(err => {
            res.json({ msg: "Something went wrong Finding All Users", error: err})
        })
}

// Create one User with validation if User exists
// Can be created first in development in order to test findAll, findOne afterwards.
// Can begin by confirming successful User creation in the DB before building out other methods.
module.exports.createUser = (req, res) => {
    User.exists({ name: req.body.name })
        .then(userExists => {
            if(userExists) {
                return Promise.reject('User has been found in DB already.')
            } 
            return User.create(req.body);
        })
        .then(saveResult => res.json(saveResult))
        .catch(err => res.json(err));
}