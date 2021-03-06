const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
  //read the header token
  const token = req.header('x-auth-token');
  
  //Check if there is no token
  if(!token) {
    return res.status(401).json({msg: "missing token, authentification failed"})
  }

  //validate the token
  try {
    const encryption = jwt.verify(token, process.env.SECRET)
    req.user = encryption.user;
    next();    
  } catch (error) {
    res.status(401).json({msg: "Invalid Token"})
  }
}