const express = require('express');
const router = express.Router();
const { Price } = require('../models');

router.post('/byId', async (req, res) => {
    const body = req.body;
    const ret = await Price.findAll({where: {id: body['id']}});
    res.json(ret);
});

router.post('/', async(req, res) => {
    const body = req.body;
    console.log(body);
    const ret = await Price.create(body);
    res.json(ret);
})

module.exports = router