import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {CityContext} from './CityContext'

import Maincard from './Maincard';
import Homepage from './HomePage1';
import Event from './Event';
import Login from './Login';
import Signup from './Signup';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      cities: [],
      newCompany: (company) => {
        this.setState({
          companies: [...this.state.companies, company]
        });
      },
      citiesArray: (city) => {
        this.setState({ cities: [...this.state.cities, city] });
      }
    }
  }
  componentDidMount = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/cities');
      this.setState({ cities: data });
    } catch (error) {

    }
  }
  render() {
    return (
      <CityContext.Provider value={this.state}>

      <BrowserRouter>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create/event/">
            <Event />
          </Route>
          <Route path="/event/available/">
            <Maincard />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </BrowserRouter>
     </CityContext.Provider>
    )
  }
}



ReactDOM.render(<App />, document.getElementById("root"));


