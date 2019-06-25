const router = require('express').Router();
const db = require("../models");
const seeds = require('../charSeeds.json');

router.route('/characters')
    .get( (req, res, err) => {
        //all characters
        res.json(seeds);
    })

    router.route('/characters')
    .post( (req, res, err) => {
        //all characters
        res.json("");
    })

    router.route('/character/id:')
        .get( (req, res, err) => {
            //all characters
            res.json(seeds[0]);
        })

        .put( (req, res, err) => {
            //all characters
            res.json("");
        })

        .delete( (req, res, err) => {
            //all characters
            res.json("");
        })    
    
    
    router.route('/characters/mine')
    .get( (req, res, err) => {
        //all characters
    })

module.exports = router;