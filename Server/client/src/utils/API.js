import axios from 'axios';

export default {
    // ------- USER LOGIN -------  
    // synonymous to the findUser method in controller
    // pass userCreds as an object
    // userCreds passed via req.body to mongo via express
    // endpoint = 'patientDB'
    Login: function(userCreds) {
        return axios.post("/api/authenticate/Login", userCreds);
    },
    // synonymous to the createUser method in controller
    // pass userCreds as an object
    // userCreds passed via req.body to mongo via express
    // endpoint = 'patientDB'
    Signup: function(userCreds) {
        return axios.post("/api/authenticate/Signup", userCreds);
    },
    // Create new patient in patientInfo upon signup:
    createUser: function(patientInfo) {
        return axios.post('/api/patient/createPatient', patientInfo);
    },
    // synonymous to the deleteUserCreds method in controller
    DeleteUser: function(username) {
        return axios.delete("/api/authenticate/DeleteUser/:" + username);
    },
    // ------- USER DATA -------
    // This will grab all patient data and send it to the front end for graphing. 
    allPatientData : function(username) {
        return axios.get('/api/patient/allData', username)
    }
}