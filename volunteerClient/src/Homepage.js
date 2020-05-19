import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnEvent:false,
        }
    }
    onClickBtn =()=>{
        this.setState({btnEvent:true})
        console.log(this.state.btnEvent)
    }
    render() {
        return (

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6 mt-5">
                        <button type="button" class="btn btn-warning btn-block mb-2" id="searchFirstName" onClick={this.onClickBtn}>Events</button>
                        <button type="button" class="btn btn-warning btn-block mb-2" id="searchFirstName" >Events</button>
                    </div>
                </div>
                {this.state.btnEvent && <Redirect to='/event/available'/>}
            </div>
        )
    }
}

