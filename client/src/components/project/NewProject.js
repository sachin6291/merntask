import React, {Fragment, useState} from 'react';

const NewProject = () => {

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

    //add to the state

    //reset form
  }

  return ( 
    <Fragment>
    <button
      type='button'
      className='btn btn-block btn-primario'
      >New Project</button>
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
    </Fragment>
    
   );
}
 
export default NewProject;