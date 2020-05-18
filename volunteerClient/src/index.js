import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Card from './Card';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
          <Card/>
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById("root"));


