import React from 'react'
import Main from '../Main/Main'


const TaskList = ({toDos, onDelete}) => {
  return (
    <div>
        {toDos.map((toDo) => {
            return (
                <Main key={toDo.id} toDo={toDo.toDo} onDelete={onDelete}/>
            )
        })}
    </div>
  )
}

export default TaskList