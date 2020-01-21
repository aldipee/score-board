import React from 'react';

import {Consumer} from './Context';
import Counter from './Counter';


const Player = ({index}) =>(
    <Consumer>
        {data =>(
            <div className="player">
                <span className="player-name">
                    {data.players[index].name}
                </span>
                <Counter index ={index} />
            </div>
        )}
    </Consumer>
)


export default Player;