import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//Import Charts:
import MainChart from '../Charts/mainChart';
//import CSS

const ViewTabs = (props) => {
    const [key, setKey] = useState('home');
    const { firstName,
        lastName,
        dateOfBirth,
        medications,
        doseage,
        medsTimeStamp,
        heartRate,
        bloodSugar,
        systolicBloodPressure,
        diastolicBloodPressure,
        bloodTimeStamp,
        journalEntrySentiment,
        journalEntry,
        moodTimeStamp,
        ethnicity,
        weight,
        height,
        address,
        phoneNumber,
        disability,
        tobaccoUse,
        genTimeStamp,
        mrn
    } = props.data;
    let data = [
        //The data field will be a combination of date and the data value. Date will be the key, and the data item from that date will be the value.
        {name: 'Heart Rate', data:{}},
        {name: 'Blood Sugar', data:{}},
        {name: 'Systolic Blood Pressure', data:{}},
        {name: 'Diastolic Blood Pressure', data:{}},
        {name: 'Sentiment', data:{}}
    ]
    return (
        <Container className='Main-Tab-Container'>
            <Row>
                <Col className='tab-content'>
                    <Tabs className="text-center" id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                        <Tab eventKey='graphs' title='Graphs'>
                            <Card>
                                <Card.Body>
                                    <MainChart data={heartRate} />
                                </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey='journalEntries' title="Journal Entries">
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col>{moodTimeStamp.map(date => (
                                            <div>{date}</div>
                                        )
                                        )}</Col>
                                        <Col>{journalEntry.map(entry => (
                                            <div>{entry}</div>
                                        )
                                        )}</Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey='meds' title='Medication'>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            {medications.map(med => (
                                                <div>{med}</div>
                                            )
                                            )}
                                        </Col>
                                        <Col>
                                        {doseage.map(dose => (
                                                <div>{dose}</div>
                                            )
                                            )}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey='general' title='General'>
                            <Card>
                                <Card.Body>

                                </Card.Body>
                            </Card>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );

};

export default ViewTabs;