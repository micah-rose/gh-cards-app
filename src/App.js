import React, {Component} from 'react';
import CardList from './components/CardList';

class App extends Component  {
  render () {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <CardList />
      </div>
    );
  }
}

export default App;
