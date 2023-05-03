const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    if(req.session.user){
        req.session.destroy();
        res.redirect('/');
    }
    else{
        res.redirect('/');
    }
});

module.exports = router;