import {isPlayersDataValid} from '../src/utils/validations';
import { CONSTANTS } from '../src/utils/constants';


test('good data should return true', () => {
    const GOOD_PLAYERS_DATA = [
        {
            id:1,
            name:'MarcusB',
            team:{
                id:1,
                name:'Blue'
            },
            role:{
                id:1,
                name:'Tank'
            }
        },
        {
            id:2,
            name:'EduM',
            team:{
                id:1,
                name:'Blue'
            },
            role:{
                id:2,
                name:'DPS'
            }
        },
        {
            id:3,
            name:'KedidJ',
            team:{
                id:1,
                name:'Blue'
            },
            role:{
                id:3,
                name:'Healer'
            }
        },
        {
            id:4,
            name:'Goriathu',
            team:{
                id:2,
                name:'Red'
            },
            role:{
                id:1,
                name:'Tank'
            }
        },
        {
            id:5,
            name:'MaxiM',
            team:{
                id:2,
                name:'Red'
            },
            role:{
                id:2,
                name:'DPS'
            }
        },
        {
            id:6,
            name:'SelvaGi',
            team:{
                id:2,
                name:'Red'
            },
            role:{
                id:3,
                name:'Healer'
            }
        }
    
    ]
    expect(isPlayersDataValid(GOOD_PLAYERS_DATA,CONSTANTS.TEAM_SIZE)).toBe(true);
});

test('if it is not an array should return false', () => {
    const notArray = {
        name:'test'
    }
    expect(isPlayersDataValid(notArray,CONSTANTS.TEAM_SIZE)).toBe(false);
});

test('if it is an empty array should return false', () => {
    const emptyArray = [];
    expect(isPlayersDataValid(emptyArray,CONSTANTS.TEAM_SIZE)).toBe(false);
});

test('if it undefined should return false', () => {
    const emptyArray = undefined;
    expect(isPlayersDataValid(emptyArray,CONSTANTS.TEAM_SIZE)).toBe(false);
});

test('different size of teams should return false', () => {
    const wronTeamSize = [
        {
            id:1,
            name:'MarcusB',
            team:{
                id:1,
                name:'Blue'
            },
            role:{
                id:1,
                name:'Tank'
            }
        },
        {
            id:4,
            name:'Goriathu',
            team:{
                id:1,
                name:'Blue'
            },
            role:{
                id:1,
                name:'Tank'
            }
        }
    
    ]
    expect(isPlayersDataValid(wronTeamSize,1)).toBe(false);
});