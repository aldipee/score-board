import React from 'react';

import {Consumer} from './Context';

const Counter = ({index}) =>(
    <Consumer>
        {data => (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => data.actions.ubahSkor(index, -1)}>-</button>
                    <span className="counter-score">{data.players[index].score}</span>
                <button className="counter-action increment"onClick={() => data.actions.ubahSkor(index, 1)} >+</button>
            </div>
        )}
    </Consumer>
    
)


export default Counter;