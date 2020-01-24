import React from 'react'
import { Page, Text, Document } from '@react-pdf/renderer';
import queue from 'queue'


const ViewPDF = (props) => {
  const {
    // firstName,
    // lastName,
    // medications,
    // doseage,
    heartRate,
    // bloodSugar,
    systolicBloodPressure,
    diastolicBloodPressure,
    // moodSentiment,
    // data,
    // dateOfBirth,
    // ethnicity,
    // weight,
    // height,
    // address,
    // phoneNumber,
    // disability,
    // tobaccoUse,
    // mrn
  } = props.data;
  // let height1 = (height[0] * 12) + height[1]
  // let personalData = lastName + ", " + firstName + " DOB: " + dateOfBirth + " MRN: " 
  // + mrn;
  const renderQueue = queue({
    autostart: true,
    concurrency: 1
  })


  let heart = "Blood Pressure | Systolic: " + systolicBloodPressure + " mm Hg | Diastolic: " + diastolicBloodPressure + " mm Hg (View Chart 1) | Pulse: " + heartRate + " bpm (View Chart 2)"
  // let diabetic = "Blood Glucose: " + bloodSugar + " mg/dL (View Chart 3) | Weight: " + weight + " lbs | BMI: " + (weight * 703) / (height1 * height1) + " (View Chart 4)"

  const PDFPDF = () => (
    <Document>
      <Page>
        <Text>
          {/* {personalData} */}
          {heart}
          {/* {diabetic} */}
        </Text>
      </Page>
    </Document>
  )
  render = () => {

    renderQueue.push(() => PDFPDF())


  }
}

export default ViewPDF;