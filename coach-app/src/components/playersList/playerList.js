import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './playerList.css';
import {CONSTANTS} from '../../utils/constants';


const renderRows = (players,team) => {
  let ps = players.filter((p)=> p.team.id === team)
  return ps.map((p) => {
    return (
      <ListGroup.Item>{p.name}</ListGroup.Item>
    )
 })
}

export const PlayerList = (props) => {

    return (
      <div className='row'>
        <Card className='col' style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item className='title'>Blue Team</ListGroup.Item>
            {renderRows(props.players,CONSTANTS.BLUE_TEAM)}
          </ListGroup>
        </Card>
        <Card className='col' style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item className='title'>Red Team</ListGroup.Item>
            {renderRows(props.players,CONSTANTS.RED_TEAM)}
          </ListGroup>
        </Card>
      </div>
   
    
    )
  }


