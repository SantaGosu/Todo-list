import React, { useState } from 'react';
import './App.css';

function App() {
const [id, setId] = useState('')

  return (
    <div className="App">
      <input type="text" id='' placeholder='What needs to be done?' onChange={ e => setId(e.target.value)}/>
      <button onClick={setId}></button>
    </div>
  );
}

export default App;
