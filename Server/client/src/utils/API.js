import axios from 'axios';

export default {
    // synonymous to the findUser method in controller
    // pass userCreds as an object
    // userCreds passed via req.body to mongo via express
    // endpoint = 'patientDB'
    Login: function(userCreds) {
        return axios.get("/api/authenticate/Login", userCreds);
    },
    // synonymous to the createUser method in controller
    // pass userCreds as an object
    // userCreds passed via req.body to mongo via express
    // endpoint = 'patientDB'
    Signup: function(userCreds) {
        return axios.post("/api/authenticate/Signup", userCreds);
    },
    // synonymous to the deleteUserCreds method in controller
    DeleteUser: function(username) {
        return axios.delete("/api/authenticate/DeleteUser/:" + username);
    }
}