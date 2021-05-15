const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Gig = require('../models/Gig')

router.get('/', (req, res) => {
    Gig.findAll()
        .then(gigs => {
            console.log(gigs)
            res.status(200).send("OK")
        }).catch(err => {
            console.log(err);
        })
})

module.exports = router