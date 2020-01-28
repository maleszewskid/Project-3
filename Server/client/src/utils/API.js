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
    // Logout user
    Logout: function() {
        return axios.get("/api/authenticate/Logout");
    },
    // synonymous to the createUser method in controller
    // pass userCreds as an object
    // userCreds passed via req.body to mongo via express
    // endpoint = 'patientDB'
    Signup: function(userCreds) {
        return axios.post('/api/authenticate/Signup', userCreds);
    },
    // Create new patient in patientInfo upon signup:
    createUser: function(patientInfo) {
        return axios.post('/api/patient/createPatient', patientInfo);
    },
    // synonymous to the deleteUserCreds method in controller
    DeleteUser: function(username) {
        return axios.delete('/api/authenticate/DeleteUser/:' + username);
    },
    // ------- USER DATA -------
    // This will grab all patient data and send it to the front end for graphing. 
    allPatientData : function(username) {
        return axios.get('/api/patient/allData/' + username.username)
    },
    // Add patient data to DB:
    submitBloodData: function(data) {
        return axios.post('/api/patient/addBloodData', data)
    },
    submitMoodData: function(data) {
        return axios.post('/api/patient/addMoodData', data)
    },
    submitMedData: function(data) {
        return axios.post('/api/patient/addMedData', data)
    },
    updateMedData: function(data) {
        return axios.post('/api/patient/updateMedData', data)
    },
    submitGenData: function(data) {
        return axios.post('/api/patient/addGenData', data)
    },
    // update patient password here, Jack to test this function
    updatePatientPassword: function(username) {
        return axios.update('/UpdatePassword/:' + username)
    },
    sendEmail: function(emailAddress) {
        console.log(emailAddress);
        return axios.post('/api/send/email', emailAddress)
    }

}