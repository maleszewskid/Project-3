import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//Import Charts:
import BloodPressureChart from '../Charts/BloodPressureChart';
import BloodSugarChart from '../Charts/BloodSugarChart';
import HeartRateChart from '../Charts/HeartRateChart';
import SentimentChart from '../Charts/SentimentChart';
//import CSS

const loopOverTimeStamp = (timeStamp, data) => {
    let newObj = {};
    let key = '';
    let value = '';
    for (let i = 0; i < timeStamp.length; i++) {
        key = timeStamp[i]
        value = data[i]
        newObj[key] = value;
    }
    return newObj;
}

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

    let heartRateData = loopOverTimeStamp(bloodTimeStamp, heartRate);
    let bloodSugarData = loopOverTimeStamp(bloodTimeStamp, bloodSugar);
    let systolicBloodPressureData = loopOverTimeStamp(bloodTimeStamp, systolicBloodPressure);
    let diastolicBloodPressureData = loopOverTimeStamp(bloodTimeStamp, diastolicBloodPressure);
    let journalEntrySentimentData = loopOverTimeStamp(moodTimeStamp, journalEntrySentiment);

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

    return (
        <Container className='Main-Tab-Container'>
            <Row>
                <Col className='tab-content'>
                    <Tabs className="text-center" id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                        <Tab eventKey='graphs' title='Trend Charts'>
                            <Card>
                                <Card.Body>
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
                                    <Row>
                                        <Col>
                                            <h4>Height</h4>
                                        </Col>
                                        <Col>
                                            <h4>Weigth</h4>
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