import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Card from './ExplainCard';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import Footer from './Footer';
import './Styling/Home.css';
import Rater from 'react-rater'
import fetcher from './api/fetcher';
import BeautyStars from 'beauty-stars';

import { setUser, getUser } from './api/auth';
export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnEvent: false,
            btnNewEvent: false,
            personalInfo: {
                firstname: '',
                lastname: '',
            },
            isLogin: false,
            ranks:2,
        }
    }
    onClickBtn = () => {
        this.setState({ btnEvent: true })
        console.log(this.state.btnEvent)
    }
    onClickEvent = () => {
        this.setState({ btnNewEvent: true })
    }
    componentDidMount = async () => {
        // const {data} = await fetcher.get('/events/includes_me');
        // this.setState({ranks:data.length})
        var person = JSON.parse(getUser())
        if (person === null) {

        } else {
            await this.setState({ personalInfo: person, isLogin: true })
            console.log(this.state.personalInfo)

        }
    }
    render() {

        return (

            <div className="container-fluid" id="container">
                <div className="row">
                    <div className="col">
                        <Navbar className="color-nav pr-5" variant="dark" sticky="top" expand="lg">
                            <Navbar.Brand href="#home"><h2>Volunteer</h2></Navbar.Brand>
                            <Nav className="mr-auto" style={{ textAlign: 'center' }}>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Dashboard</Nav.Link>
                                <Nav.Link href="#pricing">My events</Nav.Link>
                            </Nav>
                            {this.state.isLogin ? <h1 style={{ color: 'white' }}> {` Welcome, ${this.state.personalInfo.firstname} ${this.state.personalInfo.lastname}`}
                                <div className="mt-3">
                                    <BeautyStars
                                        value={this.state.ranks}
                                        maxStars={5}
                                    />
                                    {/* <h6 style={{ marginTop: '15px' }}>Good job!</h6> */}
                                </div>
                            </h1>
                                : <Form inline>
                                    <Button href="/login" variant="outline-info">Log In</Button>&nbsp;&nbsp;
                                    <Navbar.Text> <small>or</small></Navbar.Text>
                                    <Nav.Link href="/signup/">SignUp</Nav.Link>
                                </Form>
                            }
                        </Navbar>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6">
                        <button type="button" className="btn btn-primary btn-block mb-2" id="Alleventsbtn" onClick={this.onClickBtn}>All Events</button>
                    </div>
                    <div className="col-6">
                        <button type="button" className="btn btn-success btn-block mb-2" id="Createeventbtn" onClick={this.onClickEvent}>Create Event</button>
                    </div>
                </div>

                <Card header="All Events" desc="See all volunteering events happenning near you." dir="rtl" src='/event.jpg' />
                <Card header="Create Event" desc="Create a volunteering event & invite people to join." dir="ltr" src='/createevent.png' />
                <Footer />
                {this.state.btnEvent && <Redirect to='/event/available' />}
                {this.state.btnNewEvent && <Redirect to='/create/event/' />}
            </div >

        )
    }
}

