const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Logins = mongoose.model('Logins',loginSchema);
module.exports = Logins;