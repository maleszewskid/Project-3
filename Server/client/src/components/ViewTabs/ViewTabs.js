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
                                    {journalEntry.map(entry => (
                                    <div>{entry}</div>
                                    )
                                    )}
                                </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey='meds' title='Medication'>
                            <Card>
                                <Card.Body>

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