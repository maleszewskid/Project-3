import React from 'react'

import { Page, Document, View, StyleSheet, } from '@react-pdf/renderer';
// Footer,
// Text,
// Title, Author, Subtitle,
// BlobProvider,
// Paragraph 

import styled from '@react-pdf/styled-components'
import './PDFViewer.css'
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
    // data,
    dateofBirth,
    // ethnicity,
    weight,
    height,
    address,
    phoneNumber,
    disability,
    // tobaccoUse,
    mrn
  } = props.data;
  let height1 = (height[0] * 12) + height[1];
  let personalData = "DOB: " + dateofBirth;
  let heart = "Blood Pressure | Systolic: " + systolicBloodPressure + " mm Hg | Diastolic: " + diastolicBloodPressure + " mm Hg (Blood Pressure Chart) \n Heart Rate: " + heartRate + " bpm (Heart Rate Chart)\n"
  let diabetic = "Blood Sugar: " + bloodSugar + " mg/dL (Blood Sugar Chart) | Weight: " + weight + " lbs | BMI: " + (weight * 703) / (height1 * height1)
  const styles = StyleSheet.create({
    page: { backgroundColor: 'white' },
    section: { color: 'black', textAlign: 'center', margin: 30 },
  });
  let meds = medications + '\n' + doseage


  const Heading = styled.Text`
  margin: 10px;
  font-size: 22px;
  font-family: 'Helvetica';
`;
  const Author = styled.Text`
  font-size: 30px;
  text-align: center;
  margin-bottom: 15px;
`;
  const Header = styled.Text`
  color: grey;
  font-size: 12px;
  text-align: center;
 
`;
  const Paragraph = styled.Text`
  margin: 12px;
  font-size: 14px;
  text-align: center;
  font-family: 'Times-Roman';
`;
  const Subtitle = styled.Text`
  font-weight: 900;
  font-size: 15px;
  font-family: 'Times-Roman';
  text-align: center;
`;
  const Footer = styled.Text`
  left: 0px;
  right: 0px;
  color: grey;
  bottom: 0;
  font-size: 12px;
  position: fixed;
  text-align: center;
`;
  let hr = '____________________________________________________________'

  return (
    <Document title={`PatientFirst_${lastName}.pdf`} fileName={lastName}>
      <Page style={styles.page}>
        <View style={styles.section}>

          <Header fixed>Patient First</Header>
          <Header style={{ marginTop: 15, }}> Medical Record Number: {mrn}</Header>
          <Header >{personalData}</Header>
          <Heading>Medical Summary:</Heading>

          <Author>{firstName} {lastName}</Author>
          {/* <Paragraph>{hr}</Paragraph> */}
          <Paragraph>{hr}</Paragraph>

          <Paragraph>
            {diabetic}
          </Paragraph>

          <Paragraph>{hr}</Paragraph>

          <Paragraph>
            {heart}
          </Paragraph>
          <Paragraph>{hr}</Paragraph>

          <Subtitle>Medications:</Subtitle>
          <Paragraph>
            {meds}
          </Paragraph>
          {/* <Paragraph>{hr}</Paragraph>

          <Subtitle>General Mood:</Subtitle>
          <Paragraph>
            {moodSentiment}
          </Paragraph> */}
          <Paragraph>{hr}</Paragraph>
          <Subtitle>Identified Disability:</Subtitle>
          <Paragraph>
            {disability}
          </Paragraph>

          <Paragraph></Paragraph>
          <Paragraph></Paragraph>
          <Paragraph></Paragraph>
          <Paragraph></Paragraph>
          <Paragraph></Paragraph>
          <Paragraph></Paragraph>
          <Paragraph></Paragraph>
          <Paragraph></Paragraph>



          <Footer>Refer to View Data Page to Download Charts.</Footer>
        <Footer render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
        </View>
      </Page>
    </Document >
  )
}
export default ViewPDF;