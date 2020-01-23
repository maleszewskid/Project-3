import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
//Import Charts:
import BloodPressureChart from '../Charts/BloodPressureChart';
import BloodSugarChart from '../Charts/BloodSugarChart';
import HeartRateChart from '../Charts/HeartRateChart';
import SentimentChart from '../Charts/SentimentChart';
//import CSS
import './ViewTabs.css';

const makeNewObj = (k, v) => {
    let newObj = {};
    let key = '';
    let value = '';
    for (let i = 0; i < k.length; i++) {
        key = k[i]
        value = v[i]
        newObj[key] = value;
    }
    return newObj;
}

const ViewTabs = (props) => {
    const [key, setKey] = useState('graphs');
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

    let re = new RegExp('^(\d{4}|\d{2}|\d{2})$');

    //--- Create data for the graphs: ---
    let heartRateData = makeNewObj(bloodTimeStamp, heartRate);
    let bloodSugarData = makeNewObj(bloodTimeStamp, bloodSugar);
    let systolicBloodPressureData = makeNewObj(bloodTimeStamp, systolicBloodPressure);
    let diastolicBloodPressureData = makeNewObj(bloodTimeStamp, diastolicBloodPressure);
    let journalEntrySentimentData = makeNewObj(moodTimeStamp, journalEntrySentiment);

    let bloodPressureGraph = [
        { name: 'Systolic Blood Pressure', data: { ...systolicBloodPressureData } },
        { name: 'Diastolic Blood Pressure', data: { ...diastolicBloodPressureData } }
    ]

    let bloodSugarGraph = [
        { name: 'Blood Sugar', data: { ...bloodSugarData } }
    ]

    let heartRateGraph = [
        { name: 'Heart Rate', data: { ...heartRateData } }
    ]

    let sentimentGraph = [
        { name: 'Sentiment', data: { ...journalEntrySentimentData } }
    ]

    //--- Create an object for the medications:
    const medList = makeNewObj(medications, doseage);

    //--- Create an object for the journal entries:
    const journalList = makeNewObj(moodTimeStamp, journalEntry);
    console.log(journalList);
    //--- Render the page:
    return (
        <Container className='View-Tab-Container'>
            <Row>
                <Col className='view-tab-content'>
                    <Tabs className="text-center" id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                        <Tab eventKey='graphs' title='Trend Charts'>
                            <Card className="chart-card">
                                <Card.Body className="chart-card-body">
                                    <BloodPressureChart data={bloodPressureGraph} />
                                    <BloodSugarChart data={bloodSugarGraph} />
                                    <HeartRateChart data={heartRateGraph} />
                                    <SentimentChart data={sentimentGraph} />
                                </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey='journalEntries' title="Journal Entries">
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Accordion defaultActiveKey="0">
                                            {Object.entries(journalList).map(elem => (
                                                <Card>
                                                    <Accordion.Toggle className='text-center' as={Card.Header} eventKey={elem[0]}>
                                                        {elem[0].slice(0, 10)}
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey={elem[0]}>
                                                        <Card.Body>{elem[1]}</Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                            )
                                            )}
                                        </Accordion>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey='meds' title='Medications'>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Table striped bordered hover size="sm">
                                            <thead>
                                                <tr>
                                                    <th>Medication</th>
                                                    <th>Doseage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Object.entries(medList).map(elem => (
                                                    <tr>
                                                        <td key={elem[0]}>{elem[0]}</td>
                                                        <td key={elem[1]}>{elem[1]}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey='generalinfo' title='General'>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <h4>Height</h4>
                                        </Col>
                                        <Col>
                                            <h4>Weight</h4>
                                        </Col>
                                        <Col>
                                            <h4>Ethnicity</h4>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col>
                                            <div>{height[0]},{height[1]}</div>
                                        </Col>
                                        <Col>
                                            <div>{weight}</div>
                                        </Col>
                                        <Col>
                                            <div>{ethnicity}</div>
                                        </Col>
                                    </Row>
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