import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import EntryBody from '../components/EntryBody';
import API from '../utils/API';
import PdfInput from '../components/PdfInput';
import axios from 'axios';
import { saveAs } from 'file-saver';

class DataEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DataInputs: {}
        };
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        // Updating the input’s state
        this.setState({
            [name]: value
        });
    };

    // event handler for onclick of submit button in login form
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            DataInputs: {
                systolic: this.state.systolic,
                diastolic: this.state.diastolic,
                pulse: this.state.pulse,
                glucose: this.state.glucose,
                weight: this.state.weight,
            }

        })

        // Need to send this to mongoDB via method called addPatientData
        API.Login(this.state.DataInputs)
            // here -> redirect the user to the landing page
            .then(res => {
                // Need to have this redirect to the main page:
                if (res.status === 200) {
                    // Set the redirect route:
                    this.setState({
                        redirectTo: '/Landing',
                        loggedIn: true,
                        username: res.data.username
                    })
                }
            })
            .catch(err => console.log(err)
            )
    }

    createAndDownloadPdf = () => {
        axios.post('/create-pdf', this.state)
          .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'newPdf.pdf');
          })
      }



    render = () => {
        console.log(this.state.DataInputs);
        const username = this.props.location.state;
        return (
            <>
            <Header user={username} />
            <div>
                <Link
                    to="/DataEntry"
                    className={window.location.pathname === '/DataEntry'}
                >
                </Link>
                <EntryBody onChange={this.handleInputChange}
                    onClick={this.handleSubmit}
                    data={this.state.DataInputs} />
                <PdfInput />
            </div>
            </>
        )
    }

}

export default DataEntry;
