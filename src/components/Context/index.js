import React,{Component} from 'react';


const ContextApp = React.createContext();

export default class Provider extends Component{
    defaultPlayers = 4;

    state = {
      players :  [{
        name: "Ronaldo",
        score: 0,
        id : 1
      },
      {
        name: "Messi",
        score: 0,
        id : 2
      },
      {
        name: "Ibrahimovic",
        score: 0,
        id : 3
      },
      {
        name: "Moh. Salah",
        score: 0,
        id : 4
      }]
    };
  
    ubahSkor = (indexPlayer, plusMinus) =>{
      this.setState(prevData =>{
        return {
          score : prevData.players[indexPlayer].score += plusMinus
        }
      })
    }
  
    removePlayer = (playerId) =>{
      this.setState(prevData =>{
        return{
          players : prevData.players.filter(player => player.id !== playerId)
        }
      })
    }
  
    addPlayer = (name) =>{
      this.setState(data =>{
        return {
          players : [...this.state.players, {name, score : 0, id : this.state.players.length +1}]
        }
      })
    }
    
    render(){
        return(
            <ContextApp.Provider value={{players : this.state.players, actions : {ubahSkor : this.ubahSkor, removePlayer: this.removePlayer, addPlayer : this.addPlayer}}}>
                {this.props.children}
            </ContextApp.Provider>
        )
    }

}
export  const Consumer = ContextApp.Consumer;