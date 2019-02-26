import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hogs from '../porkers_data';
import HogContainer from "./HogContainer"


class App extends Component {

  state = {
    Hogs: Hogs
  }
  render() {
    // console.log(Hogs)
 
    return (
      <div className="App">
        < Nav />
        <HogContainer hogs={Hogs}/>
      </div>
    )
  }
}

export default App;
