import React, { Component } from 'react';
import Header from '../components/Header/Header';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PDF from "../components/createPDF/"
import { LineChart, Chart } from 'react-chartkick'
import 'chart.js'

class SubmitToDoctor extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             placeholder: ''
//         }
//     }

//     componentDidMount() {
//         this.setState({
//             username: this.props.location.state
//         });
//         const { username } = this.props.location.state;
//         console.log(username);
//     }

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
                    {/* <Header user={username} /> */}
                    <div>
                        This is submit to Doctor Page
                    </div>
                    <div>
                        <PDFViewer>
                        <PDF />
                        </PDFViewer>
                        </div>
                        {/* <div>
                        Chart 1:  
                        <LineChart xtitle='Date' ytitle='Blood Pressure' data={{ "2017-05-13": systolicBloodPressure, "2017-05-14": diastolicBloodPressure }} />
                        Chart 2:
                        <LineChart xtitle='Date' ytitle='Pulse' data={{ "2017-05-13": heartRate}} />
                        Chart 3:
                        <LineChart xtitle='Date' ytitle='Blood Glucose' data={{ "2017-05-13": bloodSugar }} />
                        Chart 4:
                        <LineChart xtitle='Date' ytitle='Weight | BMI' data={{ "2017-05-13": weight, "2017-05-13" : (snapshot.val().weight * 703) / (snapshot.val().height * snapshot.val().height) }} />
                        </div> */}
                </>
                )
        }
    }


                
            
export default SubmitToDoctor;
