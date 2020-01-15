import React from 'react';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './EntryBody.css';

<<<<<<< HEAD

=======
>>>>>>> a8d7b51dbe4d5b5687760fc26adc373b992266e3
const EntryBody = props => {
    return (
        <Container className="landingContainer">
            <Row>
                <Col className="col-12 text-center card-container">
                    <Card className="text-center">
                        <Card.Header>Blood Pressure | Pulse</Card.Header>
                        <Card.Body>
                            <Card.Title>Enter Blood Pressure Below:</Card.Title>
                            <Card.Text>
                                Use the text boxes to enter your systolic/diastolic pressures and pulse.
                        </Card.Text>
                        <Form onSubmit={props.handleSubmit}>
                          
                                 <Form.Group controlId="Systolic">
                                    <Form.Control
                                        type="Systolic"
                                        value={this.state.systolic}
                                        onChange={this.handleChange}
                                        placeholder="Systolic"
                                     />
                                </Form.Group>
                                <Form.Group controlId="Diastolic">
                                    <Form.Control
                                        type="Diastolic"
                                        value={this.state.diastolic}
                                        onChange={this.handleChange}
                                        placeholder="Diastolic"
                                     />
                                </Form.Group>
                                <Form.Group controlId="Pulse">
                                    <Form.Control
                                        type="Pulse"
                                        value={this.state.pulse}
                                        onChange={this.handleChange}
                                        placeholder="Pulse"
                                     />
                                </Form.Group>
                    
                        </Form>
                            <Button className="BPsubmit" variant="primary">Submit</Button>
                      
                        </Card.Body>
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col className="col-12 text-center card-container">
                <Card className="text-center">
                <Card.Header>Blood Glucose</Card.Header>
                        <Card.Body>
                            <Card.Title>Enter Blood Glucose Below:</Card.Title>
                            <Card.Text>
                                Use the text boxes to enter your blood glucose level.
                        </Card.Text>
                        <Form onSubmit={this.handleSubmit}>
                         
                                 <Form.Group controlId="Glucose">
                                    <Form.Control
                                        type="Glucose"
                                        value={this.state.glucose}
                                        onChange={this.handleChange}
                                        placeholder="Blood Glucose"
                                     />
                                </Form.Group>
                       
                        </Form>
                            <Button className="glucoseSubmit" variant="primary">Submit</Button>
                
                        </Card.Body>
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col className="col-12 text-center card-container">
                <Card className="text-center">
                <Card.Header>Weight</Card.Header>
                        <Card.Body>
                            <Card.Title>Enter Current Weight Below:</Card.Title>
                            <Card.Text>
                                Use the text boxes to enter your weight in lbs.
                        </Card.Text>
                        <Form onSubmit={this.handleSubmit}>
                            
                                 <Form.Group controlId="Weight">
                                    <Form.Control
                                        type="Weight"
                                        value={this.state.weight}
                                        onChange={this.handleChange}
                                        placeholder="Weight (lbs)"
                                     />
                                </Form.Group>
                   
                        </Form>
                            <Button className="weightSubmit" variant="primary">Submit</Button>
                   
                        </Card.Body>
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default EntryBody;
