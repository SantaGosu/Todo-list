import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
  const [item, setItem] = useState('Take a walk');
  const [list, setList] = useState([]);

 const funcGET = () => {
      fetch("https://assets.breatheco.de/apis/fake/todos/user/SantaG',%7B", {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
      })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log("ERROR FOR GET: " + err.message))
    }

      
    const getPUT = () => {
      fetch("https://assets.breatheco.de/apis/fake/todos/user/SantaG',%7B", {
        method: "PUT",
        body: JSON.stringify(
          {
            label: list,
            "done": false
          }
        ),
        headers: {"Content-type": "application/json;charset=UTF-8"}
      })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log("ERROR to get PUT: " + err.message))
    }

  useEffect(() => {
    funcGET()
    setList([...list, item])
  }, [item]);


  const deleteTask = (index) => {
    setList(list.filter((element, i) => i !== index))
  }

  // useEffect(() => {
  //   getPUT()
  // }, [deleteTask()])

  const preventRefresh = event => {
    event.preventDefault();
  }

  console.log( "this is the list" + list)
  return (
    <div className="container">
      <form onSubmit={preventRefresh} >
        <h1>Todos</h1>
        <Searchbar setItem={setItem} />
        <ul className='list-group'>{list.map((value, index) =>
          <li className='list-group-item' key={index}>{value}
            <button type='button' onClick={()=>deleteTask(index)} className="btn btn-default">x</button>
          </li>)}
          <li className='list-group-item'>{list.length} to dos left</li>
        </ul>
      </form>
    </div>
  );
}

export default App;