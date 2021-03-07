import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { InputGroup, Form, FormControl, Button, Col, Row, Container } from 'react-bootstrap';

export class Search extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
            //passes query to table.js
        var query = event.target[0].value;
        this.props.history.push({
            pathname: '/results',
            state: { detail: event.target[0].value }
        })
      }

    render() {
        return( 
            <Container fluid className="top-pad"> 
                <Row className="justify-content-md-center"><Col className="text-center myFont title" lg={5}><span>GitHub Search</span></Col></Row>

                <Row className="justify-content-md-center">
                    <Col lg={5} md={8} sm={3}>
                        <Form onSubmit={this.handleSubmit}>
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Keyword e.g. React"
                                aria-label="Keyword e.g. React"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button type="submit" variant="info">Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Search