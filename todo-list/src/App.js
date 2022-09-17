import React, { useState } from 'react';
import './App.css';

function App() {
const [items, setItems] = useState([]);

  return (
    <div className="App">
      <input type="text" id='' placeholder='What needs to be done?' onChange={ e => setItems(e.target.value)}/>
      <ul>
        { items.map(item => item (
          <li key={item.id}>{item.value}</li>
        ))

        }
      </ul>
    </div>
  );
}

export default App;
