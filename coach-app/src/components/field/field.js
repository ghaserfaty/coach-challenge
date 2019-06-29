import React from 'react';
import './field.css'
import Player from '../player/player';

const Players = (props) => {
    return (
      <React.Fragment>
        {props.items.map(item => (
          <React.Fragment key={item.id}>
            <Player team={item.team.id}></Player>
          </React.Fragment>
        ))}
      </React.Fragment>
    )
  }

export default class Field extends React.Component {
    render() {
      return <div className='field'>
        <Players items={this.props.players}></Players>
      </div>;
    }
  }