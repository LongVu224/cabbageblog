const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubcribeSchema = new Schema({
    email: String
});

module.exports = mongoose.model('Subcribe', SubcribeSchema)