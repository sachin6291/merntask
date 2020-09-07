const Task = require('../models/Task')
const Project = require('../models/Project')
const { validationResult } = require('express-validator')

//create a new task
exports.createTask = async(req,res)=>{
  
  //check if there are errors in tasks
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    //extract the project and validate it
    const {project} = req.body

    const currentProject = await Project.findById(project)
    if(!currentProject){
      return res.status(404).json({msg: "Project not Found"})
    }

    //check if project belongs to auth user
    if (currentProject.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized Access" })
    }

    //create a new task
    const task = new Task(req.body);

    //save the project
    await task.save()
    res.json(task)

  } catch (error) {
    console.log(error);
    res.status(500).send('There has been an error in createTask')
  }
}

//get all the tasks of the current project
exports.getTasks = async ( req,res)=>{
  
  try {
    //extract the project and validate it
    const { project } = req.query

    const currentProject = await Project.findById(project)
    if (!currentProject) {
      return res.status(404).json({ msg: "Project not Found" })
    }

    //check if project belongs to auth user
    if (currentProject.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized Access" })
    }
  
    //get Tasks through projects
    const tasks = await Task.find({ project }).sort({ registry: -1 })
    res.json({ tasks })

  } catch (error) {
    console.log(error)
    res.status(500).send('There has been an error in get')
  }
}

//update a task
exports.updateTask =async ( req , res ) => {
  
  //check if there are errors in tasks
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {

    //extract the project and validate it
    const { project, name, status } = req.body

    const currentProject = await Project.findById(project)
    
    //check if project belongs to auth user
    if (currentProject.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized Access" })
    }

    //validate current project
    let task = await Task.findById(req.params.id)

    if(!task){
      return res.status(404).json({msg: "Tasknot found"})
    }

    //create a task with new info
    const newTask = {}

    if(name) newTask.name = name

    if(status) newTask.status = status

    //save the task
    task = await Task.findOneAndUpdate({_id: req.params.id}, {$set:newTask},{new:true})

    res.json({task})

  } catch (error) {
    console.log(error)
    res.status(500).send('There has been an error in update task')
  }
}

//delete a task
exports.deleteTask = async (req, res) => {

  //check if there are errors in user
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {

    const {project} = req.query

    //check the id
    let task = await Task.findById(req.params.id)

    //check if task exists
    if (!task) {
      return res.status(404).json({ msg: "task not found" })
    }

    //check if project belongs to auth user
    const currentProject = await Project.findById(project)

    if (currentProject.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized Access" })
    }

    //delete
    await Task.findOneAndRemove({ _id: req.params.id })
    res.json({ msg: "Task Deleted" })

  } catch (error) {
    console.log(error)
    res.status(500).send('There has been an error in deleteTask')
  }
}