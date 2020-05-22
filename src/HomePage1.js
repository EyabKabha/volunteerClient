import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Card from './ExplainCard';
import NavbarWizard from './NavbarWizard';
import Footer from './Footer';
import './Styling/Home.css';
import Rater from 'react-rater'
import fetcher from './api/fetcher';

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnEvent: false,
            btnNewEvent: false,
        }
    }
    onClickBtn = () => {
        this.setState({ btnEvent: true })
        console.log(this.state.btnEvent)
    }
    onClickEvent = () => {
        this.setState({ btnNewEvent: true })
    }
   
    render() {

        return (

            <div className="container-fluid" id="container">
                <div className="row">
                    <div className="col">
                      <NavbarWizard/>
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

