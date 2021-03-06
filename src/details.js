import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export class Details extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    render () {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
            </Card>
        )
    }

}

export default Details