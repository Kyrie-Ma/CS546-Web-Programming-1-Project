const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    if(req.session.user){
        res.render('posts/private',{title: "Private", username: req.session.user.username});
    }
    else{
        res.redirect('/');
    }
});

module.exports = router;