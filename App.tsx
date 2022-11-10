import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import {Box, TextField, Button, ButtonGroup} from '@mui/material';
import { width } from '@mui/system';



function App() {
  const [passkey, setpassKey] = useState("");
  const [comboInput, setcomboInput] = useState("");
  const clickHandler = () => {
    if(passkey !== comboInput){
        alert(`Try Again! Passkey is ${passkey}, Combo inputted is ${comboInput}`);
                window.location.reload()}
  setcomboInput("")}

  return (
    <div className="App">
      <header className="App-header">
       <div className='button'>
          <TextField
              sx = {{width: 368}}
              id = "outlined-required"
              label = "Pass Key"
              value = {passkey}
              onChange = {(e) => {setpassKey(e.target.value)}}
              placeholder = "Pass Key"
          />
        
        {/* BUTTON KEYS */}
        <div className='buttonKeys'>
          <button onClick = {(e) => setcomboInput(comboInput.concat("1"))}>1</button>
          <button onClick = {(e) => setcomboInput(comboInput.concat("2"))}>2</button>
          <button onClick = {(e) => setcomboInput(comboInput.concat("3"))}>3</button>
          <button onClick = {(e) => setcomboInput(comboInput.concat("4"))}>4</button>
          <button onClick = {(e) => setcomboInput(comboInput.concat("5"))}>5</button>
          <button onClick = {(e) => setcomboInput(comboInput.concat("6"))}>6</button>
          <button onClick = {(e) => setcomboInput(comboInput.concat("7"))}>7</button>
          <button onClick = {(e) => setcomboInput(comboInput.concat("8"))}>8</button>
          <button onClick = {(e) => setcomboInput(comboInput.concat("9"))}>9</button>
        </div> 
        <div className='checkButton'>
          <button onClick={clickHandler} >CHECK</button>
        </div>
        
        {/* CLOSING TAG FIRST DIV */}
       </div>
      </header>
    </div>
  );
}

export default App;
