//Route  to create user
const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const {check} = require('express-validator')

//create an user : api/users
router.post(
  "/",
  [
    check("name", "The name is required").not().isEmpty(),
    check("email", "Add a valid Email").isEmail(),
    check("password", "The password has to be at least 6 caracter long").isLength({min:6}),
  ],
  userController.createUser
);
module.exports = router
