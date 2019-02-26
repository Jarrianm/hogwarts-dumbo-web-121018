import React from 'react'

const Filter = (props) => {


    console.log(props)
    return <input type='text' placeholder='SearchBar' value={props.filter} onChange={props.handle}/>
};

export default Filter