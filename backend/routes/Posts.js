const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

//Get all Posts
router.get('/', async (req, res) => {
    const postLists = await Posts.findAll();
    res.json(postLists);
});

// Get all Lost Posts
router.get('/getLostPost', async(req, res) => {
    const lostList = await Posts.findAll({ where: {type: 0}});
    res.json(lostList);
});

// Get all Found Posts
router.get('/getFoundPost', async(req, res) => {
    const lostList = await Posts.findAll({ where: {type: 1}});
    res.json(lostList);
});

// Get all sale Posts
router.get('/getSalePost', async(req, res) => {
    const lostList = await Posts.findAll({ where: {type: 2}});
    res.json(lostList);
});

// Get all purchase posts
router.get('/getPurchasePost', async(req, res) => {
    const lostList = await Posts.findAll({ where: {type: 3}});
    res.json(lostList);
});

// For all by Id, pass id in header {"id" : ..}
//Get all Lost Post by Id
router.post('/getLostById', async(req, res) => {
    const post = req.body;
    const postList = await Posts.findAll({ where: {id: post['id'], type: 0}});
    res.json(postList)
       
});

// Get all found post by id
router.post('/getFoundById', async(req, res) => {
    const post = req.body;
    const postList = await Posts.findAll({ where: {id: post['id'], type: 1}});
    res.json(postList)
       
});

// Get all Sale post by id
router.post('/getSaleById', async(req, res) => {
    const post = req.body;
    const postList = await Posts.findAll({ where: {id: post['id'], type: 2}});
    res.json(postList)
       
});

//Get all Purchase by id
router.post('/getPurchaseById', async(req, res) => {
    const post = req.body;
    const postList = await Posts.findAll({ where: {id: post['id'], type: 3}});
    res.json(postList)
       
});


router.post('/', async(req, res) => {
    const post = req.body;
    const ret = await Posts.create(post);
    res.json(ret);
});

module.exports = router