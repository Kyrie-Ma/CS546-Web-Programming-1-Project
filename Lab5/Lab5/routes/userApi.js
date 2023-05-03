const express = require('express');
const router = express.Router();
const data = require('../data');
const peopleData = data.people;
const workData = data.work;

router.get("/people/:id", async (req, res) => {
    try {
      const people = await peopleData.getPeopleById(req.params.id);
      res.json(people);
    } catch (e) {
      res.status(404).json(e);
    }
  });
router.get("/people/", async (req, res) => {
    try{
        const peopleList = await peopleData.getAllPeople();
        res.json(peopleList);
    } catch(e){
        res.status(500).send(e);
    }
});

router.get("/work/:id", async (req, res) => {
    try {
      const work = await workData.getWorkById(req.params.id);
      res.json(work);
    } catch (e) {
      res.status(404).json(e);
    }
  });
router.get("/work", async (req, res) => {
    try{
        const workList = await workData.getAllWork();
        res.json(workList);
    } catch(e){
        res.status(500).send(e);
    }
});

module.exports = router;
