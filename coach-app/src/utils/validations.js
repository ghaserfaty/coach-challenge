import {CONSTANTS} from './constants';
import {groupBy} from 'lodash';

export const isPlayersDataValid = (playersData,teamSize) => {
    if(!Array.isArray(playersData) || playersData.length !== (teamSize * 2)) return false;

    let teams = groupBy(playersData,'team.id')
    if(teams[CONSTANTS.BLUE_TEAM].length === teamSize && teams[CONSTANTS.RED_TEAM].length === teamSize){
        return true
    }


    return false;


}

