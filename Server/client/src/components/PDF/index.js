import React from 'react'
import { Page, Text, Document, Image, Font, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { LineChart, Chart } from 'react-chartkick'
import 'chart.js'

const x = "3"


const Quote = () => (

  <Document >
    <Page >
      <Text style>
        {x}
      </Text>
    </Page>
  </Document>
);

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});





export default Quote;