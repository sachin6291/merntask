const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.authenticateUser = async (req, res) =>{
  //check if there are errors in user
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {email, password}= req.body
  try {
    //check for valid email from DB
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    //check for password from DB
    const passCheck = await bcryptjs.compare(password, user.password);
    if (!passCheck) {
      return res.status(400).json({ msg: "Wrong Password" });
    }

    //after all checks create and sign JWT
    const payload = {
      user: {
        id: user.id,
      },
    };

    //sign JWT
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 3600,
      },
      (error, token) => {
        if (error) throw error;

        //confirmation message
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error)
    
  }
}