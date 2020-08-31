import React, {Component} from 'react';
import CardList from './components/CardList';
import Form from './components/Form';

class App extends Component  {
  render () {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <Form />
        <CardList />
      </div>
    );
  }
}

export default App;
