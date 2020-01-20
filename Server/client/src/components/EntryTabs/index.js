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
                        <Tab eventKey="home" title="Home">
                            <div>This is the home page</div>
                            <Row>
                                <Col className="col-12 text-center card-container-entry">
                                    <Card className="text-center card-entry display-block">

                                        <Card.Body>

                                            <Row>
                                                <Col>
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
                                        <Card.Header>Blood Pressure | Pulse</Card.Header>
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
                                        <Card.Header>Mood | Journal</Card.Header>
                                        <Card.Body>

                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Control as="textarea" name="journalEntry" onChange={props.onChange} rows="6" placeholder="Start typing here..." />
                                            </Form.Group>

                                            <ProgressBar animated now={80} />
                                            <br></br>
                                            <Button onClick={props.onMoodClick} className="mood-submit" variant="primary">Save Entry</Button>

                                        </Card.Body>
                                        <Card.Footer className="entry-footer"></Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="meds" title="Medications">
                            <Row>
                                <Col className="col-12 text-center card-container-entry">
                                    <Card className="text-center card-entry display-block">
                                        <Card.Header>Medications | Dosage</Card.Header>
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
                                        <Card.Header>General | Stats</Card.Header>
                                        <Card.Body>
                                            <Form onSubmit={props.handleSubmit}>
                                                <Row>
                                                    <Col className="col-2">
                                                        <Form.Group controlId="exampleForm.ControlSelect2">
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
                                                    <Col className="col-2">
                                                        <Form.Group className="h-25" controlId="exampleForm.ControlSelect2">
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
                                                <Form.Group controlId="weight">
                                                    <Form.Control
                                                        name="weight"
                                                        onChange={props.onChange}
                                                        placeholder="Weight"
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="ethnicity">
                                                    <Form.Control
                                                        name="ethnicity"
                                                        onChange={props.onChange}
                                                        placeholder="Ethnicity"
                                                    />
                                                </Form.Group>

                                                <Row>
                                                    <Col className="col-3 d-flex justify-content-flex-start mx-2">
                                                        <div>Disability: </div>
                                                    </Col>
                                                    <Col className="col-9 d-flex justify-content-flex-start mx-1">
                                                        <Form.Group key={`default-checkbox`} className="mb-3 checkboxDiv">
                                                            <Form.Check
                                                                type={`checkbox`}
                                                                id={`disability`}
                                                                label={`Yes`}
                                                                value={true}
                                                                name="disability"
                                                                onClick={props.onChange}
                                                            />
                                                            <Form.Group key={`default-checkbox`} className="mb-3 checkboxDiv">
                                                                <Form.Check
                                                                    type={`checkbox`}
                                                                    id={`disability`}
                                                                    label={`No`}
                                                                    value={false}
                                                                    name="disability"
                                                                    onClick={props.onChange}
                                                                />
                                                            </Form.Group>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="col-3 d-flex justify-content-flex-start mx-2">
                                                        <div>Tobacco Use: </div>
                                                    </Col>
                                                    <Col className="col-9 d-flex justify-content-flex-start mx-1">
                                                        <Form.Group key={`default-checkbox`} className="mb-3 checkboxDiv">
                                                            <Form.Check
                                                                type={`checkbox`}
                                                                id={`disability`}
                                                                label={`Yes`}
                                                                value={true}
                                                                name="tobacco"
                                                                onClick={props.onChange}
                                                            />
                                                            <Form.Group key={`default-checkbox`} className="mb-3 checkboxDiv">
                                                                <Form.Check
                                                                    type={`checkbox`}
                                                                    id={`disability`}
                                                                    label={`No`}
                                                                    value={false}
                                                                    name="tobacco"
                                                                    onClick={props.onChange}
                                                                />
                                                            </Form.Group>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Form>
                                            <Button className="general-submit" onClick={props.onGenClick} variant="primary">Submit</Button>

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
