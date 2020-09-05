//Route  to authenticate user;
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require('../controllers/authController')
const auth = require('../middleware/auth')

//create an user : api/auth
router.post(
  "/",
  [
    check("email", "Add a valid Email").isEmail(),
    check(
      "password",
      "The password has to be at least 6 caracter long"
    ).isLength({ min: 6 }),
  ],
  authController.authenticateUser
);

router.get('/',
  auth,
  authController.authenticatedUser
)
module.exports = router;
