import React from 'react';
import { Redirect } from 'react-router';
import fetcher from './api/fetcher';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpClick: false,
            dataLogin: {
                user_name: '',
                password: ''
            },
            eventsAvalible:false,
            addModalShow:false,
        }
    }
    onClickSignUp = () => {
        this.setState({ signUpClick: true })
    }

    onChangeHandler = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const savedData = { ...this.state.dataLogin, [target.name]: value };
        this.setState({ dataLogin: savedData });
    }

    onClickLogin = async () => {
        try {
            const {data} = await fetcher.post('/login',this.state.dataLogin)
            if(data){
                this.setState({eventsAvalible:true})
            }
        } catch (error) {

        }
    }


    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6 mt-5">

                        <div className="form-group mt-5">
                            <input type="text" className="form-control" placeholder="User name" name="user_name" onChange={this.onChangeHandler} value={this.state.dataLogin.user_name} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.onChangeHandler} value={this.state.dataLogin.password} />

                        </div>

                        <button type="button" className="btn btn-success btn-block" onClick={this.onClickLogin}>Log in</button>
                        <button type="button" className="btn btn-outline-primary btn-block" onClick={this.onClickSignUp}>Sign up</button>

                        {this.state.signUpClick && <Redirect to="/signup" />}
                        {this.state.eventsAvalible && <Redirect to="/event/available/"/>}

                    </div>
                </div>
            </div>

        )
    }
}