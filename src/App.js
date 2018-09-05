

import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
// import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      id: '',
      type: '',
      joke: '',
      punchline: ''
    }
  }

 dadJokes()
  {
    var url = `https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke`;
    axios.get(url).then((getData)=>{
     this.setState({
      id: getData.data.id,
      type: getData.data.type,
      joke: getData.data.setup,
      punchline: getData.data.punchline

      })
    })
    
  }
  render() {
    return (
      <div className="App pt-4">
      <center>
        <div className="card text-right" style={{width: '500px'}}>
          <div className="card-body">
          <h1>{this.state.joke}</h1>
          <h3>{this.state.punchline}</h3>
          <Button color="primary" onClick={()=>{this.dadJokes()}}>Reload </Button>       
          </div>
        </div>
        </center>
      </div>
    );
  }
}

export default App;