import React from 'react';
import { Table } from 'react-bootstrap';
import {has} from 'lodash';
import './playerList.css';
import {CONSTANTS} from '../../utils/constants';


const renderRows = (players,team) => {
  let ps = players.filter((p)=> {
    if(has(p,'team.id'))  return p.team.id === team;
    return false;
  })
  return ps.map((p) => {
    return (
      <tr key={p.id}>
        <td>{p.name} - {p.role ? p.role.name : ''}</td>
      </tr>
    )
 })
}

export const PlayerList = (props) => {

    return (
      <div className='row'>
        <Table responsive >
        <thead>
          <tr>
            <th className='title'>Blue Team</th>
          </tr>
          </thead>  
          <tbody>
            {renderRows(props.players,CONSTANTS.BLUE_TEAM)}
          </tbody>
        
        </Table>
        <Table responsive >
        <thead>
          <tr>
            <th className='title'>Red Team</th>
          </tr>
          </thead> 
          <tbody>
            {renderRows(props.players,CONSTANTS.RED_TEAM)}
          </tbody>
         
        </Table>

      </div>
   
    
    )
  }


