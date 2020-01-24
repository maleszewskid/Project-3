import React from 'react'
import { Page, Text, Document } from '@react-pdf/renderer';
// import API from "../utils/API";
// import Header from '../components/Header/Header';
// import { LineChart, Chart } from 'react-chartkick'
// import 'chart.js'
// When this component is mounted to the DOM we want to load in the user data and set the state with it:
// Need username to make the call to the api, so how do we get the username?
// componentDidMount() {
//     this.setState({
//         username: this.props.location.state
//     });
//     const { username } = this.props.location.state;
//     console.log(username);
//     API.allPatientData({ username })
//         .then(res => {
//             this.setState({
//                 data: res.data,
//                 loading: false
//             })
//             console.log(res.data)
//         })
//         .catch(error => {
//             this.setState({
//                 data: '',
//                 loading: false,
//                 error: error.message
//             });
//         })
// };

const ViewPDF = (props) => {
  const { firstName,
    lastName,
    // medications,
    // doseage,
    heartRate,
    bloodSugar,
    systolicBloodPressure,
    diastolicBloodPressure,
    // moodSentiment,
    // data,
    dateOfBirth,
    // ethnicity,
    weight,
    height,
    // address,
    // phoneNumber,
    // disability,
    // tobaccoUse,
    mrn
  } = props.data;

  let height1 = (height[0] * 12) + height[1]
  let personalData = lastName + ", " + firstName + " DOB: " + dateOfBirth + " MRN: " + mrn;
  let heart = "Blood Pressure | Systolic: " + systolicBloodPressure + " mm Hg | Diastolic: " + diastolicBloodPressure + " mm Hg (View Chart 1) | Pulse: " + heartRate + " bpm (View Chart 2)"
  let diabetic = "Blood Glucose: " + bloodSugar + " mg/dL (View Chart 3) | Weight: " + weight + " lbs | BMI: " + (weight * 703) / (height1 * height1) + " (View Chart 4)"
  return (

    <Document>
      <Page>
        <Text>
          {personalData}
          {heart}
          {diabetic}
        </Text>
      </Page>
    </Document>

  );
}

export default ViewPDF;