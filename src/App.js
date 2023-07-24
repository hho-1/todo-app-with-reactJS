
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

import TaskList from './components/ToDoList/ToDoList';

function App() {
  const [toDos, setToDos] = useState([])

    const createToDo = (toDo) => {
        const createdToDos = [
            ...toDos, {
                id: Math.round(Math.random() * 999999999),
                toDo: toDo
            }
        ];
        setToDos(createdToDos)
    }
    const deleteToDoById = (id) => {
      const remainedToDos = toDos.filter((toDo)=> {
        return toDo.id !== id;
      })
      setToDos(remainedToDos)
    }
  return (
    <div className="App">
      <Header onCreate={createToDo}/>
      <h1>ToDo's</h1>
      <TaskList toDos={toDos} onDelete={deleteToDoById}/>
    </div>
  );
}

export default App;
