import React, {Component} from 'react';
import Card from './components/Card';

class App extends Component  {
  render () {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <Card />
      </div>
    );
  }
}

export default App;
