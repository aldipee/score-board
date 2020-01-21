import React, {Component} from 'react';
import Header from './components/Header';
import {Provider} from './components/Context';
import PlayerList from './components/PlayerList';


class App extends Component {
  
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

  
  render(){
    return (
      <Provider value={{players : this.state.players, actions : {ubahSkor : this.ubahSkor}}}>
          <div className="scoreboard">
          <Header />      
          <PlayerList />
          </div>
      </Provider>
    );
  }
}

export default App;
