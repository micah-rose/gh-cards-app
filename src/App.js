import React, {Component} from 'react';
import CardList from './components/CardList';
import Form from './components/Form';

const testData = [
  {name: "Dan Abramov",
  avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
  company: "Facebook"},
  {name: "Sophie Alpert",
  avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
  company: "Facebook"},
  {name: "Sebastian Markbage",
  avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
  company: "Facebook"}
];

class App extends Component  {
  render () {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <Form />
        <CardList profiles={testData}/>
      </div>
    );
  }
}

export default App;
