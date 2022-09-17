import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random()*10 + 1)
    }])
  }

  return (
    <div className="App">
      <input type="text" placeholder='What needs to be done?' onChange={ e => setItems(e.target.value)}/>
      <ul>
        { items.map(item => item (
          <li key={item.id}>{item.value}</li>
        ))

        }
      </ul>
      <button onClick={addItem}></button>
    </div>
  );
}

export default App;
