/**
 * Import all dependecy
 */
const express = require('express');
const findServer = require('../Controller');

//Initialize the Router
const router = express.Router();

/**
 * GET API to fetch the server
 */
router.get('/getServer', async (req, res) => {
    try {    
        //Request timout 5 Seconds
        req.setTimeout(5000); 
        const server = await findServer();
        res.status(200).send({
            status: 'success',
            message: server,
        });
    } catch (error) {
        res.status(500).send({
            status : 'ERROR',
            message: error.message
        });
    }
});

module.exports = router;