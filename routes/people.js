const express = require('express')
const router = express.Router()
const Person = require('../models/person')

//Get all
router.get('/', async (req, res) => {
    try {
        const people = await Person.find();
        res.status(200).json({ people });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//Get one
router.get('/:id', getPerson, (req, res) => {
    res.json(res.person)
});

//Create one
router.post('/', async (req, res) => {
    const person = new Person({
        name: req.body.name,
        mentalIssues: getMentalIssues()
    })
    try {
        const newPerson = await person.save()
        res.status(201).json({ newPerson });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

//Update one
router.patch('/:id', getPerson, async (req, res) => {
    if (req.body.name != null) {
        res.person.name = req.body.name;
    } try {
        const updatePerson = await res.person.save()
        res.json(updatePerson)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

});

//Delete One
router.delete('/:id', getPerson, async (req, res) => {
    try {
        await res.person.remove()
        res.json({ message: 'Person Succesfully deleted' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


async function getPerson(req, res, next) {
    let person
    try {
        person = await Person.findById(req.params.id)
        if (person == null) {
            return res.status(404).json({ message: 'Cannot find Person' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.person = person
    next()
}

var issuesArr = []
var autism = "autism"
var depression = "depression"
var anxiety = "anxiety"
var adhd = "adhd"
var horny = "horny"
var unknown = "unknown"


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function volverACero() {
    for (let index = 0; index <= issuesArr.length; index++) {
        issuesArr.pop();
        issuesArr = []
    }
    console.log(`volver a cero: ${issuesArr}`);
};
function arrPush() {
    if (getRndInteger(0, 2) == 0) {
        issuesArr.push(autism, depression, anxiety)
    } if (getRndInteger(0, 2) == 1) {
        issuesArr.push(adhd, horny, unknown)
    }
    else {
        if (getRndInteger(0, 2) == 2) {
            issuesArr.push(autism, depression, anxiety, adhd, horny, unknown)
        }
    }
    console.log(`push: ${issuesArr}`);
};
function getMentalIssues() {
    volverACero();
    arrPush();

    return issuesArr
};


module.exports = router