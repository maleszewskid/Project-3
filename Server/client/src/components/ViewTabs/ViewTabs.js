import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
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

// const checkStats = event => {console.log(event.target)};

const ViewTabs = (props) => {
    const [key, setKey] = useState('graphs');
    const { firstName,
        middleName,
        lastName,
        dateofBirth,
        medications,
        doseage,
        // medsTimeStamp,
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
        sex,
        disability,
        tobaccoUse,
        mrn
    } = props.data;

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

    //--- Reverse the order of the mood time stamps and journal entry arrays
    //--- Will display the most recent journal entries at the top
    const sortedMoodTimeStamp = moodTimeStamp.reverse();
    const sortedJournalEntry = journalEntry.reverse();

    //--- Create an object for the journal entries:
    const journalList = makeNewObj(sortedMoodTimeStamp, sortedJournalEntry);
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
                                        <Col className="col-md-12">
                                            <Accordion defaultActiveKey="0">
                                                {Object.entries(journalList).map(elem => (
                                                    <Card className="card-accordian-container">
                                                        <Accordion.Toggle className='text-center accordian-header' as={Card.Header} eventKey={elem[0]}>
                                                            {elem[0].slice(0, 10)}
                                                        </Accordion.Toggle>
                                                        <Accordion.Collapse eventKey={elem[0]}>
                                                            <Card.Body className="journal-entry-bd">{`"${elem[1]}"`}</Card.Body>
                                                        </Accordion.Collapse>
                                                    </Card>
                                                )
                                                )}
                                            </Accordion>
                                        </Col>
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
                                                    <tr id={`medications-${elem[0]}`}>
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
                                            <Card>
                                                <Card.Header as='h1' className='text-center my-2'>General Information</Card.Header>
                                                <Card.Body>
                                                    <ListGroup className="list-group-flush">
                                                        <ListGroupItem> {firstName} {middleName} {lastName} </ListGroupItem>
                                                        <ListGroupItem>DOB: {dateofBirth}</ListGroupItem>
                                                        <ListGroupItem>Medical Record Number: {mrn}</ListGroupItem>
                                                        <ListGroupItem>Ethnicity: {ethnicity}</ListGroupItem>
                                                        <ListGroupItem>Sex: {sex}</ListGroupItem>
                                                        <ListGroupItem>Height: {height[0]} feet {height[1]} inches</ListGroupItem>
                                                        <ListGroupItem>Weight: {weight}</ListGroupItem>
                                                        <ListGroupItem>Disability: {disability}</ListGroupItem>
                                                        <ListGroupItem>Tobacco Use: {tobaccoUse}</ListGroupItem>
                                                    </ListGroup>
                                                </Card.Body>
                                            </Card>
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