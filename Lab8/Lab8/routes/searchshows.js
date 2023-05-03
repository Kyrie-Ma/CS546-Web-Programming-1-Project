const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
    if(!req.body.showSearchTerm.trim()){
        res.status(400).render('posts/emptyInput', {title: "Empty Input", errors: "No input in the text form or only input spaces, please reenter a valid input."})
        return;
    }
    let keyword =  req.body.showSearchTerm
    const { data } = await axios.get(`http://api.tvmaze.com/search/shows?q=${keyword}`)
    if (Object.keys(data).length === 0) {
        res.render('posts/noMatchFound', {title: "No Match Found", errors: `We're sorry, but no results were found for ${keyword}.` ,showSearchTerm: keyword})
        return;
    }
    resulted = data;
    if (Object.keys(data).length > 5) {
        resulted = Object.fromEntries(Object.entries(data).slice(0, 5))
    }
    res.render('posts/searchShowsFound',{title: "Shows Found",data: resulted, showSearchTerm: keyword});
});

module.exports = router;