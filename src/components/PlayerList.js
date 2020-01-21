import React from 'react';

import {Consumer} from './Context';
import Player from './Player';

const PlayerList = () =>(

    <Consumer>
        {data =>(
            <React.Fragment>
                {console.log(data)}
                {data.players.map((player,index)=>(
                    <Player index={index} key={player.id}/>
                ))}
            </React.Fragment>
        )}
    </Consumer>

);


export default PlayerList;