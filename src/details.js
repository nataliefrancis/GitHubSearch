import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

//-------Under construction, not in use---------//

export class Details extends Component {

    componentDidMount() {
        console.log(this.props.location.state.detail);
    }

    render () {
        return (
            //Actual card layout is found in table.js
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