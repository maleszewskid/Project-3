import React, { Component } from 'react';
import Header from '../components/Header/Header';
/* import EntryBody from '../components/EntryBody'; */
import API from '../utils/API';
// import axios from 'axios';
import EntryTabs from '../components/EntryTabs';

class DataEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            medications: [],
            doseage: []
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
        console.log(this.state);
    };


    // Event Handler to submit Blood data:
    handleBloodSubmit = event => {
        event.preventDefault();
        const { heartRate, bloodSugar, systolicBloodPressure, diastolicBloodPressure } = this.state;
        const data = {
            heartRate,
            bloodSugar,
            systolicBloodPressure,
            diastolicBloodPressure
        };
        console.log(data);
        // Need to send this to mongoDB via method called addPatientData
    }

    // Event Handler to submit Mood data:
    handleMoodSubmit = event => {
        event.preventDefault();
        const { journalEntry } = this.state;
        const data = {
            journalEntry
        };
        console.log(data);
        // Need to send this to mongoDB via method called addPatientData
    }

    // Event Handler to submit Medication data:
    handleMedsSubmit = event => {
        event.preventDefault();
        
        // Need to send this to mongoDB via method called addPatientData
    }


    render = () => {
        const username = this.props.location.state;
        return (
            <>
                <Header user={username} />
                <EntryTabs onChange={this.handleInputChange}
                    onBloodClick={this.handleBloodSubmit}
                    onMoodClick={this.handleMoodSubmit}
                    onMedsClick={this.handleMedsSubmit} />
            </>
        )
    }

}

export default DataEntry;
