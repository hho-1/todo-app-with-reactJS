import React, { useState } from 'react'
import "./main.css"


const Main = ({toDo, onDelete}) => {

    const [completed, setCompleted] = useState(false)
    const handleCheckClick = () => {
        setCompleted(!completed)
    }

    const handleDeleteClick = () => {
        onDelete(toDo.id)
    }

    return (
        
        <div className='main-class'>
            {
                completed ? (<section className='showToDo completed'>
                
                <button className='check completed' onClick={handleCheckClick}><i className="fa-solid fa-check-double"></i></button>
                <p>{toDo.title}</p>
                <button className='trash' onClick={handleDeleteClick}><i className="fa-solid fa-trash-can"></i></button>
            </section>
            ) 
            : 
            (<section className='showToDo'>
                
                <button className='check' onClick={handleCheckClick}><i className="fa-solid fa-check"></i></button>
                <p className='uncompleted'>{toDo.title}</p>
                <button className='trash' onClick={handleDeleteClick}><i className="fa-solid fa-trash-can"></i></button>
            </section>)
            }
            
            
            
        </div>
    )
}

export default Main