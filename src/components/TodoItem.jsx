import React from 'react'

const TodoItem = ({title}) => {
  return (
    <div>
        <div>
          <p>{title}</p>
          <button>Delete</button>
        </div>
    </div>
  )
}

export default TodoItem