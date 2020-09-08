import React, {useContext, useState, useEffect} from 'react';
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const FormTask = () => {

  // Extract if a project is active
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // Get the context function of task
  const tasksContext = useContext(taskContext);
  const { taskselected, errortask, addTasks, validateTask, getTasks, updateTask, clearTask } = tasksContext;

  // Effect that checks if there is a task selected
  useEffect(() => {
    if (taskselected !== null) {
      setTaskName(taskselected)
    } else {
      setTaskName({
        name: ''
      })
    }
  }, [taskselected]);

  // State of form
  const [taskname, setTaskName] = useState({
    name: ''
  })

  // Extract the name from project
  const { name } = taskname;

  // If no project is selected
  if (!project) return null;

  // Array destructuring to get the current project
  const [selectedproject] = project;

  // Read the Form 
  const handleChange = e => {
    setTaskName({
      ...taskname,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();

    // Validate
    if (name.trim() === '') {
      validateTask();
      return;
    }

    // Check if it is edit or new task
    if (taskselected === null) {
      // add new task to the list
      taskname.project = selectedproject._id;
      addTasks(taskname);
    } else {
      // Update current task
      updateTask(taskname);

      // Delete the selected task from the state
      clearTask();
    }
    // Get filtered tasks from current project
    getTasks(selectedproject.id);

    // reiniciar el form
    setTaskName({
      name: ''
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
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={taskselected ? 'Edit Task' : 'Add Task'}
          />
        </div>
      </form>

      {errortask ? <p className="mensaje error">Name of the Task is Required</p> : null}
    </div>
  );
}

export default FormTask;
