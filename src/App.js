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
  
  render(){
    return (
      <Provider value={this.state}>
          <div className="scoreboard">
          <Header />      
          <PlayerList />
          </div>
      </Provider>
    );
  }
}

export default App;
