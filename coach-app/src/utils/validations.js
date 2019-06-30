import {CONSTANTS} from './constants';
import {has} from 'lodash';

export const isPlayersDataValid = (playersData) => {
    console.log('constants', CONSTANTS);
    if(!Array.isArray(playersData) || playersData.length !== (CONSTANTS.TEAM_SIZE * 2)) return false;

    let blueTeam = playersData.filter((p)=> { 
        if(has(p,'team.id'))  return p.team.id === CONSTANTS.BLUE_TEAM;
        return false;
    });
    
    if(blueTeam.length !== CONSTANTS.TEAM_SIZE) return false;

    let redTeam = playersData.filter((p)=> { 
        if(has(p,'team.id'))  return p.team.id === CONSTANTS.RED_TEAM;
        return false;
    });
    
    if(redTeam.length !== CONSTANTS.TEAM_SIZE) return false;

    return true;


}

