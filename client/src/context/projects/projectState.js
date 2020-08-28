import React, {useReducer} from 'react';

import uuid from 'uuid'

import  projectContext  from './projectContext'
import projectReducer from './projectReducer'
import { 
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM
 }from '../../types'


const ProjectState = props => {
  
  const projects = [
    { id: 1, name: 'Online shop' },
    { id: 2, name: 'Internet' },
    { id: 3, name: 'Web Design' },
    { id: 4, name: 'Basic CRUD' }
  ]

  const initialState = {
    projects : [],
    form : false,
    errorform: false
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

  return(
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorform : state.errorform,
        addNewProject,
        getProjects,
        addProject,
        showError
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState