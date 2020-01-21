import React, { Component } from 'react';

import {Consumer} from './../Context';


class AddPlayer extends Component{

    render(){
        return(
            <Consumer>
                {data => {
                    const inputValue = React.createRef();
                    const formSubmit = (e) =>{
                        e.preventDefault();
                        data.actions.addPlayer(inputValue.current.value);
                        e.currentTarget.reset();
                    }
                    return(
                        <form onSubmit={formSubmit}>
                        <input type="text" ref={inputValue} placeholder='Masukana nama'/>
                        <input type="submit" value="Tambah"/>
                    </form>
                        )
                }}
            </Consumer>
            
        )
    }

}

export default AddPlayer;