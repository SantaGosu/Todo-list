import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Searchbar from './components/Searchbar';

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
        <Searchbar />
        <ul className='list-group'>{list.map( (value, index) => 
          <li className='list-group-item' key={index}>{value}</li>)}
          <li className='list-group-item'> todos left</li>
        </ul>
        
      </form>
    </div>
  );
}

export default App;
