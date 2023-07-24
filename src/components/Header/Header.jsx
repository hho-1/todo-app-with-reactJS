import React, { useState } from 'react'
import "./header.css"

const Header = ({onCreate}) => {
  
  const [title, setTitle] = useState('')
  
  const handleAddButton = (e) => {
    e.preventDefault()
    onCreate(title)
    setTitle('')
      
  }
  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  return (
    <div className='header-class'>
      {
        title ? (<><h1>ToDo App</h1><section>
          <input type="text" placeholder='Enter new task to do' onChange={handleChange} value={title} />
          <button onClick={handleAddButton}>Add</button>
        </section></>
        )
        :
        (<><h1>ToDo App</h1><section>
            <input type="text" placeholder='Enter new task to do' onChange={handleChange} value={title} />
            <button disabled onClick={handleAddButton}>Add</button>
          </section></>)

      }
    </div>
  )
}

export default Header