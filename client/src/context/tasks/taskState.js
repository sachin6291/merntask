import React, { useReducer } from 'react';
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import axiosClient from '../../config/axios'

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
    tasksproject: [],
    errortask: false,
    taskselected: null
  }

  //Create dispatch and state
  const [state, dispatch] = useReducer(TaskReducer, initialstate)

  const getTasks = async project => {
    try {
      const answer = await axiosClient.get('/api/tasks', {params:{project}})
      dispatch({
        type : TASK_PROJECT,
        payload : answer.data.tasks
      })
    } catch (error) {
      console.log(error)
    }
  }

  //Add tasks to he project
  const addTasks = async task =>{
    try {
      const answer = await axiosClient.post('/api/tasks', task)
        dispatch({
          type : ADD_TASK,
          payload : answer.data
        })
    } catch (error) {
      console.log(error)
    }
  }
  
  //Error in new task validation
  const validateTask = ()=>{
    dispatch ({
      type: VALIDATE_TASK
    })
  }
  //Delete the task selected
  const deleteTask = async (taskId, project) =>{
    try {
      await axiosClient.delete(`/api/tasks/${taskId}`,{params:{project}})
        dispatch({
          type : DELETE_TASK,
          payload: taskId
        })
    } catch (error) {
      console.log(error)
    }
  }

  //Change the compleation state of each thask
  //edit a task
  const updateTask = task =>{
    dispatch({
      type : UPDATE_TASK,
      payload : task
    })
  }
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