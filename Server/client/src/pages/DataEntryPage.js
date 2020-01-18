import React, { Component } from 'react';
import Header from '../components/Header/Header';
import API from '../utils/API';
// import axios from 'axios';
import EntryTabs from '../components/EntryTabs';

class DataEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }

    componentDidMount() {
        this.setState({
            username: this.props.location.state
        });
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        // Updating the input’s state
        this.setState({
            [name]: value
        });
    };

    // Event Handler to submit Blood data:
    handleBloodSubmit = event => {
        event.preventDefault();
        const { username, heartRate, bloodSugar, systolicBloodPressure, diastolicBloodPressure } = this.state;
        const data = {
            username,
            heartRate,
            bloodSugar,
            systolicBloodPressure,
            diastolicBloodPressure
        };
        // Need to send this to mongoDB via method called addPatientData
        API.submitPatientData({data})
            .then(res => console.log(res))
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }

    // Event Handler to submit Mood data:
    handleMoodSubmit = event => {
        event.preventDefault();
        const { username, journalEntry } = this.state;
        const data = {
            username,
            journalEntry
        };
        // Need to send this to mongoDB via method called addPatientData
        API.submitPatientData({data})
            .then(res => console.log(res))
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }

    // Event Handler to submit Medication data:
    handleMedsSubmit = event => {
        event.preventDefault();
        const medArray = [];
        const doseArray = [];
        if (this.state.medication1 && this.state.doseage1) {
            medArray.push(this.state.medication1);
            doseArray.push(this.state.doseage1);
        }
        if (this.state.medication2 && this.state.doseage2) {
            medArray.push(this.state.medication2);
            doseArray.push(this.state.doseage2);
        }
        if (this.state.medication3 && this.state.doseage3) {
            medArray.push(this.state.medication3);
            doseArray.push(this.state.doseage3);
        }
        if (this.state.medication4 && this.state.doseage4) {
            medArray.push(this.state.medication4);
            doseArray.push(this.state.doseage4);
        }
        if (this.state.medication5 && this.state.doseage5) {
            medArray.push(this.state.medication5);
            doseArray.push(this.state.doseage5);
        }
        const data = {
            username: this.state.username,
            medications: medArray,
            doseage: doseArray
        };
        API.submitPatientData({data})
            .then(res => console.log(res))
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }

    // Event handler to submit general data:
    handleGeneralSubmit = event => {
        event.preventDefault();
        const { username, feet, inches, weight, ethnicity, disability, tobaccoUse  } = this.state;
        const data = {
            username,
            height: [feet, inches],
            weight,
            ethnicity,
            disability,
            tobaccoUse
        };
        API.submitPatientData({data})
            .then(res => console.log(res))
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }


    render = () => {
        const username = this.props.location.state;
        return (
            <>
                <Header user={username} />
                <EntryTabs onChange={this.handleInputChange}
                    onBloodClick={this.handleBloodSubmit}
                    onMoodClick={this.handleMoodSubmit}
                    onMedsClick={this.handleMedsSubmit}
                    onGenClick={this.handleGeneralSubmit}
                     />
            </>
        )
    }

}

export default DataEntry;
