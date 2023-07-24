import React, { useState } from 'react'
import "./main.css"


const Main = ({toDo, onDelete}) => {

    const [completed, setCompleted] = useState(false)
    const handleCheck = () => {
        setCompleted(!completed)
    }

    const handleDelete = () => {
        onDelete(toDo.id)
    }

    return (
        <div className='main-class'>
            <section className='showToDo'>
                
                <button className='check' onClick={handleCheck}><i className="fa-solid fa-check-double"></i></button>
                <p>{toDo}</p>
                <button className='trash' onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></button>
            </section>
            
        </div>
    )
}

export default Main