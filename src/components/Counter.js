import React from 'react';

import {Consumer} from './Context';

const Counter = ({index}) =>(
    <Consumer>
        {data => (
            <div className="counter">
                <button className="counter-action decrement">-</button>
                    <span className="counter-score">{data.players[index].score}</span>
                <button className="counter-action increment">+</button>
            </div>
        )}
    </Consumer>
    
)


export default Counter;