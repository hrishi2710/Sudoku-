import React, { Component } from 'react';
import './App.css';

function Cell(){
  return(
    <div className="cell">
    <input className = "cell-input" type="text" maxLength = "1" size="1"></input>
    </div>
  );
}

  function Grid(){
    const noOfCells= Array.apply(null, Array(9));
    return(
      <div className="grid">
      <table className="sudoku-grid">
      <tbody>
      {noOfCells.map((value,index) => (
        <tr key = {index}>
          {noOfCells.map((value,item) => (
        <td key = {(index*9)+item}><Cell key = {(index*9)+item}/></td>
      ))}
        </tr>
      ))}
      </tbody>
      </table>
      </div>
    );
  }

class Sudoku extends Component{
  render(){
    return(
        <div className="sudoku-grid">
        <Grid/>
        </div>
    );
  }  
}

export default Sudoku;
