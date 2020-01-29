import React, { Component } from 'react';
import Header from '../components/Header/Header';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import ViewPDF from '../components/createPDF'
import EmailForm from '../components/EmailForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from '../utils/API';
import '../components/createPDF/PDFViewer.css';

import Button from 'react-bootstrap/Button'

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
        API.allPatientData({ username })
            .then(res => {
                this.setState({
                    data: res.data,
                    loading: false
                })
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
        const { value } = event.target;
        // Updating the input’s state
        this.setState({
            email: value
        });
    };

    render = () => {
        if (this.state.data) {
            return (
                <>
                    <Header user={this.state.username} />
                    <div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Row>
                            <Col className="col-md-12">
                                <EmailForm data={this.state.data}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-md-12 text-center pt-2'>
                                <Button type="submit" variant="light">
                                    <PDFDownloadLink document={<ViewPDF data={this.state.data} />} fileName={`PatientFirst_${this.state.data.lastName}.pdf`}>
                                        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
                                    </PDFDownloadLink>
                                </Button>
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
