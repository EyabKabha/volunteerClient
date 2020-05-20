import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
// import logo from '../public/event.jpg';

export default class ExplainCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="row mt-5 justify-content-center">
                <div className="col-8">
                    <div className="row">
                        <div className="col-2">
                            {/* <Image src={logo} roundedCircle /> */}
                        </div>
                        <div className="col-6">
                            <h1>Events</h1>
                            <p>Events are created by anyone who needs voulnteers for the job.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
