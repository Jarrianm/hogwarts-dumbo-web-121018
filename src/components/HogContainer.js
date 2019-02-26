import React, { Component } from 'react';
import '../App.css';
import HogCard from "./HogCard"


class HogContainer extends Component {

 
  render() {
    console.log(this.props.hogs)
  let hogList = this.props.hogs.map((hog) => {
        return <HogCard name={hog.name} key={hog.id} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} image={hog.image}/>
  })
    return (
      <div className="indexWrapper">
          
        {hogList}
        
      </div>
    )
  }
}

export default HogContainer;
