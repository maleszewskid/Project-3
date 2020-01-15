import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

// import './App.css';

class PdfInput extends Component {
  state = {
    name: '',
    systolic: 0,
    diastolic: 0,
    pulse: 0,
    glucose: 0,
    weight: 0
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    return (
      <div className="Input">
        <input type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
        <input type="number" placeholder="systolic" name="systolic" onChange={this.handleChange} />
        <input type="number" placeholder="diastolic" name="diastolic" onChange={this.handleChange} />
        <input type="number" placeholder="pulse" name="pulse" onChange={this.handleChange} />
        <input type="number" placeholder="glucose" name="glucose" onChange={this.handleChange} />
        <input type="number" placeholder="weight" name="weight" onChange={this.handleChange} />

        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
      </div>
    );
  }
}

export default PdfInput;
