import React, { useState } from 'react'
import './AddTodo.css'
const AddTodo = ({content,handleChangeContent,submit}) => {


  return (
    <div>
      <input type='text' placeholder='Add todo...' className='add-todoInput' onChange={handleChangeContent} value={content} />
      <button className='submit-button' onClick={submit}>Submit</button>
    </div>
  )
}

export default AddTodo