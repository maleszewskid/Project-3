import React from 'react'
import { Page, Text, Document, View, Footer, Title, Author, Subtitle, StyleSheet, BlobProvider, Paragraph } from '@react-pdf/renderer';
import Header from '../Header/Header';
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
  let personalData = lastName + ", " + firstName + " DOB: " + dateOfBirth + " MRN: " + mrn;


  let heart = "Blood Pressure | Systolic: " + systolicBloodPressure + " mm Hg | Diastolic: " + diastolicBloodPressure + " mm Hg (View Chart 1) | Pulse: " + heartRate + " bpm (View Chart 2)\n"
  let diabetic = "Blood Glucose: " + bloodSugar + " mg/dL (View Chart 3) | Weight: " + weight + " lbs | BMI: " + (weight * 703) / (height1 * height1) + " (View Chart 4)\n"

  const styles = StyleSheet.create({
    page: { backgroundColor: 'white' },
    section: { color: 'black', textAlign: 'center', margin: 30 },
  });


  const Heading = styled.Text`
  margin: 10px;
  font-size: 22px;
  font-family: 'Helvetica';
`;
  const Author = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-bottom: 40px;
`;
  const Header = styled.Text`
  color: grey;
  font-size: 12px;
  text-align: center;
  margin-bottom: 20px;
`;
  const Paragraph = styled.Text`
  margin: 12px;
  font-size: 14px;
  text-align: center;
  font-family: 'Times-Roman';
`;
  const Subtitle = styled.Text`
  margin: 12px;
  font-size: 12px;
  font-family: 'Times-Roman';
  text-align: center;
`;
  const Footer = styled.Text`
  left: 0px;
  right: 0px;
  color: grey;
  bottom: 30px;
  font-size: 12px;
  position: absolute;
  text-align: center;
`;





  return (
    <Document title={`PatientFirst_${lastName}.pdf`} fileName={lastName}>
      <Page style={styles.page}>
        <View style={styles.section}>

          <Header fixed>
            Patient First
            </Header>
          <Heading>Medical Data</Heading>
          <Author>{firstName} {lastName}</Author>
          <Subtitle>{mrn}</Subtitle>
          <Subtitle>{address}</Subtitle>
          <Subtitle>{phoneNumber}</Subtitle>


          <Paragraph>
            {/* {personalData} */}
            {diabetic}
          </Paragraph>
          <Paragraph>
            {heart}
          </Paragraph>
          <Subtitle>Medications</Subtitle>
          <Paragraph>
            {medications}, {doseage} mg/ml
          </Paragraph>

          <Subtitle>General Mood</Subtitle>
          <Paragraph>
            {moodSentiment}
          </Paragraph>

          <Subtitle>Identified Disability</Subtitle>
          <Paragraph>
            {disability}
          </Paragraph>

          {/* <Footer render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
          )} fixed /> */}

        </View>
      </Page>
    </Document>
  )

  // renderQueue.push(() => PDFPDF())

}

export default ViewPDF;