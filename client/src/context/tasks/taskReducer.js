import {
  TASK_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATE_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAN_TASK
} from '../../types'


 export default (state, action) =>{
   switch(action.type){
    case TASK_PROJECT:
      return{
        ...state,
        tasksproject : state.tasks.filter(task => task.projectId === action.payload)
      }
    case ADD_TASK:
      return{
        ...state,
        tasks: [ action.payload, ...state.tasks],
        errortask : false
      }
    case VALIDATE_TASK:
      return{
        ...state,
        errortask : true
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    case UPDATE_TASK:
    case STATE_TASK:
      return{
        ...state,
        tasks: state.tasks.map(task=>task.id === action.payload.id
          ? action.payload : task)
      }
    case CURRENT_TASK:
      return{
        ...state,
        taskselected: action.payload
      }
    case CLEAN_TASK:
      return{
        ...state,
        taskselected:null 
      }

    default:
      return state
   }
 }