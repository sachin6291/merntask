import React, {Fragment, useState, useContext} from 'react';
import projectContext from '../../context/projects/projectContext'

const NewProject = () => {
  
  //obtein state from Context
  const projectsContext = useContext(projectContext)
  const { form, errorform, addNewProject, addProject, showError} = projectsContext
  
  //State for new Project
  const[newprojectname, setNewprojectname]=useState({
    name:''
  })

  const{name}= newprojectname

  const onChangeProject = e =>{
    setNewprojectname({
      ...newprojectname,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitProject = e =>{
    e.preventDefault()

    //validation
    if(name.trim() === ''){
      showError()
      return
    }
    //add to the state
    addProject(newprojectname)
    
    //reset form
    setNewprojectname({
      name:''
    })

  }

  return ( 
    <Fragment>
    <button
      type='button'
      className='btn btn-block btn-primario'
      onClick={()=>addNewProject()}
      >New Project</button>
      {form?
      (
        <form
          className='formulario-nuevo-proyecto'
          onSubmit={onSubmitProject}
        >
          <input
            type="text"
            className="input-text"
            placeholder="Project Name"
            name="name"
            value={name}
            onChange={onChangeProject}
          />
          <input
            type="submit"
            className='btn btn-primario btn-block'
            value="Add Project"
          />
        </form>
      ):null}
      {errorform 
        ?<p className="mensaje error">Name is Required</p>
        :null}
    </Fragment>
    
   );
}
 
export default NewProject;