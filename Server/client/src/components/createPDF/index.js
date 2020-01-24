import React from 'react'
import { Page, Text, Document, View, Title, Author } from '@react-pdf/renderer';
import Header from '../Header/Header';




const ViewPDF = (props) => {
  const {
    firstName,
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
  } = props.data;
  let height1 = (height[0] * 12) + height[1];
  let personalData = lastName + ", " + firstName + " DOB: " + dateOfBirth + " MRN: "+ mrn;


  let heart = "Blood Pressure | Systolic: " + systolicBloodPressure + " mm Hg | Diastolic: " + diastolicBloodPressure + " mm Hg (View Chart 1) | Pulse: " + heartRate + " bpm (View Chart 2)\n"
  let diabetic = "Blood Glucose: " + bloodSugar + " mg/dL (View Chart 3) | Weight: " + weight + " lbs | BMI: " + (weight * 703) / (height1 * height1) + " (View Chart 4)\n"




  return (
    <Document>
      <Page size='A4' style={{ backgroundColor: 'black', color: 'white' }}>
        <View style={{ color: 'white', textAlign: 'center', margin: 30 }}>
          {/* <Header>Medical Data</Header> */}
          {/* <Title>Don Quijote de la Mancha</Title> */}          
          <Text>
            {personalData}
            {diabetic}
            {heart}
          </Text>
        </View>
      </Page>
    </Document>
  )

  // renderQueue.push(() => PDFPDF())

}

export default ViewPDF;