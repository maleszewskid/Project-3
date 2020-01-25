import React, { Component } from 'react';
import Header from '../components/Header/Header';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import ViewPDF from '../components/createPDF'
import EmailForm from '../components/EmailForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from '../utils/API';
import '../components/createPDF/PDFViewer.css';

// import { LineChart, Chart } from 'react-chartkick'
// import 'chart.js'

class SubmitToDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            data: '',
            loading: true,
            error: '',
            email: ''
        }
    }

    // When this component is mounted to the DOM we want to load in the user data and set the state with it:
    // Need username to make the call to the api, so how do we get the username?
    async componentDidMount() {
        this.setState({
            username: this.props.location.state
        });
        const { username } = this.props.location.state;
        console.log(username);
        API.allPatientData({ username })
            .then(res => {
                this.setState({
                    data: res.data,
                    loading: false
                })
                console.log(res.data)
            })
            .catch(error => {
                this.setState({
                    data: '',
                    loading: false,
                    error: error.message
                });
            })
    };

    // Handle email form input change, pass as props
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        // Updating the input’s state
        this.setState({
            email: value
        });
    };

    // Handle submit of email
    handleEmailSubmit = event => {
        event.preventDefault();
        
        API.sendEmail("http://localhost:3002/send", this.state.email).then(console.log('email sent'))


    }

    render = () => {
        if (this.state.data) {
            return (
                <>
                    <Header user={this.state.username} />
                    <div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <PDFDownloadLink document={<ViewPDF data={this.state.data} />} fileName={`PatientFirst_${this.state.data.lastName}.pdf`}>
                            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                        </PDFDownloadLink>

                        <Row>
                            <Col className="col-md-12">
                                <EmailForm />
                            </Col>
                        </Row>
                        <Row>
                            <div className='col-md-12 viewer-column'>
                                <PDFViewer id='PDFViewer'>
                                    <ViewPDF data={this.state.data} />
                                </PDFViewer>
                            </div>
                        </Row>
                    </div>

                </>
            )
        } else {
            return (
                <div>Loading data...</div>
            )
        }
    }
}




export default SubmitToDoctor;
