import React from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { Redirect } from 'react-router';


export default class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backBtn: false,
            backBtnEvent: false,
        }
    }
    onBackClick = () => {
        this.setState({ backBtn: true })
    }
    onBackClickEvent = () => {
        this.setState({ backBtnEvent: true })
    }
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div>
                            {this.props.isJoinEvent ? <h5>Join Event</h5> : null}
                            {
                                this.props.isMore ? <h5 id="header">Event Info</h5> : null
                            }

                            {this.props.eventPopUp ? <h5 id="header">Creation</h5>:null}

                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {this.props.eventPopUp && !this.props.isMore ?
                        <h1>{this.props.msgEvent}</h1> : <h1>{this.props.msg}</h1>
                    }
                    {this.props.isMore ?
                        <div>

                            <p>Event name : {this.props.name}</p>
                            <p>Creator name : {this.props.first_name}</p>
                            <p>Phone : {this.props.phoneNumber}</p>
                            <p>description : {this.props.description}</p>
                            <p>Location : {this.props.location}</p>
                            <p>Date : from {this.props.start_date} to {this.props.end_date}</p>
                            <p>Participents : {this.props.participents}</p>
                            <p>Limit : {this.props.participents_limit}</p>

                        </div> : null

                    }
                    {this.props.isJoinEvent ? <h1>{this.props.msgJoin}</h1> : null}
                </Modal.Body>
                <Modal.Footer>
                    {console.log(this.props.eventPopU, !this.props.isMore)}
                    {this.props.eventPopUp && !this.props.isMore ?
                        <Button variant="danger" onClick={this.onBackClickEvent}>Back</Button> :
                        this.props.eventPopUp ?
                            <Button variant="warning" onClick={this.onBackClick}>Back</Button> : null
                    }
                    {this.props.isMore && !this.props.eventPopUp || this.props.isJoinEvent ?
                        <div>
                            <Button variant="info" onClick={this.props.onHide}>Cancel</Button>
                        </div> : null
                    }
                </Modal.Footer>
                {this.state.backBtn && <Redirect to="/login/" />}
                {this.state.backBtnEvent && <Redirect to="/event/available/" />}



            </Modal>


        )
    }
}