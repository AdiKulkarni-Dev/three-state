import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] =useState(0)
  return (
  <div className='App'>
    <header>
      <h1>Counter using state</h1>
    </header>
    <h2>Current value of counter {count}</h2>
    <button onClick={()=>setCount(0)}>Reset</button>
    <button onClick={()=>(count>10 ? "" : setCount(count+1))}>Up</button>
    <button onClick={()=>setCount(count-1)}>Down</button>
  </div>

  );
}

export default App;
