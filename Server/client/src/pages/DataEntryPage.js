import React, { Component } from 'react';
import Header from '../components/Header/Header';
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

            addDoseage: false,
            bloodError: false,
            moodError: false,
            medError: false,
            genError: false,
            bloodSuccess: false,
            moodSuccess: false,
            medSuccess: false,
            genSuccess: false,
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
            [name]: value,
            addDoseage: false,
            bloodSuccess: false,
            moodSuccess: false,
            medSuccess: false,
            genSuccess: false
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
        // Need to send this to mongoDB via method called addPatientData
        API.submitPatientData({ data })
            .then(data => {
                if (data) {
                    this.setState({
                        bloodSuccess: true
                    })
                }
            })
            .catch(err => {
                if (err) {
                    this.setState({
                        bloodError: true
                    })
                }
            })
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

        

        // Need to send this to mongoDB via method called addPatientData
        API.submitPatientData({ data })
            .then(data => {
                if (data) {
                    this.setState({
                        moodSuccess: true
                    })
                }
            })
            .catch(err => {
                if (err) {
                    this.setState({
                        moodError: true
                    })
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
        } else if (this.state.medication1 && !this.state.doseage1) {
            this.setState({
                addDoseage: true
            })
        }
        if (this.state.medication2 && this.state.doseage2) {
            medArray.push(this.state.medication2);
            doseArray.push(this.state.doseage2);
        } else if (this.state.medication2 && !this.state.doseage2) {
            this.setState({
                addDoseage: true
            })
        }
        if (this.state.medication3 && this.state.doseage3) {
            medArray.push(this.state.medication3);
            doseArray.push(this.state.doseage3);
        } else if (this.state.medication3 && !this.state.doseage3) {
            this.setState({
                addDoseage: true
            })
        }
        if (this.state.medication4 && this.state.doseage4) {
            medArray.push(this.state.medication4);
            doseArray.push(this.state.doseage4);
        } else if (this.state.medication4 && !this.state.doseage4) {
            this.setState({
                addDoseage: true
            })
        }
        if (this.state.medication5 && this.state.doseage5) {
            medArray.push(this.state.medication5);
            doseArray.push(this.state.doseage5);
        } else if (this.state.medication5 && !this.state.doseage5) {
            this.setState({
                addDoseage: true
            })
        }
        const data = {
            username: this.state.username,
            medications: medArray,
            doseage: doseArray
        };
        if (!this.state.addDoseage) {
            API.submitPatientData({ data })
                .then(data => {
                    if (data) {
                        this.setState({
                            medSuccess: true
                        })
                    }
                })
                .catch(err => {
                    if (err) {
                        this.setState({
                            medError: true
                        })
                    }
                })
        }
    }

    // Event handler to submit general data:
    handleGeneralSubmit = event => {
        event.preventDefault();
        const { username, feet, inches, weight, ethnicity, disability, tobaccoUse } = this.state;
        const data = {
            username,
            height: [feet, inches],
            weight,
            ethnicity,
            disability,
            tobaccoUse
        };
        API.submitPatientData({ data })
            .then(data => {
                if (data) {
                    this.setState({
                        genSuccess: true
                    })
                }
            })
            .catch(err => {
                if (err) {
                    this.setState({
                        genError: true
                    })
                }
            })
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
                    bloodError={this.state.bloodError}
                    moodError={this.state.moodError}
                    medError={this.state.medError}
                    genError={this.state.genError}
                    addDoseage={this.state.addDoseage}
                    bloodSuccess={this.state.bloodSuccess}
                    moodSuccess={this.state.moodSuccess}
                    medSuccess={this.state.medSuccess}
                    genSuccess={this.state.genSuccess}
                />
            </>
        )
    }

}

export default DataEntry;
