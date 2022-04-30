const mongoose = require('mongoose'); //connecting the library

// creating the Schema for checking the ist
const listSchema = new mongoose.Schema({
    list: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});


const List = mongoose.model('List', listSchema);

module.exports = List;
