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
        <Input text={text} result={result} />
        {
          idItems.map((item, index) => <button id={item}>{index}</button> )
        }
        {/* <div className="row">
          <Button symbols="7" handleClick={addToText}/>
          <Button symbols="8" handleClick={addToText}/>
          <Button symbols="9" handleClick={addToText}/>
          <Button symbols="/" color={ButtonColor}handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbols="4" handleClick={addToText}/>
          <Button symbols="5" handleClick={addToText}/>
          <Button symbols="6" handleClick={addToText}/>
          <Button symbols="*" color={ButtonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbols="1" handleClick={addToText}/>
          <Button symbols="2" handleClick={addToText}/>
          <Button symbols="3" handleClick={addToText}/>
          <Button symbols="+" color={ButtonColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbols="0" handleClick={addToText}/>
          <Button symbols="." handleClick={addToText}/>
          <Button symbols="=" handleClick={calculateResult}/>
          <Button symbols="-" color={ButtonColor} handleClick={addToText} />
        </div>
        <Button symbols="Clear" color="red" handleClick={resetInput} /> */}
      </div>
    </div>
  );
}
export default App;
