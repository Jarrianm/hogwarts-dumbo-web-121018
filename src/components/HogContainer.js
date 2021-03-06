import React, { Component } from 'react';
import '../App.css';
import HogCard from "./HogCard"
import Filter from "./Filter"

class HogContainer extends Component {
state = {
  hogs : this.props.hogs,
  filteredHogs : this.props.hogs,
  filter: ''
}


  changeHandler = e => {
    console.log(e)
    let term = e.target.value.toLowerCase();
   let filtered = [...this.state.hogs].filter(hogs => hogs.name.toLowerCase().includes(term)) 
    this.setState({
      filter: term,
      filteredHogs: filtered
    })
  }
 
  render() {
    console.log(this.props.hogs)
  // let hogList = this.props.hogs.map((hog) => {
  //       return <HogCard name={hog.name} key={hog.id} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog.medal} image={hog.image}/>
  // });

  let filterList = this.state.filteredHogs.map((hog) => (
    <HogCard name={hog.name} key={hog.id} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog.medal} image={hog.image} />	      
  ));	
    return (
      <div className="indexWrapper">
          <Filter filter={this.state.filter} handle={this.changeHandler}/>
        {/* {hogList} */}
        {filterList}
      </div>
    )
  }
}

export default HogContainer;
