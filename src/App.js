import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import { useState } from 'react';
import AddTask from './Components/AddTask';
import {Form} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const dispatch = useDispatch()
  const tasks = useSelector(state=>state.reducer.tasks)
  const Pfilter = useSelector(state=>state.reducer.filter)
  const  [input, setinput] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
     dispatch({type: 'ADD_TASKS',payload:{description:input,isDone:false}})
  }
  const hanleRemove = (event) => {
    event.preventDefault();
    dispatch({type: 'DELETE_TASKS',payload:{description:input}})
}
  return (
    <div className="App">
     <h1 style={{color:'brown',flexDirection:'column',fontFamily:'roboto',fontSize:'45px'}}> My Todo List </h1>
      <input type="text" onChange={(e)=>setinput(e.target.value)}/>
      <button style={{color:"blue",fontSize:'20px',border:'none'}} onClick={handleSubmit}>Add task</button>
      <button> filter </button>
      <select onChange={(e)=>dispatch({type: 'FILTER',payload: 'isDone'})}>
      </select>
      {tasks&& tasks.filter(el=>Pfilter === 'all' ? true:tasks.isDone===Pfilter).map(task=>(
        <div style={{color:'cornflowerblue',display:'flex',flexDirection:'row',justifyContent: 'space-between',fontSize: '20px'}}>
        { task.id }<br/>
        { task.description}<br/>
        { task.isDone ? 'done' : 'undone'}
        </div>
      ))}
    </div>
  );
}

export default App;
