import React from 'react';
import './App.css';
import Field from './components/field/field';
import { PlayerList } from './components/playersList/playerList';
import { PlayerService } from './services/players-service';
import { isPlayersDataValid } from './utils/validations';
import {ErrorMessage} from './components/error-message/error-message';
import { CONSTANTS } from './utils/constants';

const DivWithErrorHandling = ErrorMessage(({children}) => <div>{children}</div>)


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {players_data: [], showError: false};
  }

  componentDidMount(){

    PlayerService.getPlayersData().then((data)=>{

      if(isPlayersDataValid(data,CONSTANTS.TEAM_SIZE)){
        this.setState({players_data:data});
      }else{
        throw new Error('Wrong data');
      }
    }).catch((err)=>{
      this.setState({showError: true});
    })
  }
  render(){
    return (
      <DivWithErrorHandling showError={this.state.showError}>
      <div className="App container-fluid">
        <div className="row">
          <div className="col-3"> 
          <h1 className='App-title'>Coach's board</h1>
          <p>Drag the players to the field...</p>
            <PlayerList players={this.state.players_data}></PlayerList>
          </div>
          <div className="col-9 field-background"><Field players={this.state.players_data}></Field></div>
        </div>
       
        
      </div>
      </DivWithErrorHandling>
    );
  }
 
}

export default App;
