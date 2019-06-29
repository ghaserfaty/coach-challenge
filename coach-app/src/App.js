import React from 'react';
import Field from './components/field/field';
import Player from './components/player/player';
import './App.css';

const data = ['pedro','juan','sosvo']



class App extends React.Component {

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  render(){
    return (
      <div className="App">
        <Field players={data}></Field>
      </div>
    );
  }
 
}

export default App;
