const express = require("express");
const users = express.Routers();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");
users.use(cors());

process.env.SECRET_KEY = "secret";

users.post(`/register`, (req, res) => {
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  User.findOne({
      email: req.body.email
    })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hashUser.create(userData)
            .then(user => {
              res.json({
                status: user.email + `registered!`
              })
            })
            .catch(errr => {
              res.send(`error: + err`)
            })
        })
      } else {

      }
    })
});