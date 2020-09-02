const Project = require('../models/Project')
const {validationResult} = require('express-validator')

exports.createProject = async(req,res)=>{

  //check if there are errors in projects
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    //create a new project
    const project = new Project(req.body);

    //save user with jwt
    project.user = req.user.id

    //save the project
    project.save()
    res.json(project)

  } catch (error) {
    console.log(error);
    res.status(500).send('There has been an error in createProject')
  }
} 

//get all the projects of the current user
exports.getProjects = async(req, res) =>{
  try {
    const projects = await Project.find({user: req.user.id}).sort({registry:-1})
    res.json({projects})
  } catch (error) {
    console.log(error)
    res.status(500).send('There has been an error in getProjects')
  }
}
// update a project
exports.updateProject = async(req,res)=>{
  
  //check if there are errors in user
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  //extract info of project
  const{name}= req.body
  const newProject ={}
  
  if(name){
    newProject.name = name
  }

  try {
    //check the id
    let project = Project.findById(req.params.id);
    //check if project exists
    //verify the creator of the project
    //update
    
  } catch (error) {
    console.log(error)
    res.status(500).send('There has been an error in updateProject')
  }
}