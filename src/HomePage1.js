import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Card from './ExplainCard';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import Footer from './Footer';
import './Styling/Home.css';

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnEvent: false,
        }
    }
    onClickBtn = () => {
        this.setState({ btnEvent: true })
        console.log(this.state.btnEvent)
    }
    render() {
        return (

            <div className="container-fluid" id="container">
                <div className="row">
                    <div id="mainNav" className="col">
                        <Navbar bg="dark" variant="dark" sticky="top">
                            <Navbar.Brand href="#home">Voulnteer</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Dashboard</Nav.Link>
                                <Nav.Link href="#pricing">My events</Nav.Link>
                            </Nav>
                            <Form inline>
                                {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                                <Button variant="outline-info">Log In</Button>&nbsp;&nbsp;
                                <Navbar.Text> <small>or</small></Navbar.Text>
                                <Nav.Link href="#deets">SignUp</Nav.Link>
                            </Form>
                        </Navbar>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6">
                        <button type="button" className="btn btn-primary btn-block mb-2" id="Alleventsbtn" onClick={this.onClickBtn}>All Events</button>
                    </div>
                    <div className="col-6">
                        <button type="button" className="btn btn-success btn-block mb-2" id="Createeventbtn">Create Event</button>
                    </div>
                </div>
                <Card header="All Events" desc="See all volunteering events happenning near you." dir="rtl" src='/event.jpg'/>
                <Card header="Create Event" desc="Create a volunteering & invite people to join." dir="ltr" src='/createevent.png'/>
                <Footer />
                {this.state.btnEvent && <Redirect to='/event/available' />}
            </div>

        )
    }
}

