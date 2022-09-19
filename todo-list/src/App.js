import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
const [item, setItem] = useState('Take a walk');
const [list, setList] = useState([]);

// fetch('/todos/user/SantaGosu'{
//   method: "PUT",
//   body: JSON.stringify(todos),
//   headers: {
//     "Content-Type": "application/json"
//   }
// }).then(resp => {
//   console.log(resp.ok);
// }).catch(error => {
//   console.log(error);
// })


useEffect(() => {
  setList([...list, item])
}, [item]);

const preventRefresh = event => {
  event.preventDefault();
}

  return (
    <div className="container">
      <form onSubmit={preventRefresh} >
        <h1>Todos</h1>
      <Searchbar setItem={setItem} />
      <ul className='list-group'>{list.map( (value, index) => 
        <li className='list-group-item' key={index}>{value}
        <button type='button' className="btn btn-default">x</button>
        </li>)}
        <li className='list-group-item'> todos left</li>
      </ul>
      </form>
    </div>
  );
}

export default App;
