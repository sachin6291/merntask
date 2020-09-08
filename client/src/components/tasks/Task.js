import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({ task }) => {

  // Extract if a project is active
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // Get the function from context of task
  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasks, updateTask, editCurrentTask } = tasksContext;


  //Extract the Project
  const [selectedProject] = project;

  //Function that deletes task when btn is pressed
  const taskDelete = id => {
    deleteTask(id, selectedProject._id);
    getTasks(selectedProject.id)
  }

  // Function that modifies the state of tasks
  const changeState = task => {
    if (task.status) {
      task.status = false;
    } else {
      task.status = true
    }
    updateTask(task);
  }

  //Add a current task when user edits it
  const editTask = task => {
    editCurrentTask(task);
  }

  return (
    <li className="tarea sombra">
      <p>{task.name} </p>

      <div className="estado">
        {task.status
          ?
          (
            <button
              type="button"
              className="completo"
              onClick={() => changeState(task)}
            >Complete</button>
          )
          :
          (
            <button
              type="button"
              className="incompleto"
              onClick={() => changeState(task)}
            >Incomplete</button>
          )
        }
      </div>

      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => editTask(task)}
        >Edit</button>

        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => taskDelete(task._id)}
        >Delete</button>
      </div>
    </li>
  );
}

export default Task;