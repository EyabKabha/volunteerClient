import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Card from './Card';
import Homepage from './HomePage1';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
    return(
    
      <BrowserRouter>
        <Switch>
        <Route path="/event/available/">
            <Card/>
          </Route>
          <Route path="/">
            <Homepage/>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}



ReactDOM.render(<App />, document.getElementById("root"));


