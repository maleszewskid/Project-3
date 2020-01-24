import React, { Component } from 'react';
import Header from '../components/Header/Header';
import { PDFViewer } from '@react-pdf/renderer';
import ViewPDF from "../components/createPDF/"
import API from "../utils/API";
import '../assets/css/PDFViewer.css'

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

    render = () => {
        if (this.state.data) {
            return (
                <>
                    <Header user={this.state.username} />
                    <div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className='row'>
                            <div className='col'></div>
                            <div className='col'>
                                <PDFViewer id='PDFViewer'>
                                    <ViewPDF data={this.state.data} />
                                </PDFViewer>
                            </div>
                            <div className='col'></div>

                        </div>
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
