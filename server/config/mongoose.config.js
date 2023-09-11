// Secure our connection to DB & utilize destructuring 
const { connect, mongo, default: mongoose } = require('mongoose');
const { config } = require('dotenv');

// Secure out credentials (export to pair with server.js)
module.exports = () => {

    // Invoke dotenv config
    config();

    // Mongoose 7, suppress warning
    mongoose.set('strictQuery', false);

    // Establish our URI with dotenv
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOC}.vddhv.mongodb.net/`;

    // Passing our DB information as options rather than within our connection string.
    // Removed deprecated options of useFindAndModify + useCreateIndex.
    connect(uri, {
        dbName: process.env.DB_NAME,
    })
    .then(() => {
        console.log(`Connection established to ${process.env.DB_NAME}`);
    })
    .catch(error => console.error(error.message));
    
    // Our connect method returns a PROMISE, so we use .then() and .catch()
}