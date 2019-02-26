import React, { Component } from 'react';
import '../App.css';
import HogCard from "./HogCard"
import Filter from "./Filter"

class HogContainer extends Component {
state = {
  hogs : [],
  filteredHogs : [],
  filter: ''
}


  changeHandler = e => {
    let term = e.target.value.toLowerCase();
   let filtered = [...this.state.hogs].filter(hogs => hogs.name.toLowerCase().includes(term)) 
    this.setState({
      filter: e.target.value,
      term: e.target.value,
      filteredHogs: filtered
    })
  }
 
  render() {
    console.log(this.props.hogs)
  let hogList = this.props.hogs.map((hog) => {
        return <HogCard name={hog.name} key={hog.id} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog.medal} image={hog.image}/>
  });

  let filterList = this.state.filteredHogs.map((hogs) => (
    <HogCard hogs={this.state.hogs} />	      
  ));	
    return (
      <div className="indexWrapper">
          <Filter />
        {hogList}
        {filterList}
      </div>
    )
  }
}

export default HogContainer;
