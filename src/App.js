import React, {Component} from 'react';
import Header from './components/Header';
import PlayerList from './components/PlayerList';
import AddPlayer from './components/Form/AddPlayer';


class App extends Component {
  
  render(){
    return (
          <div className="scoreboard">
            <Header />      
            <PlayerList />
            <AddPlayer  />
          </div>
    );
  }
}

export default App;
