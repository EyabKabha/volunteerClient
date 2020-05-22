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
                <div className="col-5">
                    <div className="row">
                        <div className="col-2">
                            <Image src={this.props.src} id="eventlogo" />
                        </div>
                        <div className="col-8">
                            <h1>{this.props.header}</h1>
                            <p>{this.props.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
