import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './LandingBody.css';

const LandingBody = props => {
    return (
        <Container className="landingContainer">
            <Row className="justify-content-md-center">
                <Col>
                    <Row>
                        <Col className="col-12 text-center patientCard">
                            <div className="landingMsg">PatientFirst (Pf) - a one of a kind health tracking service
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-12 text-center">
                            <div className="landinSubgMsg">
                                To manage your health information please select an option below, we reccomend beginning with the Pf Portal</div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col className="col-12 text-center card-container">
                    <Card className="text-center">
                        <Card.Header>Patient Portal</Card.Header>
                        <Card.Body>
                            <Card.Title>Powerful yet simplistic</Card.Title>
                            <Card.Text>
                                Fill out a form to be included in your next Doctor's visit
                        </Card.Text>
                        <Link to={{ pathname: "/DataEntry",
                                    state: { username: props.user.username}
                            }} >
                            <Button className="pfPortalBtn" variant="primary">Begin</Button>
                        </Link>
                        </Card.Body>
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col className="col-12 text-center card-container">
                    <Card className="text-center">
                        <Card.Header>Patient View</Card.Header>
                        <Card.Body>
                            <Card.Title>See your health history</Card.Title>
                            <Card.Text>
                                Charts and graphs supporting your overall health
                        </Card.Text>
                        <Link to={{ pathname: "/viewData",
                                    state: { username: props.user.username}
                            }} >
                            <Button className="pfViewBtn" variant="primary">View Data</Button>
                        </Link>
                        </Card.Body>
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col className="col-12 text-center card-container">
                    <Card className="text-center">
                        <Card.Header>Submit</Card.Header>
                        <Card.Body>
                            <Card.Title>Sends your information to your Health Provider</Card.Title>
                            <Card.Text>
                                All your data is secure and private
                        </Card.Text>
                        <Link to={{ pathname: "/submit",
                                    state: { username: props.user.username}
                            }} >
                            <Button className="pfSendBtn" variant="success">Send to Provider</Button>
                        </Link>
                        </Card.Body>
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LandingBody;
