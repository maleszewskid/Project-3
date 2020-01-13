import React, { Component } from "react";
import API from "../utils/API";
// Import the API
//import API from '../utils/API';

class ViewData extends Component {
    constructor() {
        super();
        this.state = {
            data: ''
        }
    }

    // When this component is mounted to the DOM we want to load in the user data and set the state with it:
    // Need username to make the call to the api, so how do we get the username?
    componentDidMount = () => {
        const { username } = this.props.location.state;
        API.allPatientData(username)
            .then(res => {
                this.setState({
                    data: res.data
                })
                console.log(this.state.data)
            })
    }

    // This component will display the data using D3.js
    render = () => {
        const { firstName,
            lastName,
            medications,
            doseage,
            heartRate,
            bloocSugar,
            systolicBloodPressure,
            diastolicBloodPressure,
            moodSentiment,
            data,
            dataOfBirth,
            ethnicity,
            weight,
            height,
            address,
            phoneNumber,
            disability,
            tobaccoUse,
            mrn
        } = this.state.data;
        return (
            <>
                <div>
                    {firstName} {lastName}
                </div>
                <div>
                    {medications} {doseage}
                </div>
            </>
        )
    }

}

export default ViewData;
