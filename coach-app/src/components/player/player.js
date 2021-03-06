import React from 'react';
import Draggable from 'react-draggable'; // The default
import './player.css';

import {CONSTANTS} from '../../utils/constants';

export default class Player extends React.Component {


    getTeamClassName(){
      let team = this.props.team;
      if(team === CONSTANTS.BLUE_TEAM){ return CONSTANTS.BLUE_TEAM_LABEL;}
      if(team === CONSTANTS.RED_TEAM){ return CONSTANTS.RED_TEAM_LABEL;}
      return '';
    }
    render() {
      return  (
      <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{x: 0, y: 0}}
      position={null}
      grid={[25, 25]}
      scale={1}
      bounds='.field'
      >
      <div className={'player handle '+(this.getTeamClassName())}>
      <span className='name'>{this.props.name}</span>
      </div>
      
    </Draggable>
    )
    }
  }