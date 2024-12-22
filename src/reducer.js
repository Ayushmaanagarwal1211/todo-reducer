import { getDateFromBackend } from "../service/localStorage";

export default function taskReducer(state,action){
  switch(action.type){
    case "HANDLE_MARK_ALL" : {
        state = state.map(data =>{return  {...data, status : action.status}})
        return state
    }
    case "FILL" : {
        return action.arr
    }
    case "EDIT": {
      if(isValidId(state,action.id)){
        state =  state.map((task) => 
          task.id === action.id
            ? { ...task, task: action.input } 
            : task  
        );
      }
      return state
    }
    
    case "DELETE" : {
      if(isValidId(state, action.id)){
        state = state.filter((data) => data.id !== action.id);
      }
      return state  
    }
    case "STATUS_CHANGE" :  { 
        if(isValidId(state, action.id)){
        state = state.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            status: task.status == "active" ? "completed" : "active",
          };
          }
         return task
        })
      }
  return state
  }
    case "ADD_TASK" : {
      if(!isValidTask(action.task)){return state}
      state = [...state, {...action.task, id:genId(state)}]
      return state
    }
    default : return state
  }
}
function genId(tasks){
  let max = -Infinity
  for(let i of tasks){
      max = Math.max(i.id , max)
  }
  return max == -Infinity ? 0 : max+1
}
function isValidTask(task){
  return task.task.length>0 && (task.status =="completed" || task.status == "active") && task.color.length>0
}
function isValidId(tasks,id){
  for(let i of tasks){
    if(i.id == id){return true}
  }
  return false
}
