const express = require('express');
const router = express.Router();
const data = require('../data/users');

router.post('/', async (req, res) => {
    try{
        if(!req.body.username){
            throw 'Error: please privide a username.';
        }
        if(!req.body.password){
            throw 'Error: please privide a password.';
        }
        if(typeof req.body.username != 'string'){
            throw 'username must be string.';
        }
        if(typeof req.body.password != 'string'){
            throw 'password must be string.';
        }
        if(req.body.username.indexOf(' ')>=0){
            throw 'Error: username must not contain space.'
        }
        if(req.body.username.length < 4){
            throw 'Error: username must at least 4 characters.'
        }
        if(req.body.password.indexOf(' ')>=0){
            throw 'Error: password must not contain space.'
        }
        if(req.body.password.length < 6){
            throw 'Error: password must at least 6 characters.'
        }
        req.body.username = req.body.username.toLowerCase();
        let newUser = await data.checkUser(
            req.body.username,
            req.body.password
        );
        if(newUser.authenticated === true){
            req.session.user = { username: req.body.username };
            res.redirect('/private')
        }
    } catch (e) {
        res.status(400).render('posts/login', {title: 'Login',status: 'HTTP 400', error: e})
    }
});

module.exports = router;