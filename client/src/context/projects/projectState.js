import React, {useReducer} from 'react';
import  projectContext  from './projectContext'
import projectReducer from './projectReducer'
import axiosClient from '../../config/axios'
import { 
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT,
  ERROR_PROJECT
 }from '../../types'


const ProjectState = props => {
  
  const initialState = {
    projects : [],
    form : false,
    errorform: false,
    project : null,
    message : null
  }
  //dispatch to execute the actions
  const [state, dispatch] = useReducer(projectReducer, initialState)
  
  //functions for CRUD
  const addNewProject =()=>{
    dispatch({
      type: FORM_PROJECT
    })
  }

  //get the projects
  const getProjects =async()=>{
    try {
      const answer = await axiosClient.get('/api/projects')
        dispatch({
          type: GET_PROJECTS,
          payload: answer.data.projects
        })
    } catch (error) {
      const alert = {
        msg: 'An Error has Occured',
        category: 'alerta-error'
      }
      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      })
    }
   
  }

  //add new project
  const addProject =async project=>{

    try {
      const answer = await axiosClient.post('/api/projects',project)
        dispatch({
          type: ADD_PROJECT,
          payload: answer.data
        })
    } catch (error) {
      const alert = {
        msg: 'An Error has Occured while adding new Project',
        category: 'alerta-error'
      }
      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      })
    }
  }
  
  // Validate form for error
  const showError = ()=>{
    dispatch({
      type: VALIDATE_FORM
    })
  }
  
  //Select the project to work on from the project list
  const currentProject = projectId=>{
    dispatch({
      type : CURRENT_PROJECT,
      payload : projectId 
    })
  }
  
  //Delete the selected project
  const deleteProject = async projectId =>{
    try {
      await axiosClient.delete( `/api/projects/${projectId}`)
      dispatch({
        type : DELETE_PROJECT,
        payload : projectId
      })
    } catch (error) {
      const alert = {
        msg: 'An Error has Occured while deleting',
        category: 'alerta-error'
      }
      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      })
    }
  }

  return(
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorform : state.errorform,
        project : state.project,
        message: state.message,
        addNewProject,
        getProjects,
        addProject,
        showError,
        currentProject,
        deleteProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState