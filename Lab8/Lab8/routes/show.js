const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get("/:id", async (req, res) => {
    try{
        const { data } = await axios.get(
            `http://api.tvmaze.com/shows/${req.params.id}`
        );
        data.summary = data.summary.replace(/( |<([^>]+)>)/ig, " ");
        if(data.image === null){
            data.image = {
               "medium":  "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
            };
        }
        if(data.language === null){
            data.language = "N/A";
        }
        if(data.genres.length === 0){
            data.genres.splice(0, 0, 'N/A');
        }
        if(data.rating.average === null){
            data.rating.average = "N/A";
        }
        if(data.network === null){
            data.network = "N/A";
        }
        if(data.summary === null){
            data.summary = "N/A";
        }
        res.render('posts/showDetails',{data: data, title: data.name});
    } catch (e){
        res.status(404).render('posts/noIDShowFound', {title: "No Show Found For Given ID", errors: "There is no show found for the given ID, please reenter a valid ID."})
    }
});

module.exports = router;