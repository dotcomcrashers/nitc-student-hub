const express = require('express');
const router = express.Router();
const { LastKnown } = require('../models');

router.post('/byId', async (req, res) => {
    const body = req.body;
    const retLastKnown = await LastKnown.findAll({where: {id: body['id']}});
    res.json(retLastKnown);
});

router.post('/', async(req, res) => {
    const body = req.body;
    console.log(body);
    const ret = await LastKnown.create(body);
    res.json(ret);
})

module.exports = router