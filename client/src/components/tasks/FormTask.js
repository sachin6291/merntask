import React, {useContext, useState} from 'react';
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const FormTask = () => {

  //get the project state in the context
  const projectsContext = useContext(projectContext)
  const { project } = projectsContext

  const tasksContext = useContext(taskContext)
  const { errortask, addTasks, validateTask, getTasks } = tasksContext

  const [taskname, setTaskname] = useState({
    name: '',
  })

  //destructuring taskname
  const {name} = taskname
  
  // project is null
  if (!project) return null 

  //destructurin of an array of objects
  const [selectedproject] = project

  const handelChange = e =>{
    setTaskname({
      ...taskname,
      [e.target.name]:e.target.value
    })
  }

  const onSubmit = e =>{
    e.preventDefault()

    //validate
    if(name.trim() === ''){
      validateTask()
      return
    }

    
    //add task to the state of the task context
    taskname.projectId = selectedproject.id
    taskname.status = false
    addTasks(taskname)
    
    //get and filter all tasks to only the ones needed addin the new one to it
    getTasks(selectedproject.id)

    //reset the form input
    setTaskname({
      name : ''
    })
  }

  return ( 
    <div className="formulario">
      <form
      onSubmit={onSubmit}
      >
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task Name..."
            name="name"
            onChange={handelChange}
            value = {name}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario brn-submit btn-block"
            value="Add Task" 
          />
        </div>
      </form>
      {errortask?<p className="mensaje error">Task Name is Required</p>:null}
    </div>
   );
}
 
export default FormTask;