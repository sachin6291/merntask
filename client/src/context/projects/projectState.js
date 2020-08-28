import React, {useReducer} from 'react';

import uuid from 'uuid'

import  projectContext  from './projectContext'
import projectReducer from './projectReducer'
import { 
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT
 }from '../../types'


const ProjectState = props => {
  
  const projects = [
    { id: 1, name: 'Online shop' },
    { id: 2, name: 'Intarnet' },
    { id: 3, name: 'Web Design' },
    { id: 4, name: 'Basic CRUD' }
  ]

  const initialState = {
    projects : [],
    form : false,
    errorform: false,
    project : null
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
  const getProjects =()=>{
    dispatch({
      type: GET_PROJECTS,
      payload: projects
    })
   
  }

  //add new project
  const addProject =project=>{
    project.id = uuid.v4()
    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
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
  const deleteProject = projectId =>{
    dispatch({
      type : DELETE_PROJECT,
      payload : projectId
    })
  }

  return(
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorform : state.errorform,
        project : state.project,
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