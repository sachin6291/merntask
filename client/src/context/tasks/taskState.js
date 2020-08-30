import React, { useReducer } from 'react';
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'

import uuid from 'uuid'

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

const TaskState = props =>{

  const initialstate ={
    tasks:[
      {id:1, name: 'Select Platform', status: true, projectId: 1 },
      {id:2, name: 'Select Theme', status: false, projectId: 2 },
      {id:3, name: 'Select Payment system', status: false, projectId: 3 },
      {id:4, name: 'Select Hosting', status: true, projectId: 4 },
      {id:5, name: 'Select Platform', status: true, projectId: 1 },
      {id:6, name: 'Select Theme', status: false, projectId: 2 },
      {id:7, name: 'Select Payment system', status: false, projectId: 3 },
      {id:8, name: 'Select Platform', status: true, projectId: 4 },
      {id:9, name: 'Select Theme', status: false, projectId: 1 },
      {id:10, name: 'Select Payment system', status: false, projectId: 2 },
      {id:11, name: 'Select Platform', status: true, projectId: 3 },
      {id:12, name: 'Select Theme', status: false, projectId: 4 },
      {id:13, name: 'Select Payment system', status: false, projectId: 1 },
    ],
    tasksproject: null,
    errortask: false,
    taskselected: null
  }

  //Create dispatch and state
  const [state, dispatch] = useReducer(TaskReducer, initialstate)

  const getTasks = projectId => {
    dispatch({
      type : TASK_PROJECT,
      payload : projectId
    })
  }

  //Add tasks to he project
  const addTasks = task =>{
    task.id = uuid.v4()
    dispatch({
      type : ADD_TASK,
      payload : task
    })
  }
  
  //Error in new task validation
  const validateTask = ()=>{
    dispatch ({
      type: VALIDATE_TASK
    })
  }
  //Delete the task selected
  const deleteTask = taskId =>{
    dispatch({
      type : DELETE_TASK,
      payload: taskId
    })
  }

  //Change the compleation state of each thask
  const  changeTaskState = task =>{
    dispatch({
      type: STATE_TASK,
      payload : task
    })
  }
  
  //pick the selected task to be edited
  const editCurrentTask = task =>{
    dispatch({
      type:CURRENT_TASK,
      payload : task
    })
  }
  //edit a task
  const updateTask = task =>{
    dispatch({
      type : UPDATE_TASK,
      payload : task
    })
  }
  //clear the taskselected
  const clearTask = ()=>{
    dispatch({
      type:CLEAN_TASK
    })
  }

  return(
    <TaskContext.Provider
      value={{
        tasksproject : state.tasksproject,
        tasks: state.tasks,
        errortask : state.errortask,
        taskselected: state.taskselected,
        getTasks,
        addTasks,
        validateTask,
        deleteTask,
        changeTaskState,
        editCurrentTask,
        updateTask,
        clearTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState