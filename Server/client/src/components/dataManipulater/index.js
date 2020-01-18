import React, { Component } from "react";
import API from "../utils/API";
// import Header from '../components/Header/Header';
// import { LineChart, Chart } from 'react-chartkick'
// import 'chart.js'

class DataManipulator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            data: '',
            loading: true,
            error: '',
        }
    }

    // When this component is mounted to the DOM we want to load in the user data and set the state with it:
    // Need username to make the call to the api, so how do we get the username?
    componentDidMount() {
        this.setState({
            username: this.props.location.state
        });
        const { username } = this.props.location.state;
        console.log(username);
        API.allPatientData({ username })
            .then(res => {
                this.setState({
                    data: res.data,
                    loading: false
                })
                console.log(res.data)
            })
            .catch(error => {
                this.setState({
                    data: '',
                    loading: false,
                    error: error.message
                });
            })
    };

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
            <div className="card">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Choose one:</label>
                <select class="form-control" id="vitals">
                  <option>Blood Pressure</option>
                  <option>Pulse</option>
                  <option>Blood Glucose</option>
                  <option>Weight</option>
                </select>
              </div>
              <div>
                  {/* Need to add two date choosers to get time frame to fetch data */}
                  </div>
              <button type="button" class="btn btn-primary1" onclick="vitalChooser">Save changes</button>

                </div>
            </>
                   )
                }
            
            }
            
            var type = "";
            var vitalType = [];           
       function vitalChooser () {
            type = document.getElementById("vitals").value
            switch (type){
                case "Blood Pressure": vitalType = [systolicBloodPressure, diastolicBloodPressure];
                case "Pulse": vitalType = [heartRate];
                case "Blood Glucose": vitalType = [bloodSugar];
                case "Weight": vitalType = [weight]
                default: vitalType = [];
            } 
            dataCaller();
            }
            var chart = "";
            function dataCaller () {
                // for (var i = 0; startDate <= i <= endDate; i++) --- gotta convert time to numbers
                // switch (type){
                //     case "Blood Pressure": 
                //         chart = document.innerHTML(<LineChart xtitle='Date' ytitle='Blood Pressure' data={{ "2017-05-13": systolicBloodPressure, "2017-05-14": diastolicBloodPressure }} />);
                        
                //     case "Pulse": 

                //     case "Blood Glucose": 

                //     case "Weight":

                //     default: 
                // } 
                    
                }
            

            export default DataManipulator;
            