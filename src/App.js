import React from 'react';
import { useState } from 'react';
import * as math from 'mathjs'
import './style.css';
import Button from './components/Button';
import Input from './components/Input';
const App = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const addToText=(value)=>{
    setText((text)=>[...text,val+""]);
  };

  const calculateResult=()=>{
    const Input=text.join("")
    setResult(math.evaluate(Input))
  }
  const resetInput=()=>{
    setText("")
    setResult("")

  }
  const idItems = ["item0","item1","item2","item3","item4","item5","item6","item7","item8","item9"]

  const ButtonColor = '#f2a33c';
  return (
    <div className="App">
      <div className="calculator-wrapper">
        <h1>changes</h1>
        <Input text={text} result={result} />
        {
          idItems.map((item, index) => <button key={index} id={item}>{index}</button> )
        }
      </div>
    </div>
  );
}
export default App;
