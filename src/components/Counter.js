import React from 'react';

import {Consumer} from './Context';

const Counter = ({index}) =>(
    <Consumer>
        {({actions,players}) => (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => actions.ubahSkor(index, -1)}>-</button>
                    <span className="counter-score">{players[index].score}</span>
                <button className="counter-action increment"onClick={() => actions.ubahSkor(index, 1)} >+</button>
            </div>
        )}
    </Consumer>
    
)


export default Counter;