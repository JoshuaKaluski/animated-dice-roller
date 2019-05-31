import React from 'react';
import Die from './Die';
import './App.css';

function App() {
  return (
    <div className="App">
      <Die face="five" />
      <Die face="three" />
      <Die face="four" />
      <Die face="one" />
      <Die face="two" />
      <Die face="six" />
    </div>
  );
}

export default App;
