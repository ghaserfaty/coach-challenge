const PLAYERS_DATA = [
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

//export const getPlayersdata = () => {return PLAYERS_DATA};

export const PlayerService = {
    getPlayersData: function(){
        return new Promise((resolve,reject)=>{
            resolve(PLAYERS_DATA)
        });
    }
}

