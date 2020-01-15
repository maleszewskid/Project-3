import React, { Component } from "react";
import API from "../utils/API";
import { LineChart } from 'react-chartkick'
import 'chart.js'

class ViewData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            loading: true,
            error: '',
        }
    }

    // When this component is mounted to the DOM we want to load in the user data and set the state with it:
    // Need username to make the call to the api, so how do we get the username?
    async componentDidMount () {
        console.log(this.props);
        const { username } = this.props.location.state;
        try {
            API.allPatientData(username)
                .then(res => {
                    this.setState({
                        data: res.data,
                        loading: false
                    })
                    console.log(this.state.data)
                })
        } catch (error) {
            this.setState({
                loading: false,
                error: error.message
            });
        }
    }

    // This component will display the data using D3.js
    render = () => {
        const { firstName,
            lastName,
            medications,
            doseage,
            heartRate,
            bloodSugar,
            systolicBloodPressure,
            diastolicBloodPressure,
            moodSentiment,
            data,
            dateOfBirth,
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
                {(this.state.loading || this.state.error) && <div>{this.state.loading ? 'Loading...' : this.state.error}</div>}
                <div>
                    {firstName} {lastName}
                </div>
                <div>
                    {medications} {doseage}
                </div>
                <div>
                    {heartRate} {bloodSugar}
                </div>
                <div>
                    {systolicBloodPressure} {diastolicBloodPressure}
                </div>
                <div>
                    {moodSentiment} {data}
                </div>
                <div>
                    {dateOfBirth} {ethnicity}
                </div>
                <div>
                    {weight} {height}
                </div>
                <div>
                    {address} {phoneNumber}
                </div>
                <div>
                    {disability} {tobaccoUse} {mrn}
                </div>
                <LineChart xtitle='date' ytitle='bloodPressure' data={{ "2017-05-13": heartRate, "2017-05-14": bloodSugar }} />
            </>
        )
    }

}

export default ViewData;
