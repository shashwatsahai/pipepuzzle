import React from 'react'
import 'react-dom'
import './grid.css'

function Grid(props) {
     console.log(props.puzzleArray)
    let rows = [];
    let width = window.innerWidth/props.size - props.size;  
    let height = window.innerHeight/props.size - props.size*4;
    for (var i = 0; i < props.size; i++){
      let cell = []
      for (var idx = 0; idx < props.size; idx++){
          if(props.puzzleArray[i][idx]!==" "){
            cell.push(<td className='td' style={{height:height,width:width}} id={i+''+idx}>{props.puzzleArray[i][idx]}</td>)
          }
         else cell.push(<td className='tdblank' style={{height:height,width:width}} id={i+''+idx}>{props.puzzleArray[i][idx]}</td>)      }
      rows.push(<tr className='tr' id={i}>{cell}</tr>)
    }
    return (<table style={{border:1}} onKeyPress={props.onKeyPress} id='tbl'><tbody id='tblbody'>{rows}</tbody></table>)

}

export default Grid;