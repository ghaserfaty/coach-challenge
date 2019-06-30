import React from 'react';
import Field from './components/field/field';
import {PlayerService} from './services/players-service';
import {PlayerList} from './components/playersList/playerList';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {players_data: []};
  }

  componentDidMount(){
    PlayerService.getPlayersData().then((data)=>{

      this.setState({players_data:data})
    })
  }
  render(){
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-3"> 
          <h1 className='App-title'>Coach's board</h1>
            <PlayerList players={this.state.players_data}></PlayerList>
          </div>
          <div className="col-9 field-background"><Field players={this.state.players_data}></Field></div>
        </div>
       
        
      </div>
    );
  }
 
}

export default App;
