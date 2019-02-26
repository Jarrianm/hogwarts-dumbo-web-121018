import React, { Component } from 'react';
import '../App.css';
// import HogDetails from "./HogDetails"




class HogCard extends Component {

   state = {
     clicked: false
   }
  handleClick  = () => {
    console.log('clicked',this.props.name)
  this.setState({
    clicked: !this.state.clicked
  })
  }



render() {
console.log(this.props);

  

    return (
      this.state.clicked ?
      
      <div className='pigTile'>
        <h1 className="largeHeader">{this.props.name}</h1>
        <h3 className="hoggyText">Specialty:{this.props.specialty}</h3>
        <h1 className="achievementText">Medal:{this.props.weight} </h1>
        <img className="img" alt='' src={this.props.image} onClick={(e) => this.handleClick(e)}/>
      </div>
      :
      <div className="pigTile">
      <h1 className="largeHeader">{this.props.name}</h1>
      <img className="img" alt='' src={this.props.image} onClick={(e) => this.handleClick(e)}/>
      <ul>
        
        
        {/* <li>Specialty: {this.props.specialty}</li>
        <li>Weight: {this.props.weight}</li>
        Greased: <input type="checkbox" value={this.props.greased} checked={this.props.greased}/>
       */}
      
      
      </ul>
    </div>
    )
  }
}

export default HogCard;
