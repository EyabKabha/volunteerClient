import React from 'react';
import { CityContext } from './CityContext';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import fetcher from './api/fetcher';

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
                type: ''

            }
        }
    }
    onChangeHandler = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const savedData = { ...this.state.dataEvent, [target.name]: value };
        this.setState({ dataEvent: savedData });
    }
    onClickAddEvent =async ()=>{
        try {
            const {data} = fetcher.post('/events',this.state.dataEvent);
            console.log(data)
        } catch (error) {
            
        }
    }
    render() {
        const { cities } = this.context;
        return (
            <div div="container">
                <div className="row ml-3">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-6">
                        <h1 className="text-center">Create new event</h1>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
                <div className="row ml-3 mt-3 mr-3">
                    <div className="col-md-5 col-sm-12">
                        <label htmlFor="inputFromDate" className="d-flex align-items-right">From Date</label>
                        <input type="date" className="form-control mb-2 col-sm-12" date id="inputFromDate" name="startDate" max="9999-12-31" onChange={this.onChangeHandler}value={this.state.dataEvent.startDate} />
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="inputFromDate" className="d-flex align-items-right">Until Date</label>
                        <input type="date" className="form-control mb-2" date id="inputFromDate" name="endDate" max="9999-12-31" onChange={this.onChangeHandler} value={this.state.dataEvent.endDate}/>
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="inputExitTime" className="d-flex align-items-right">From time</label>
                        <input type="time" className="form-control mb-2" id="inputExitTime" name="startTime" onChange={this.onChangeHandler} value={this.state.dataEvent.startTime}/>
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="inputReturnTime" className="d-flex align-items-right">Until Time</label>
                        <input type="time" className="form-control mb-2" id="inputReturnTime" name="endTime" onChange={this.onChangeHandler} value={this.state.dataEvent.endTime}/>
                    </div>
                    <div className="col-md-5 mb-2">
                        <label htmlFor="inputReturnTime" className="d-flex align-items-right">Type</label>
                        <select className="form-control" id="inputCar" name="type" onChange={this.onChangeHandler}value={this.state.dataEvent.type} >
                            <option selected value="">Types of Volunteers</option>
                        </select>
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="inputReturnTime" className="d-flex align-items-right">Name</label>
                        <input type="text" className="form-control mb-2" id="inputReturnTime" name="name" onChange={this.onChangeHandler} value={this.state.dataEvent.name}/>
                    </div>
                    <div className="col-md-10">
                        <label htmlFor="inputReturnTime" className="d-flex align-items-right">Note</label>
                        <textarea
                            id="description"
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
                        <label htmlFor="inputReturnTime" className="d-flex align-items-right">Location</label>
                        <Autocomplete
                            id="combo-box-demo"
                            disableClearable={true}
                            wrapperStyle={{ position: 'relative', display: 'inline-block', color: 'red' }}
                            options={cities}
                            getOptionLabel={(city) => city.name}
                            onSelect={this.onChangeHandler}
                            renderInput={(params) => <TextField autocomplete="on" {...params} size='small' className="form-control" variant="outlined" name="location" placeholder="City" value={this.state.dataEvent.location} onChange={this.onChangeHandler} />} />
                    </div>
              
                    <div className="col-md-5">
                        <label htmlFor="inputReturnTime" className="d-flex align-items-right">Limit</label>
                        <input type="text" className="form-control mb-2" id="inputReturnTime" name="participentsLimit" onChange={this.onChangeHandler} value={this.state.dataEvent.participentsLimit} />
                    </div>
                    <div className="col-md-10 mt-3">
                        <button type="button" class="btn btn-warning" onClick={this.onClickAddEvent}>Add Event</button>
                    </div>

                </div>
            </div>



        )
    }
}



Event.contextType = CityContext;


export default Event;