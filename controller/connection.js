const mongoose = require('mongoose') //library 
require('dotenv').config();

const connectionString = process.env.DB_URL

mongoose.connect(connectionString) .then(instance => console.log)
.catch(error => console.log('failed to connect', error));


// const db = mongoose.connection;



// console.log('Connected to Database');


module.exports = mongoose;  // exporting the database