import React from 'react';
import Popup from './Popup';
import fetcher from './api/fetcher';
import './Styling/Allevents.css';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addModalShow: false,
            isMore: false,
            idMore: '',
            isJoinEvent: false,
            msgJoin: '',

        }
    }
    onClickMore = (id) => {

        this.setState({ addModalShow: true, isMore: true, idMore: id, isJoinEvent:false})
    }

    onClickJoin = async (id) => {
        try {
            const { data } = await fetcher.post('/events/join_event', id);
            console.log(data)
            this.setState({ msgJoin: data, isJoinEvent: true, addModalShow: true,isMore:false })
        } catch (error) {

        }
    }
    render() {
        let addModalClosed = () => this.setState({ addModalShow: false })

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
                                                <p class="card-title">Event name : {this.props.description}.</p>
                                                <p class="card-text">Location : {this.props.location}.</p>
                                                <small class="text-primary font-weight-bold">Date : from {this.props.start_date} to {this.props.end_date}</small>
                                            </div>
                                            <div class="col-md-6">
                                                <button id="joinbtn" type="button" class="btn btn-success btn-block float-right" onClick={() => this.onClickJoin(this.props.id)}>Join Event</button>
                                                <button id="donatebtn" type="button" class="btn btn-primary btn-block float-right">Donate</button>
                                                <button id="viewdetailsbtn" type="button" class="btn btn-info btn-block float-right" onClick={this.onClickMore}>More Details</button>
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
                {this.state.addModalShow && <Popup show={this.state.addModalShow}
                    onHide={addModalClosed}
                    isMore={this.state.isMore}
                    name={this.props.name}
                    first_name={this.props.first_name}
                    phoneNumber={this.props.phoneNumber}
                    description={this.props.description}
                    start_date={this.props.start_date}
                    end_date={this.props.end_date}
                    location={this.props.location}
                    participents={this.props.participents}
                    participents_limit={this.props.participents_limit}
                />}

                {this.state.isJoinEvent && <Popup show={this.state.addModalShow}
                    onHide={addModalClosed}
                    msgJoin={this.state.msgJoin}
                    isJoinEvent={this.state.isJoinEvent} />}
            </div>

        )
    }
}