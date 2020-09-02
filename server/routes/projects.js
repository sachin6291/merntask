const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController')
const auth = require('../middleware/auth')
const {check}= require('express-validator')

//create a project : api/projects
router.post('/',
  auth,
  [
    check('name','Project name is Required').trim().notEmpty()
  ],
  projectController.createProject
)
//get all the projects
router.get('/',
  auth,
  projectController.getProjects
)

//update the project through the id
router.put('/:id',
  auth,
  [
    check('name', 'Project name is Required in update').trim().notEmpty()
  ],
  projectController.updateProject
)
module.exports = router;