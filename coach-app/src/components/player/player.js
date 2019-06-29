import React from 'react';
import Draggable from 'react-draggable'; // The default
import './player.css';


export default class Player extends React.Component {
    render() {
      return  (
      <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{x: 0, y: 0}}
      position={null}
      grid={[25, 25]}
      scale={1}
      onStart={this.handleStart}
      onDrag={this.handleDrag}
      onStop={this.handleStop}>
      <div className='player handle'>
      </div>
    </Draggable>
    )
    }
  }