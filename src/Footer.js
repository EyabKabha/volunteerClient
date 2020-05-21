import React, { Component } from 'react'
import { Container, Navbar, Col } from 'react-bootstrap';
import './Styling/Home.css';

export default class Footer extends Component {
    render() {
        return (
            <Container className="p-0 m-0 mt-5" fluid>
                <Navbar expand="lg" variant="dark" bg="dark">
                    <Col>
                        <Navbar.Brand href="#">Settings</Navbar.Brand>
                    </Col>
                    <Col>
                        <Navbar.Brand href="#">Contact us</Navbar.Brand>
                    </Col>
                    <Col>
                        <Navbar.Brand href="#">Help</Navbar.Brand>
                    </Col>
                </Navbar>
            </Container>
        )
    }
}
