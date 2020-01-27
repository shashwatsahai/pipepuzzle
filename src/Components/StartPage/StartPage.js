import React from 'react'
import './StartPage.css'
import 'react-dom'

function StartPage(props){
    return (
     <div className = "title">
     <h1>Select Grid Size</h1>
     <select id="gridsize">
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <br></br>
    <input id="levelselect" type="submit" value="Start" onClick = {props.onClick}/>
    </div>
    
    )
}

export default StartPage;