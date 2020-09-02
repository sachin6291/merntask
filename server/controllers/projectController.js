const Project = require('../models/Project')
exports.createProject = async(req,res)=>{
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
    res.status(500).send('There has been an error')
  }
} 