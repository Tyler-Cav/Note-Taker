const router = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then(data => res.json(JSON.parse(data))) 
})
router.post('/notes', (req, res) => {
    const {title, text} = req.body
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid()
        }
        readAndAppend(newNote, './db/db.json')
        res.status(201).end()
    }
})



module.exports = router

