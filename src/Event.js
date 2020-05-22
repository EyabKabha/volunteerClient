import React from 'react';
import { CityContext } from './CityContext';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import fetcher from './api/fetcher';
import Popup from './Popup';
import './Styling/Allevents.css';
import { Redirect } from 'react-router';
import NavbarWizard from './NavbarWizard';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataEvent: {
                location: '',
                name: '',
                description: '',
                startTime: '',
                endTime: '',
                startDate: '',
                endDate: '',
                participentsLimit: '',
                type: '',
            },
            addModalShow: false,
            msgEvent: '',
            eventPopUp: false,
            onClickBackEvent: false,
        }
    }
    backEvent = () => {
        this.setState({ onClickBackEvent: true })
    }
    onChangeHandler = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const savedData = { ...this.state.dataEvent, [target.name]: value };
        this.setState({ dataEvent: savedData });
    }
    onClickAddEvent = async () => {
        try {
            const { data } = await fetcher.post('/events', this.state.dataEvent);
            if (data) {
                this.setState({ addModalShow: true, msgEvent: data, eventPopUp: true })
                console.log(this.state.addModalShow, this.state.msgEvent)
            }

        } catch (error) {

        }
    }
    render() {
        const { cities } = this.context;
        return (
            <div div="container">
                <NavbarWizard></NavbarWizard>
                <div className="row ml-3">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-6 mt-4">
                        <h1 className="text-center">Create new event</h1>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
                <div className="row ml-3 mt-3 mr-3">
                    <div className="col-md-5 col-sm-12">
                        <label htmlFor="inputFromDate" className="d-flex align-items-right">From Date</label>
                        <input type="date" className="form-control mb-2 col-sm-12" date id="inputFromDate" name="startDate" max="9999-12-31" onChange={this.onChangeHandler} value={this.state.dataEvent.startDate} />
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="inputFromDateFinsih" className="d-flex align-items-right">Until Date</label>
                        <input type="date" className="form-control mb-2" date id="inputFromDateFinsih" name="endDate" max="9999-12-31" onChange={this.onChangeHandler} value={this.state.dataEvent.endDate} />
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="inputExitTime" className="d-flex align-items-right">From time</label>
                        <input type="time" className="form-control mb-2" id="inputExitTime" name="startTime" onChange={this.onChangeHandler} value={this.state.dataEvent.startTime} />
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="inputReturnTime2" className="d-flex align-items-right">Until Time</label>
                        <input type="time" className="form-control mb-2" id="inputReturnTime2" name="endTime" onChange={this.onChangeHandler} value={this.state.dataEvent.endTime} />
                    </div>
                    <div className="col-md-5 mb-2">
                        <label htmlFor="inputReturnVul" className="d-flex align-items-right">Volunteering type</label>
                        <select className="form-control" id="inputReturnVul" name="type" onChange={this.onChangeHandler} value={this.state.dataEvent.type} >
                           
                            <option value="Undraising event">Undraising event</option>
                            <option value="Goods donation">Goods donation</option>
                            <option value="Hospital visits">Hospital visits</option>
                            <option value="Orphanage activities">Orphanage activities</option>
                            <option value="Cleaning">cleaning</option>
                            <option value="Sanitizing">Sanitizing</option>
                            <option value="Help eldery">Help eldery</option>
                            <option value="Help friend">Help friend</option>
                            <option value="Environment greening">Environment greening</option>
                            <option value="Other">Other..</option>
                        </select>
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="nameN" className="d-flex align-items-right">Name</label>
                        <input type="text" className="form-control mb-2" id="nameN" name="name" onChange={this.onChangeHandler} value={this.state.dataEvent.name} />
                    </div>
                    <div className="col-md-10">
                        <label htmlFor="desc" className="d-flex align-items-right">Description</label>
                        <textarea
                            id="desc"
                            name="description"
                            className="form-control mb-2"
                            rows="3"
                            value={this.state.dataEvent.description}
                            style={{ resize: "none" }}
                            onChange={this.onChangeHandler}
                            placeholder="Write something here...">
                        </textarea>

                    </div>
                    <div className="col-md-5">
                        <label htmlFor="inputReturnTimeLocation" className="d-flex align-items-right">Location</label>
                        <Autocomplete
                            id="inputReturnTimeLocation"
                            disableClearable={true}
                            wrapperStyle={{ position: 'relative', display: 'inline-block', color: 'red' }}
                            options={cities}
                            getOptionLabel={(city) => city.name}
                            onSelect={this.onChangeHandler}
                            renderInput={(params) => <TextField autocomplete="on" {...params} size='small' className="form-control" variant="outlined" name="location" placeholder="City" value={this.state.dataEvent.location} onChange={this.onChangeHandler} />} />
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="inputReturnTimeLimit" className="d-flex align-items-right">Limit</label>
                        <input type="text" className="form-control mb-2" id="inputReturnTimeLimit" name="participentsLimit" onChange={this.onChangeHandler} value={this.state.dataEvent.participentsLimit} />
                    </div>
                    <div className="col-md-10 mt-3">
                        <button id="newbtn" type="button" class="btn btn-warning" onClick={this.onClickAddEvent}>Add Event</button>
                        <button type="button" id="newbtn" class="btn btn-warning ml-5" onClick={this.backEvent}>Back</button>

                    </div>

                    {this.state.addModalShow && <Popup show={this.state.addModalShow}
                        onHide={() => false}
                        msgEvent={this.state.msgEvent}
                        eventPopUp={this.state.eventPopUp} />}
                </div>
                {this.state.onClickBackEvent && <Redirect to="/" />}
            </div>
        )
    }
}



Event.contextType = CityContext;


export default Event;