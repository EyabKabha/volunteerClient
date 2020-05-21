import React from 'react';
import { Redirect } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Popup from './Popup';
import { CityContext } from './CityContext';
import fetcher from './api/fetcher';
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpData: {
                first_name: '',
                last_name: '',
                user_name: '',
                phone: '',
                email: '',
                password: '',
                address: '',
                gender: ''
            },
            addModalShow: false,
            msg: '',
            onClickBack:false,
        }
    }


    onChangeHandler = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const savedData = { ...this.state.signUpData, [target.name]: value };
        this.setState({ signUpData: savedData });
    }
    onClickRegister = async () => {
        try {
            const { data } = await fetcher.post('/signup', this.state.signUpData)
            if (data) {
                this.setState({ addModalShow: true, msg: data })
            }
        } catch (error) {

        }
        console.log(this.state.signUpData)
    }
    onClickBack=()=>{
        this.setState({onClickBack:true})
    }
    render() {
        const { cities } = this.context;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 mt-3">
                        <h4>Sign up</h4>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className="form-group">
                    <div className="form-group row">
                        <label htmlFor="inputFirstName" className="d-flex align-items-right col-sm-3 col-form-label">First name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputFirstName" name="first_name" onChange={this.onChangeHandler} value={this.state.signUpData.first_name} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputLastName" className="d-flex align-items-right col-sm-3 col-form-label">Last name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputLastName" name="last_name" onChange={this.onChangeHandler} value={this.state.signUpData.last_name} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPhone2" className="d-flex align-items-right col-sm-3 col-form-label">Phone</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPhone2" name="phone" onChange={this.onChangeHandler} value={this.state.signUpData.phone} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPhone2" className="d-flex align-items-right col-sm-3 col-form-label">User Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPhone2" name="user_name" onChange={this.onChangeHandler} value={this.state.signUpData.user_name} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPhoneFax" className="d-flex align-items-right col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPhoneFax" name="email" onChange={this.onChangeHandler} value={this.state.signUpData.email} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail" className="d-flex align-items-right col-sm-3 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputEmail" name="password" onChange={this.onChangeHandler} value={this.state.signUpData.password} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4 col-sm-10">
                            <label htmlFor="inputCity" className="d-flex align-items-right mt-3">City</label>
                            <Autocomplete
                                id="combo-box-demo"
                                disableClearable={true}
                                wrapperStyle={{ position: 'relative', display: 'inline-block', color: 'red' }}
                                options={cities}
                                getOptionLabel={(city) => city.name}
                                onSelect={this.onChangeHandler}
                                noOptionsText={'ישוב לא קיים'}
                                renderInput={(params) => <TextField autocomplete="on" {...params} size='small' className="form-control" variant="outlined" name="address" placeholder="City" value={this.state.signUpData.address} onChange={this.onChangeHandler} />} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="d-flex align-items-right col-sm-3 col-form-label">Gender : </label>
                    </div>
                    <div className="form-group row ml-1">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input ml-2" type="radio" id="male" value='male' name="gender" onChange={this.onChangeHandler} />
                            <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input ml-2" type="radio" id="female" value='female' name="gender" onChange={this.onChangeHandler} />
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input ml-2" type="radio" id="other" value='other' name="gender" onChange={this.onChangeHandler} />
                            <label className="form-check-label" htmlFor="other">Other</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input ml-2" type="radio" id="nothing" value='nothing' name="gender" onChange={this.onChangeHandler} />
                            <label className="form-check-label" htmlFor="nothing">Prefer not to say</label>
                        </div>

                    </div>

                    <div className="form-group row ml-1">
                        <div className="col-md-4">
                        <button type="button" className="btn btn-info btn-block" onClick={this.onClickBack}>Back</button>
                        </div>
                        <div className="col-md-4">

                          
                        </div>
                        <div className="col-md-4">
                        <button type="button" className="btn btn-warning btn-block" onClick={this.onClickRegister}>Register</button>
                        </div>
                    </div>
                    {this.state.addModalShow && <Popup
                        show={this.state.addModalShow}
                        onHide={() => false}
                        msg={this.state.msg}
                    />

                    }
                    {this.state.onClickBack && <Redirect to="/login/"/>}
                </div>

            </div>
        )
    }
}

Signup.contextType = CityContext;


export default Signup;