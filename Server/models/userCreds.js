const mongoose = require ("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

// User Credentials Schema
const UserCredSchema = new Schema ({
    username: {
        type: String
    },
    password: {
        type: String
    }
})

// Need to define schema methods to both compare the password and hash it:
// Where is input password coming from?
UserCredSchema.methods ={
    checkPassword: function(inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
     },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

// Define some hooks for pre-saving:
UserCredSchema.pre('save', function(next){
    if (!this.password) {
        console.log('models/userCreds.js ***NO PASSWORD PROVIDED***')
        next()
    } else {
        console.log('models/userCreds hashPassword in pre save');
        this.password = this.hashPassword(this.password)
        next()
    }
})


const userCred = mongoose.model("userCred", UserCredSchema);

module.exports = userCred;