import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
 
  const [list, setList] = useState([]);

  const GetFunction = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/SantaG',%7B", {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(response => response.json())
    .then(data => setList(data))
    .catch(err => console.log("ERROR FOR GET: " + err.message))
  }

 

  const PutFunction = (todo) => {
    let newList = list.concat({"label":todo, "done": false})
    setList(newList);


    fetch("https://assets.breatheco.de/apis/fake/todos/user/SantaG',%7B", {
      method: "PUT",
      body: JSON.stringify(newList),
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log("ERROR to get PUT: " + err.message))
  }


  useEffect(() => {
    GetFunction();
  }, []);


  const deleteTask = (index) => {
    let newList = list.filter((element, i) => i !== index);
    setList(newList);
    fetch("https://assets.breatheco.de/apis/fake/todos/user/SantaG',%7B", {
      method: "PUT",
      body: JSON.stringify(newList),
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log("ERROR to get PUT: " + err.message))
  }

  const preventRefresh = event => {
    event.preventDefault();
  }


  return (
    <div className="container">
      <form onSubmit={preventRefresh}>
        <h1>Todos</h1>
        <Searchbar PutFunction={PutFunction} />
        <ul className='list-group'>{list.map((value, index) =>
          <li className='list-group-item' key={index}>{value.label}
            <button type='button' onClick={()=>deleteTask(index)} className="btn btn-default">x</button>
          </li>)}
          <li className='list-group-item'>{list.length} todo's left</li>
        </ul>
      </form>
    </div>
  );
}


export default App;