const express = require('express');
const router = express.Router();
const { Posts } = require('../models');
const { LastKnown } = require('../models');
const { Price } = require('../models');

// Get All Posts
router.post('/', async (req, res) => {
    const postLists = await Posts.findAll();
    res.json(postLists);
});

// Get All Lost and Found Posts
router.post('/lost-found/home', async (req, res) => {
    const list = await Posts.findAll({where: {type: [0,1]}});
    res.json(list);
});

// Get all personal posts
router.post('/lost-found/personal', async (req, res) => {
    const body  = req.body;
    const list = await Posts.findAll({where: {author_email: body['author_email'], type: [0,1]}});
    res.json(list);
    
});

// Get Detailed information on posts
router.post('/lost-found/view', async(req, res) => {
    const body = req.body;
    const list = await Posts.findAll({where: {id: body['id']}});
    const lastKnown = await LastKnown.findAll({where: {id: body['id']}});

    const post = JSON.parse(JSON.stringify(list))[0];
    const _lastKnown = JSON.parse(JSON.stringify(lastKnown))[0];
    
    for (var key in _lastKnown) {
        post[key] = _lastKnown[key];
    }
    
    res.json(post);
});

// Create Lost-Found Post
router.post('/lost-found/create', async(req, res) => {
    const body = req.body;

    const post = {};
    post['type'] = body['type'];
    post['title'] = body['title'];
    post['description'] = body['description'];
    post['author_email'] = body['author_email'];

    console.log(post);

    try{

        const ret = await Posts.create(post);

        const lastknown = {};
        lastknown['id'] = ret['id'];
        lastknown['location'] = body['location'];
        lastknown['time'] = body['time'];

        await LastKnown.create(lastknown);
        res.json(ret);
    }
    catch(err){
        console.log(err);
    }
});


// Get All MarketPlace Posts 
router.post('/marketplace/home', async (req, res) => {
    const list = await Posts.findAll({where: {type: 2}});
    res.json(list);
});

// Get all personal Marketplace posts
router.post('/marketplace/personal', async (req, res) => {
    const body  = req.body;
    const list = await Posts.findAll({where: {author_email: body['author_email'], type: 2}});
    res.json(list);
    
});

// Get Detailed information on market place posts
router.post('/marketplace/view', async(req, res) => {
    const body = req.body;

    try{
        const list = await Posts.findAll({where: {id: body['id']}});
        const price = await Price.findAll({where: {id: body['id']}});

        const post = JSON.parse(JSON.stringify(list))[0];
        const _price = JSON.parse(JSON.stringify(price))[0];
        
        for (var key in _price) {
            post[key] = _price[key];
        }
        
        res.json(post);
    }
    catch(err){
        console.log(err);
    }
});


// Create MarketPlace  Post
router.post('/marketplace/create', async(req, res) => {
    const body = req.body;

    const post = {};
    post['type'] = 2;
    post['title'] = body['title'];
    post['description'] = body['description'];
    post['author_email'] = body['author_email'];

    console.log(post);

    try{

        const ret = await Posts.create(post);

        const price = {};
        price['id'] = ret['id'];
        price['price'] = body['price'];

        await Price.create(price);
        res.json(ret);
    }
    catch(err){
        console.log(err);
    }
});

module.exports = router;
