import React from 'react';


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div class="container">

                <div class="row mt-4">

                    <div class="col-md-2">

                    </div>
                    <div class="col-md-7">
                        <div class="card mb-3">
                            <div class="row no-gutters">
                                <div class="col-md-4 mt-2">
                                    <img src={`/${this.props.image}`} class="card-img" alt="..." style={{ width: '220px', height: '200px' }} />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p class="card-title">{this.props.name}.</p>
                                                <h5 class="card-title">{this.props.eventDesc}.</h5>
                                                <p class="card-text">Location : {this.props.location}.</p>
                                                <p class="card-text">Phone : {this.props.phoneNumber}.</p>
                                                <small class="text-muted">Event Creation Date : {this.props.creation}</small><br></br>
                                                <small class="text-success font-weight-bold">Event Start Date : {this.props.start_date}</small>
                                                <p class="card-text"><small class="text-success font-weight-bold">Event Start Time : {this.props.start_time}</small></p>
                                            </div>
                                            <div class="col-md-6">
                                                <button type="button" class="btn btn-success btn-block float-right">Join Event</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">

                    </div>
                </div>

            </div>

        )
    }
}