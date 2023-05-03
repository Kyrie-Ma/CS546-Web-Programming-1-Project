const express = require('express');
const router = express.Router();
const loginRoutes = require('./login');
const privateRoutes = require('./private');
const signupRoutes = require('./signup');
const logoutRoutes = require('./logout');

const constructorMethod = (app) => {

  app.get("/", async (req, res) => {
    
    if (req.session.user) {
        return res.redirect('/private');
    } else {
        res.render('posts/login', { title: "Login" });
    }
  });

  app.use('/login', loginRoutes);
  app.use('/private', privateRoutes);
  app.use('/signup', signupRoutes);
  app.use('/logout', logoutRoutes);

  app.use('*', (req, res) => {
    res.status(404).json({ error: '404 Page Not found' });
  });
};

module.exports = constructorMethod;