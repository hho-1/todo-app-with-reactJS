import React, { useState } from 'react'
import "./header.css"

const Header = ({onCreate}) => {
  
  const [toDo, setToDo] = useState('')
  const handleAddButton = (e) => {
    e.preventDefault()
    onCreate(toDo)
    setToDo('')
      
  }
  const handleChange = (e) => {
    setToDo(e.target.value)
  }
  return (
    <div className='header-class'>
        <h1>ToDo App</h1>
        <section>
            <input type="text" placeholder='Enter new task to do' onChange={handleChange} value={toDo}/>
            <button  onClick={handleAddButton}>Add</button>
        </section>
    </div>
  )
}

export default Header