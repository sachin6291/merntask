const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController')
const auth = require('../middleware/auth')
const { check } = require('express-validator')

//create a task : api/tasks
router.post('/',
  auth,
  [
    check('name', 'Task name is Required').trim().notEmpty(),
    check('project', 'Project is Required').trim().notEmpty()
  ],
  taskController.createTask
)
//get all the tasks
router.get('/',
  auth,
  taskController.getTasks
)

//update the task through the id
router.put('/:id',
  auth,
  [
    check('name', 'Task name is Required in update').trim().notEmpty()
  ],
  taskController.updateTask
)

//delete a task
router.delete('/:id',
  auth,
  taskController.deleteTask
)
module.exports = router;