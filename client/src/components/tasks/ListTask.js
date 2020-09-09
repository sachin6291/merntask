import React, {Fragment, useContext} from 'react';
import Task from './Task'
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const ListTask = () => {

  // Extract projects from initial state
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  //Get the tasks belonging to the projec
  const tasksContext = useContext(taskContext);
  const { tasksproject } = tasksContext;

  // If no project is selected
  if (!project) return <h2>Select a project</h2>;

  // Array destructuring to extract current project
  const [selectedproject] = project;

  // Delete a Project
  const onClickDelete = () => {
    deleteProject(selectedproject._id)
  }

  return (
    <Fragment>
      <h2>Project: {selectedproject.name} </h2>

      <ul className="listado-tareas">
        {tasksproject.length === 0
          ? (<li className="tarea"><p>There are no Tasks</p></li>)
          :
          <TransitionGroup>
            {tasksproject.map(task => (
              <CSSTransition
                key={task._id}
                timeout={200}
                classNames="tarea"
              >
                <Task
                  task={task}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        }
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickDelete}
      >Delete Project &times;</button>
    </Fragment>
  );
}

export default ListTask;
