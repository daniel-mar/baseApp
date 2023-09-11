// Store Mongoose functionality object
const mongoose = require('mongoose');

// Note: We are modeling our data here, using it's functionality within the controllers per schema.
// Start simple, we want a user to post and view these users as we put them in.
// Being non relational database, we can update the schema and our controllers interaction with the data.

// PATH refers to the left side of json value, VALUE refers to what the input is.
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "You must have a {PATH}"],
            minlength: [2, "{PATH} must have at least 2 chars"],
            maxlength: 63
        },
        age: {
            type: Number,
            required: [true, "You must have a {PATH}"],
            min: [18, "Your {PATH} must be at least 18, you entered {VALUE}"]
        }
    },
    {timestamps: true}
);

// This part saves it to our DB
const User = mongoose.model('User', UserSchema)

// exportable, for use in our controller
module.exports = User;