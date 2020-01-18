import React, { Component } from 'react';
import Header from '../components/Header/Header';
/* import EntryBody from '../components/EntryBody'; */
import API from '../utils/API';
// import axios from 'axios';
import EntryTabs from '../components/EntryTabs';

// Importing sentiment lib
import Sentiment from 'sentiment';

class DataEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            journalEntry: '',
            journalEntrySentiment: 0 
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
        // console.log(this.state);
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
        console.log(data);
        // Need to send this to mongoDB via method called addPatientData
    }

    // Event handler to detect Journal sentiment
    handleMoodInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value
        // Updating the input’s state
        this.setState({
            journalEntry: value
        });

        console.log(this.state.journalEntry);
    };


    // calculateSentiment
    calculateSentiment = (journalText) => {
        let sentiment = new Sentiment();
        let result = sentiment.analyze(journalText);
        console.log(result.score);

        this.setState({
            journalEntrySentiment: result.score
        })

        console.log(this.state.journalEntrySentiment);
    }



    // Event Handler to submit Mood data:
    handleMoodSubmit = event => {
        event.preventDefault();
        const { username, journalEntry } = this.state;
        const data = {
            username,
            journalEntry
        };
        console.log(data);
        
        this.calculateSentiment(data.journalEntry);
        
        console.log(this.state.journalEntrySentiment);

        // Need to send this to mongoDB via method called addPatientData
    }

    // Event Handler to submit Medication data:
    handleMedsSubmit = event => {
        event.preventDefault();
        const medArray = [];
        const doseArray = [];
        if (this.state.medication1 && this.state.doseage1) {
            medArray.push(this.state.medication1);
            doseArray.push(this.state.doseage1);
            console.log(medArray);
            console.log(doseArray);
        }
        if (this.state.medication2 && this.state.doseage2) {
            medArray.push(this.state.medication2);
            doseArray.push(this.state.doseage2);
            console.log(medArray);
            console.log(doseArray);
        }
        if (this.state.medication3 && this.state.doseage3) {
            medArray.push(this.state.medication3);
            doseArray.push(this.state.doseage3);
            console.log(medArray);
            console.log(doseArray);
        }
        if (this.state.medication4 && this.state.doseage4) {
            medArray.push(this.state.medication4);
            doseArray.push(this.state.doseage4);
            console.log(medArray);
            console.log(doseArray);
        }
        if (this.state.medication5 && this.state.doseage5) {
            medArray.push(this.state.medication5);
            doseArray.push(this.state.doseage5);
            console.log(medArray);
            console.log(doseArray);
        }
        // Need to send this to mongoDB via method called addPatientData
    }

    // Event handler to submit general data:
    handleGeneralSubmit = event => {
        event.preventDefault();
    }


    render = () => {
        const username = this.props.location.state;
        return (
            <>
                <Header user={username} />
                <EntryTabs onChange={this.handleInputChange}
                    onMoodChange={this.handleMoodInputChange}
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
