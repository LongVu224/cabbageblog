const express = require('express');
const passport = require("passport")
const jwt = require("jsonwebtoken")
const router = express.Router();

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if(err){
      return next(err)
    }
    if(!user){
      return res.status(403).json({
                error: "Wrong username or password"
             });
    }
    req.login(user, () => {
      const body = {_id: user.id, username: user.username }

      const token = jwt.sign({user: body}, "jwt_secret")
      return res.json({token})
    })
  })(req, res, next)
})

router.get("/logged-in", passport.authenticate("jwt", { session: false }), (req, res) => {
  if(!req.user){
    res.json({
      loggedIn: false
    })
  } else {
    res.json({loggedIn: true})
  }
})

router.get("/secret", passport.authenticate("jwt", { session: false }), (req, res) => {
  if(!req.user){
    res.json({
      username: "nobody"
    })
  } else {
    res.json(req.user)
  }
})

module.exports = router;