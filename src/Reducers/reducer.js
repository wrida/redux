const initState ={ tasks:[],filter:'all'}
const reducer =(state= initState,action) => {
    switch (action.type) {
       case 'ADD_TASKS' :
            return {...state,tasks:[...state.tasks,action.payload]};
       case 'FILTER' :
            return {...state,filter:action.payload}
       case 'DELETE_TASKS' :
            return {...state,tasks:[...state.tasks,action.payload]};
     default:
        return state
    }
    
}
export default reducer