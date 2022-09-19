import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
const [item, setItem] = useState('Take a walk');
const [list, setList] = useState([]);

useEffect(() => {
  setList([...list, item])
}, [item]);

const preventRefresh = event => {
  event.preventDefault();
  console.log("submitted")
  
}


  return (
    <div className="container">
      <form onSubmit={preventRefresh} >
        <h1>Todo list</h1>
        <input size="61" id="textBox" type="text"  placeholder='What needs to be done?' onDoubleClick={(e) => setItem(e.target.value)} />
        <ul className='list-group'>{list.map( (value, index) => 
          <li className='list-group-item' key={index}>{value}</li>)}
          <li className='list-group-item'> todos left</li>
        </ul>
        
      </form>
    </div>
  );
}

export default App;
