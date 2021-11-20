import React from 'react'
import {Button} from 'react-bootstrap'
const Task =({task}) =>({description,isDone}) => {
    return (
        <div>
          <h3> {task.description}</h3>
          <h5> {task.isDone}</h5>
          <input type='checkbox'  checked={isDone}/>
          {description}
          <Button>Delete</Button>
        </div>
    )
}

export default Task
