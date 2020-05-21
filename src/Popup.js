import React from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { Redirect } from 'react-router';


export default class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backBtn: false,
        }
    }
    onBackClick = () => {
        this.setState({ backBtn: true })
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
                            <h5 id="header">Creation</h5>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>{this.props.msg}</h1>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={this.onBackClick}>חזרה</Button>
                </Modal.Footer>
                {this.state.backBtn && <Redirect to="/login/" />}
            </Modal>

        )
    }
}