import React, { Component } from 'react';
import './App.css';
import 'react-dom'
import StartPage from './Components/StartPage/StartPage';
import Grid from './Components/Game/grid';
import utility from './Components/utility';

class App extends Component{
 
  state = {
   started:false,
   overlay:false,
   win:false
  };
  shuffle2dArray = function(array,size) {
    var answer = [];
    for(var i=0;i<10;i++){
        var k=Math.random();
        if(k<=0.25){
          console.log("left");
         array = utility.shiftLeft(array,size);
         answer.push("right")
        }
        else if(k>0.25&&k<=0.5){
          console.log("right");
         array = utility.shiftRight(array,size);
         answer.push("left")
        }
        else if(k>0.5 && k<=0.75){   
          console.log("down");
         array = utility.shiftDown(array,size);
         answer.push("up")
        }
        else {
          console.log("up");
         array = utility.shiftUp(array,size);
         answer.push("down")
        }
    }
    window.answer = answer.reverse();
     return array;
 }
  clickevent = function(event,level){
    var e = typeof(level) !="undefined"? level : document.getElementById("gridsize");
    var size = e.options[e.selectedIndex].value;
    var puzzleArray = [];
    for(var ti = 0;ti<size; ti++){
      puzzleArray[ti] = [];
      for(var tj = 0; tj<size;tj++){
        puzzleArray[ti].push(ti*size+tj+1);
        if(ti===size-1 && tj===size-1){
          puzzleArray[ti][tj]=" ";
        }
      }
      if(ti%2===0){  
        puzzleArray[ti] = puzzleArray[ti].reverse() 
      }
    }

    
    puzzleArray = this.shuffle2dArray(puzzleArray,size)
    this.setState({
      started:true,
      size:size,
      blank:{
        x:size-1,
        y:size-1
      },
      overlay:false,
      win:false,
      puzzleArray:puzzleArray
    });
   debugger;
   console.log(this.state)
  }
  shiftDown = () => {
    var jb;
    debugger;
    var puzzle = this.state.puzzleArray,newPuzzle=[],size = this.state.size,newPuzzle1=[],newPuzzle2=[];
    for(var i=0;i<size;i++){
      newPuzzle[i]=[];
      newPuzzle1[i]=[];
      newPuzzle2[i]=[];
      for(var j=0;j<size;j++){
        if(puzzle[i][j]===" "){
          jb = j;
        }
        newPuzzle[i].push(puzzle[i][j]);
      }
    }
    //console.log("state before keypress",newPuzzle)
    for(i=0;i<size;i++){
      for(j=0;j<size;j++){
        if(j===jb)
         newPuzzle2[(i+1)%size][j]=newPuzzle[i][j];
        else newPuzzle2[i][j]=newPuzzle[i][j]
      }
    }
   // console.log("state after keypress",newPuzzle2)
    for(i=0;i<size;i++){
      for(j=0;j<size;j++){   
         newPuzzle1[i][j]=newPuzzle2[i][j]
      }
    }
    this.setState({
      puzzleArray:newPuzzle1
    })
  }

  shiftUp = () => {
    var jb;
    var puzzle = this.state.puzzleArray,newPuzzle=[],size = this.state.size,newPuzzle1=[],newPuzzle2=[];
    for(var i=0;i<size;i++){
      newPuzzle[i]=[];
      newPuzzle1[i]=[];
      newPuzzle2[i]=[];
      for(var j=0;j<size;j++){
        if(puzzle[i][j]===" "){
          jb = j;
        }
        newPuzzle[i].push(puzzle[i][j]);
      }
    }
    for(i=0;i<size;i++){
      for(j=0;j<size;j++){
        if(j===jb)
         newPuzzle2[i][j] = newPuzzle[(i+1)%size][j];
        else newPuzzle2[i][j] = newPuzzle[i][j]
      }
    }
    for(i=0;i<size;i++){
      for(j=0;j<size;j++){       
         newPuzzle1[i][j]=newPuzzle2[i][j]
      }
    }
    this.setState({
      puzzleArray:newPuzzle1
    })
  }

  shiftRight = () => {
    var ib;
    var puzzle = this.state.puzzleArray,newPuzzle=[],size = this.state.size,newPuzzle1=[],newPuzzle2=[];
    for(var i=0;i<size;i++){
      newPuzzle[i]=[];
      newPuzzle1[i]=[];
      newPuzzle2[i]=[];
      for(var j=0;j<size;j++){
        if(puzzle[i][j]===" "){
          ib = i;
        }
        newPuzzle[i].push(puzzle[i][j]);
      }
    }
    for(i=0;i<size;i++){
      for(j=0;j<size;j++){
        if(i===ib)
         newPuzzle2[i][j]=newPuzzle[i][(j+1)%size];
        else newPuzzle2[i][j]=newPuzzle[i][j]
      }
    }
    for(i=0;i<size;i++){
      for(j=0;j<size;j++){       
         newPuzzle1[i][j]=newPuzzle2[i][j]
      }
    }
    this.setState({
      puzzleArray:newPuzzle1
    })
  }
  shiftLeft = () => {
    var ib;
    var puzzle = this.state.puzzleArray,newPuzzle=[],size = this.state.size,newPuzzle1=[],newPuzzle2=[];
    for(var i=0;i<size;i++){
      newPuzzle[i]=[];
      newPuzzle1[i]=[];
      newPuzzle2[i]=[];
      for(var j=0;j<size;j++){
        if(puzzle[i][j]===" "){
          ib = i;
        }
        newPuzzle[i].push(puzzle[i][j]);
      }
    }
    for(i=0;i<size;i++){
      for(j=0;j<size;j++){
        if(i===ib)
         newPuzzle2[i][(j+1)%size]=newPuzzle[i][j];
        else newPuzzle2[i][j]=newPuzzle[i][j]
      }
    }
    
    this.setState({
      puzzleArray:newPuzzle2
    })
  }
  handleKeyPress = (event) => {
    if(event.key === 'ArrowUp' || event.key==="w" || event.key==="W"){
      this.shiftUp();
    //  console.log('enter ArrowUp here! ')
    }
    else if(event.key === 'ArrowDown' || event.key==="s" || event.key==="S"){
      this.shiftDown();
      //console.log('enter ArrowDown here! ')
    }
    else if(event.key === 'ArrowRight' || event.key==="d"  || event.key==="D"){
      this.shiftRight();
      //console.log('enter ArrowDown here! ')
    }
    else if(event.key === 'ArrowLeft' || event.key==="a" || event.key==="A"){
      this.shiftLeft();
      //console.log('enter ArrowDown here! ')
    }
   // else console.log(event);
    this.checkWin();
  }
 
  nextLevel = () => {
    var size = parseInt(this.state.size)+1;
    debugger;
    var puzzleArray = [];
    for(var ti = 0;ti<size; ti++){
      puzzleArray[ti] = [];
      for(var tj = 0; tj<size;tj++){
        puzzleArray[ti].push(ti*size+tj+1);
       } 
    }
    puzzleArray[size-1][size-1]=" ";
    utility.shuffle2d(puzzleArray);
    
    while(this.checkWin(puzzleArray,size,true)===true){
      utility.shuffle2d(puzzleArray);    
    }
    this.setState({
      started:true,
      size:size,
      blank:{
        x:size-1,
        y:size-1
      },
      overlay:false,
      win:false,
      puzzleArray:puzzleArray
    });

  }
  Wintext = () => {
    var rcontent = <div id="overlay"><div id="overlaytext">You Win<br></br><button id="overlaytextbutton" onClick={this.nextLevel}>Play Next Level</button></div></div>;
    return rcontent;
  }
  checkWin = (puzzle, sizeParam, startCheck) =>{
    var i, j, puzzleArray = puzzle || this.state.puzzleArray, size =sizeParam|| this.state.size;
    startCheck = typeof(startCheck)=="undefined"?false:true;
    for(i=0;i<size;i++){
      for(j=0;j<size;j++){
        var cur=puzzleArray[i][j];
        var next=cur+1;
        if(cur!==size*size-1&&cur!==" "){
          if((i<size-1&&puzzleArray[i+1][j]===next)||(j<size-1&&puzzleArray[i][j+1]===next)||(i>0&&puzzleArray[i-1][j]===next)||(j>0&&puzzleArray[i][j-1]===next)){
            continue;
          }
          else {
            return false;
          }
        }  
      }
    }
    if(startCheck === false){
      this.setState({
        win:true
      })
    }
    
     return true;
  }
  componentDidMount(){
    document.getElementById("levelselect").focus(); 
  }
  // componentDidUpdate(){
  //   if(){
  //     console.log("Win");
  //   }
  //   // if(this.checkWin()===true){
  //   //   console.log("Win");
  //   // }
  // }
  
   render (){
    

    let content = null;
   
    if(this.state.started === false){
      content = <div><StartPage onClick={this.clickevent.bind(this)}></StartPage></div>
    }
    else{
      if(this.state.win===false)
        document.addEventListener("keydown", this.handleKeyPress);
      content = <Grid size={this.state.size} blank={this.state.blank} puzzleArray={this.state.puzzleArray} ></Grid>
    }

    if(this.state.started === true && this.state.win===true){
      document.removeEventListener("keydown",this.handleKeyPress)
      content = <div><this.Wintext/>{content}</div>
    }
      
    return (
      content
    )
  }
}
export default App;
