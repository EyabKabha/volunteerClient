import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import BeautyStars from 'beauty-stars';

import { setUser, getUser } from './api/auth';
export default class NavbarWizard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personalInfo: {
                firstname: '',
                lastname: '',
            },
            isLogin: false,
            ranks: 2,
        }
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
            <Navbar className="color-nav pr-5" variant="dark" sticky="top" expand="lg">
                <Navbar.Brand href="/"><h2>Volunteer</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" style={{ textAlign: 'center' }}>
                        <Nav.Link href="/">Home</Nav.Link>
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
                </Navbar.Collapse>
            </Navbar>
        )
    }
}