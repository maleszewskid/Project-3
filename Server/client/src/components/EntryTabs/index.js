import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './EntryTabs.css';


const EntryTabs = props => {
    const [key, setKey] = useState('home');

    return (
        <Container className="Main-Tab-Container">
            <Row>
                <Col className="tab-content">
                    <Tabs className="text-center" id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                        <Tab className="tab-1-home" eventKey="home" title="Home">
                            <Row>
                                <Col className="col-12 text-center card-container-entry">
                                    <Card className="text-center card-entry display-block">
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <p>
                                                        Welcome to the PatientFirst data entry page.
                                                    </p>
                                                    <br></br>
                                                    <p>
                                                        Please click on each of the tabs on this page to access the different data entry forms.
                                                    </p>
                                                    <br></br>
                                                    <p>
                                                        Click submit after you have entered your data to store it on our server.
                                                    </p>
                                                    <br></br>
                                                    <p>
                                                        Thank you
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                        <Card.Footer className="entry-footer"></Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="blood" title="Blood">

                            <Row>
                                <Col className="col-12 text-center card-container-entry">
                                    <Card className="text-center card-entry display-block">
                                        <Card.Header className="entry-header">Heart Rate | Blood Sugar | Blood Pressure | Pulse</Card.Header>
                                        <Card.Body>
                                            <Form>
                                                <Form.Group controlId="heartrate">
                                                    <Form.Control
                                                        name="heartRate"
                                                        onChange={props.onChange}
                                                        placeholder="Heart Rate (bpm)"
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="bloodsugar">
                                                    <Form.Control
                                                        name="bloodSugar"
                                                        onChange={props.onChange}
                                                        placeholder="Blood Sugar (mg/dL)"
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="Systolic">
                                                    <Form.Control
                                                        name="systolicBloodPressure"
                                                        onChange={props.onChange}
                                                        placeholder="Systolic (mm Hg)"
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="Diastolic">
                                                    <Form.Control
                                                        name="diastolicBloodPressure"
                                                        onChange={props.onChange}
                                                        placeholder="Diastolic (mm Hg)"
                                                    />
                                                </Form.Group>
                                            </Form>
                                            <Button onClick={props.onBloodClick} className="blood-submit" variant="primary">Submit</Button>
                                            {(props.bloodSuccess) ? <div className='dataEntrySuccess col-5 p-2 my-2 mx-auto text-center rounded'>Data recorded!</div> : null}
                                            {(props.bloodError) ? <div className='dataEntryError col-5 p-2 my-2 mx-auto text-center rounded'>There was an issue submitting your data. Please try again later.</div> : null}
                                        </Card.Body>
                                        <Card.Footer className="entry-footer"></Card.Footer>
                                    </Card>
                                </Col>
                            </Row>


                        </Tab>
                        <Tab eventKey="mood" title="Mood">
                            <Row>
                                <Col className="col-12 text-center card-container-entry">
                                    <Card className="text-center card-entry display-block">
                                        <Card.Header className="entry-header">Mood Journal</Card.Header>
                                        <Card.Body>

                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Control as="textarea" name="journalEntry" onChange={props.onMoodChange} rows="6" placeholder="Start typing here..." />
                                            </Form.Group>

                                            {(props.sentimentScore) ? <ProgressBar animated now={props.sentimentScore} /> : <ProgressBar animated now={0} />}
                                            <br></br>
                                            <Button onClick={props.onMoodClick} className="mood-submit" variant="primary">Save Entry</Button>
                                            {(props.moodSuccess) ? <div className='dataEntrySuccess col-5 p-2 my-2 mx-auto text-center rounded'>Data recorded!</div> : null}
                                            {(props.moodError) ? <div className='dataEntryError col-5 p-2 my-2 mx-auto text-center rounded'>There was an issue submitting your data. Please try again later.</div> : null}
                                        </Card.Body>
                                        <Card.Footer className="entry-footer"></Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="medications" title="Medications">
                            <Row>
                                <Col className="col-12 text-center card-container-entry">
                                    <Card className="text-center card-entry display-block">
                                        <Card.Header className="entry-header">Medications | Dosage</Card.Header>
                                        <Card.Body>
                                            <Form className="my-3">
                                                <Form.Row>
                                                    <Col className="col-8">
                                                        <Form.Control name="medication1" onChange={props.onChange} placeholder="Medication" />
                                                    </Col>
                                                    <Col className="col-4">
                                                        <Form.Control name="doseage1" onChange={props.onChange} placeholder="Dosage (mg)" />
                                                    </Col>
                                                </Form.Row>
                                            </Form>
                                            <Form className="my-3">
                                                <Form.Row>
                                                    <Col className="col-8">
                                                        <Form.Control name="medication2" onChange={props.onChange} placeholder="Medication" />
                                                    </Col>
                                                    <Col className="col-4">
                                                        <Form.Control name="doseage2" onChange={props.onChange} placeholder="Dosage (mg)" />
                                                    </Col>
                                                </Form.Row>
                                            </Form>
                                            <Form className="my-3">
                                                <Form.Row>
                                                    <Col className="col-8">
                                                        <Form.Control name="medication3" onChange={props.onChange} placeholder="Medication" />
                                                    </Col>
                                                    <Col className="col-4">
                                                        <Form.Control name="doseage3" onChange={props.onChange} placeholder="Dosage (mg)" />
                                                    </Col>
                                                </Form.Row>
                                            </Form>
                                            <Form className="my-3">
                                                <Form.Row>
                                                    <Col className="col-8">
                                                        <Form.Control name="medication4" onChange={props.onChange} placeholder="Medication" />
                                                    </Col>
                                                    <Col className="col-4">
                                                        <Form.Control name="doseage4" onChange={props.onChange} placeholder="Dosage (mg)" />
                                                    </Col>
                                                </Form.Row>
                                            </Form>
                                            <Form className="my-3">
                                                <Form.Row>
                                                    <Col className="col-8">
                                                        <Form.Control name="medication5" onChange={props.onChange} placeholder="Medication" />
                                                    </Col>
                                                    <Col className="col-4">
                                                        <Form.Control name="doseage5" onChange={props.onChange} placeholder="Dosage (mg)" />
                                                    </Col>
                                                </Form.Row>
                                            </Form>
                                            <Button className="meds-submit my-3" name="medsButton" onClick={props.onMedsClick} variant="primary">Submit</Button>
                                            {(props.medSuccess) ? <div className='dataEntrySuccess col-5 p-2 my-2 mx-auto text-center rounded'>Data recorded!</div> : null}
                                            {(props.medError) ? <div className='dataEntryError col-5 p-2 my-2 mx-auto text-center rounded'>There was an issue submitting your data. Please try again later.</div> : null}
                                            {(props.addDoseage) ? <div className='dataEntryError col-5 p-2 my-2 mx-auto text-center rounded'>Please add the doseage for your medication.</div> : null}
                                        </Card.Body>
                                        <Card.Footer className="entry-footer"></Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="general" title="General">
                            <Row>
                                <Col className="col-12 text-center card-container-entry">
                                    <Card className="text-center card-entry display-block">
                                        <Card.Header className="entry-header">General Stats</Card.Header>
                                        <Card.Body>
                                            <Form onSubmit={props.handleSubmit}>
                                                <Row className='my-2 center'>
                                                    <Col className="col-4">
                                                        <Form.Group className='center' controlId="exampleForm.ControlSelect2">
                                                            <Form.Label>Feet</Form.Label>
                                                            <Form.Control onChange={props.onChange} as="select" name='feet'>
                                                                <option value='2'>2</option>
                                                                <option value='3'>3</option>
                                                                <option value='4'>4</option>
                                                                <option value='5'>5</option>
                                                                <option value='6'>6</option>
                                                                <option value='7'>7</option>
                                                                <option value='8'>8</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col className="col-4">
                                                        <Form.Group className="center" controlId="exampleForm.ControlSelect2">
                                                            <Form.Label>Inches</Form.Label>
                                                            <Form.Control onChange={props.onChange} as="select" name='inches'>
                                                                <option value='0'>0</option>
                                                                <option value='1'>1</option>
                                                                <option value='2'>2</option>
                                                                <option value='3'>3</option>
                                                                <option value='4'>4</option>
                                                                <option value='5'>5</option>
                                                                <option value='6'>6</option>
                                                                <option value='7'>7</option>
                                                                <option value='8'>8</option>
                                                                <option value='9'>9</option>
                                                                <option value='10'>10</option>
                                                                <option value='11'>11</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className='my-2'>
                                                    <Col className='center'>
                                                        <Form.Group className='center w-25' controlId="weight">
                                                            <Form.Label>Weight</Form.Label>
                                                            <Form.Control
                                                                name="weight"
                                                                onChange={props.onChange}
                                                                placeholder="Weight in lbs."
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className='my-2'>
                                                    <Col>
                                                        <Form.Group className='w-25 center' controlId="ethnicity">
                                                            <Form.Label>Ethnicity</Form.Label>
                                                            <Form.Control onChange={props.onChange} as="select" name='ethnicity'>
                                                                <option value='American Indian or Alaska Native'>American Indian or Alaska Native</option>
                                                                <option value='Asian'>Asian</option>
                                                                <option value='Black or African American'>Black or African American</option>
                                                                <option value='Hispanic or Latino'>Hispanic or Latino</option>
                                                                <option value='Native Hawaiian or Other Pacific Islander'>Native Hawaiian or Other Pacific Islander</option>
                                                                <option value='White'>White</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className='my-2'>
                                                    <Col className="mx-1">
                                                        <Form.Group className='w-25 center' controlId="disability">
                                                            <Form.Label>Disability</Form.Label>
                                                            <Form.Control onChange={props.onChange} as="select" name='disability'>
                                                                <option value='Yes'>Yes</option>
                                                                <option value='No'>No</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className='my-2'>
                                                    <Col>
                                                        <Form.Group className='w-25 center' controlId="tobaccoUse">
                                                            <Form.Label>Tobacco Use</Form.Label>
                                                            <Form.Control onChange={props.onChange} as="select" name='tobaccoUse'>
                                                                <option value='Yes'>Yes</option>
                                                                <option value='No'>No</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Form>
                                            <Button className="general-submit my-4" onClick={props.onGenClick} variant="primary">Submit</Button>
                                            {(props.genSuccess) ? <div className='dataEntrySuccess col-5 p-2 my-2 mx-auto text-center rounded'>Data recorded!</div> : null}
                                            {(props.genError) ? <div className='dataEntryError col-5 p-2 my-2 mx-auto text-center rounded'>There was an issue submitting your data. Please try again later.</div> : null}
                                        </Card.Body>
                                        <Card.Footer className="entry-footer"></Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );

}

export default EntryTabs;
