// import React from 'react'
// import { Page, Text, Document, Image, Font, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
// import API from "../utils/API";
// // import Header from '../components/Header/Header';
// // import { LineChart, Chart } from 'react-chartkick'
// // import 'chart.js'


// class PDF extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             data: '',
//             loading: true,
//             error: '',
//         }
//     }

//     // When this component is mounted to the DOM we want to load in the user data and set the state with it:
//     // Need username to make the call to the api, so how do we get the username?
//     componentDidMount() {
//         this.setState({
//             username: this.props.location.state
//         });
//         const { username } = this.props.location.state;
//         console.log(username);
//         API.allPatientData({ username })
//             .then(res => {
//                 this.setState({
//                     data: res.data,
//                     loading: false
//                 })
//                 console.log(res.data)
//             })
//             .catch(error => {
//                 this.setState({
//                     data: '',
//                     loading: false,
//                     error: error.message
//                 });
//             })
//     };

//     render = () => {
//         const { firstName,
//             lastName,
//             medications,
//             doseage,
//             heartRate,
//             bloodSugar,
//             systolicBloodPressure,
//             diastolicBloodPressure,
//             moodSentiment,
//             data,
//             dateOfBirth,
//             ethnicity,
//             weight,
//             height,
//             address,
//             phoneNumber,
//             disability,
//             tobaccoUse,
//             mrn
//         } = this.state.data;

// const personalData = lastName + ", " + firstName + " DOB: " + dateofBirth + " MRN: " + mrn;
// const heart = "Blood Pressure | Systolic: " + systolicBloodPressure + " mm Hg | Diastolic: " + diastolicBloodPressure + " mm Hg (View Chart 1) | Pulse: " + heartRate + " bpm (View Chart 2)"
// const diabetic = "Blood Glucose: " + bloodSugar + " mg/dL (View Chart 3) | Weight: " + weight + " lbs | BMI: " + (snapshot.val().weight * 703) / (snapshot.val().height * snapshot.val().height) + " (View Chart 4)"
// const Quote = () => (
//   <Document>
//     <Page>
//       <Text>
//         {personalData}
//       </Text>
//       <Text>
//           {heart}
//           </Text>
//           <Text>
//           {diabetic}
//           </Text>
//     </Page>
//   </Document>
// );


// export default PDF;