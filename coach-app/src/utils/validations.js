import {CONSTANTS} from './constants';
import {has} from 'lodash';

export const isPlayersDataValid = (playersData,teamSize) => {
    if(!Array.isArray(playersData) || playersData.length !== (teamSize * 2)) return false;

    let blueTeam = playersData.filter((p)=> { 
        if(has(p,'team.id'))  return p.team.id === CONSTANTS.BLUE_TEAM;
        return false;
    });
    
    if(blueTeam.length !== teamSize) return false;

    let redTeam = playersData.filter((p)=> { 
        if(has(p,'team.id'))  return p.team.id === CONSTANTS.RED_TEAM;
        return false;
    });
    
    if(redTeam.length !== teamSize) return false;

    return true;


}

