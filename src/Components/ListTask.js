import React from 'react'
import Task from './Task'

const ListTask = () => {
    const tasks =[
        {id: 1, description: 'task1',isDone: false},
        {id: 2, description:  'task2',isDone: false},
        {id: 3, description:  'task3',isDone: false},
        {id: 4, description:  'task4',isDone: false},
    ]
    return (
        <div>
            {tasks.map((task)=>(
                <Task id={task.id} title={task.description} completed={task.isDone}/>))}
        </div>
    )
}

export default ListTask
