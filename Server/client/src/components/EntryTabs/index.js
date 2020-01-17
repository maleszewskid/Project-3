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
                                            <Form onSubmit={props.handleSubmit}>
                                                <Form.Group controlId="heartrate">
                                                    <Form.Control
                                                        name="heartrate"
                                                        value={props.data.heartrate}
                                                        onChange={props.handleChange}
                                                        placeholder="Heart Rate (bpm)"
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="bloodsugar">
                                                    <Form.Control
                                                        name="bloodsugar"
                                                        value={props.data.bloodsugar}
                                                        onChange={props.handleChange}
                                                        placeholder="Blood Sugar (mg/dL)"
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="Systolic">
                                                    <Form.Control
                                                        name="Systolic"
                                                        value={props.data.systolic}
                                                        onChange={props.handleChange}
                                                        placeholder="Systolic (mm Hg)"
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="Diastolic">
                                                    <Form.Control
                                                        name="Diastolic"
                                                        value={props.data.diastolic}
                                                        onChange={props.handleChange}
                                                        placeholder="Diastolic (mm Hg)"
                                                    />
                                                </Form.Group>

                                            </Form>
                                            <Button className="blood-submit" variant="primary">Submit</Button>

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
                                                <Form.Control as="textarea" rows="6" placeholder="Start typing here..." />
                                            </Form.Group>

                                            <ProgressBar animated now={80} />
                                            <br></br>
                                            <Button className="mood-submit" variant="primary">Save Entry</Button>

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
                                                        <Form.Control placeholder="Medication" />
                                                    </Col>
                                                    <Col className="col-4">
                                                        <Form.Control placeholder="Dosage (mg)" />
                                                    </Col>
                                                </Form.Row>
                                            </Form>
                                            <Form className="my-3">
                                                <Form.Row>
                                                    <Col className="col-8">
                                                        <Form.Control placeholder="Medication" />
                                                    </Col>
                                                    <Col className="col-4">
                                                        <Form.Control placeholder="Dosage (mg)" />
                                                    </Col>
                                                </Form.Row>
                                            </Form>
                                            <Form className="my-3">
                                                <Form.Row>
                                                    <Col className="col-8">
                                                        <Form.Control placeholder="Medication" />
                                                    </Col>
                                                    <Col className="col-4">
                                                        <Form.Control placeholder="Dosage (mg)" />
                                                    </Col>
                                                </Form.Row>
                                            </Form>
                                            <Form className="my-3">
                                                <Form.Row>
                                                    <Col className="col-8">
                                                        <Form.Control placeholder="Medication" />
                                                    </Col>
                                                    <Col className="col-4">
                                                        <Form.Control placeholder="Dosage (mg)" />
                                                    </Col>
                                                </Form.Row>
                                            </Form>
                                            <Form className="my-3">
                                                <Form.Row>
                                                    <Col className="col-8">
                                                        <Form.Control placeholder="Medication" />
                                                    </Col>
                                                    <Col className="col-4">
                                                        <Form.Control placeholder="Dosage (mg)" />
                                                    </Col>
                                                </Form.Row>
                                            </Form>
                                            <Button className="blood-submit my-3" variant="primary">Submit</Button>
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
                                                            <Form.Control as="select">
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                                <option>6</option>
                                                                <option>7</option>
                                                                <option>8</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col className="col-2">
                                                        <Form.Group className="h-25" controlId="exampleForm.ControlSelect2">
                                                            <Form.Label>Inches</Form.Label>
                                                            <Form.Control as="select">
                                                                <option>0</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                                <option>6</option>
                                                                <option>7</option>
                                                                <option>8</option>
                                                                <option>9</option>
                                                                <option>10</option>
                                                                <option>11</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Form.Group controlId="weight">
                                                    <Form.Control
                                                        name="weight"
                                                        value={props.data.weight}
                                                        onChange={props.handleChange}
                                                        placeholder="Weight"
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="ethnicity">
                                                    <Form.Control
                                                        name="ethnicity"
                                                        value={props.data.ethnicity}
                                                        onChange={props.handleChange}
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
                                                                name="disability"
                                                                value={false}
                                                                onClick={props.onClick}
                                                            />
                                                            <Form.Group key={`default-checkbox`} className="mb-3 checkboxDiv">
                                                                <Form.Check
                                                                    type={`checkbox`}
                                                                    id={`disability`}
                                                                    label={`No`}
                                                                    name="disability"
                                                                    value={false}
                                                                    onClick={props.onClick}
                                                                />
                                                            </Form.Group>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                                <Form.Group controlId="tobaccouse">
                                                    <Form.Control
                                                        name="tobaccouse"
                                                        value={props.data.tobaccouse}
                                                        onChange={props.handleChange}
                                                        placeholder="Tobacco Use"
                                                    />
                                                </Form.Group>

                                            </Form>
                                            <Button className="general-submit" variant="primary">Submit</Button>

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
