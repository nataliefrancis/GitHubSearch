import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

import Search from './search';

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" bg="light" variant="light">
                    <Navbar.Brand as={Link} to="/" className="myFont">GitHub Search</Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link as={Link} to="/">Search</Nav.Link>
                        </Nav>
                    </Navbar.Collapse> */}
                </Navbar>
                <Switch>
                    <Route exact path='/' component={Search} />
                </Switch>
            </div>
        );
    }
}

export default Header