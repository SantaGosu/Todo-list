import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
const [item, setItem] = useState('');
const [list, setList] = useState([]);

useEffect(() => {
  setList([...list, item])
}, [item]);

const preventRefresh = (event) => {
  event.preventDefault();
}


  return (
    <div className="App">
      <form >
      <input type="text" placeholder='What needs to be done?' onSubmit={ (e) => setItem(e.target.value)} />
      </form>
      <ul>{list.map( (value, index) => 
        <li key={index}>{value}</li>)}
      </ul>
    </div>
  );
}

export default App;
