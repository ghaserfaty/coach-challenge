import React from 'react';
import './field.css'
import fieldImage from '../../assets/field.jpg';
import Player from '../player/player';

const Players = (props) => {
    return (
      <React.Fragment>
        {props.items.map(item => (
          <React.Fragment key={item.id}>
            <Player team={item.team.id} name={item.name}></Player>
          </React.Fragment>
        ))}
      </React.Fragment>
    )
  }

export default class Field extends React.Component {
    render() {
      return <div className='field row'>
        <div className='col-1'><Players items={this.props.players}></Players></div>
        <div className='col-11'><img className='field-image' src={fieldImage} alt="" /></div>
      </div>;
    }
  }