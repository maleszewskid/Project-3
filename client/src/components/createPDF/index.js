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
  margin: 5px;
  font-size: 22px;
  font-family: 'Helvetica';
`;
  const Author = styled.Text`
  font-size: 30px;
  text-align: center;
  margin-bottom: 5px;
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
const Picture = styled.Image`
  height: 5%;
  width: 7%;
  left: 47.5%;
  margin-top: 2.5px;
`;
  let hr = '____________________________________________________________'

  return (
    <Document title={`PatientFirst_${lastName}.pdf`} fileName={lastName}>
      <Page style={styles.page}>
        <View style={styles.section}>

          <Header fixed>Patient First</Header>
          <Header style={{ marginTop: 15, }}> Medical Record Number: {mrn}</Header>
          <Header >{personalData}</Header>
          <Header>{hr}</Header>
          <Picture src='data:image/png;base64,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'/>
          <Heading>Medical Summary:</Heading>


          <Author>{firstName} {lastName}</Author>
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

          <Paragraph>{hr}</Paragraph>
          <Subtitle>Identified Disability:</Subtitle>
          <Paragraph>
            {disability}
          </Paragraph>

          <Paragraph></Paragraph>
          <Paragraph></Paragraph>
          <Paragraph></Paragraph>
          <Paragraph></Paragraph>



          <Paragraph>{hr}</Paragraph>
          <Footer render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
          )} fixed />
          <Footer>Refer to View Data Page to Download Charts.</Footer>
        </View>
      </Page>
    </Document >
  )
}
export default ViewPDF;