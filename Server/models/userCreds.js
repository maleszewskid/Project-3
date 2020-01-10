const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// User Credentials Schema
const UserCredSchema = new Schema ({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const userCred = mongoose.model("userCred", UserCredSchema);

module.exports = userCred;