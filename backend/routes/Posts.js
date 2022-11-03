const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

//Get all Posts
router.get('/', async (req, res) => {
    const postLists = await Posts.findAll();
    res.json(postLists);
});

// Get all Lost Posts
router.post('/getPostByType', async(req, res) => {
    const post = req.body;
    const lostList = await Posts.findAll({ where: {type: post['type']}});   
    res.json(lostList);
});

// For all by Id, pass id and type in header       {"id" : .., "type": ..} 

//Get all Post by Id
router.post('/getPostById', async(req, res) => {
    const post = req.body;
    //console.log(post);
    const postList = await Posts.findAll({ where: {id: post['id'], type: post['type']}});
    res.json(postList);
       
});


//get all post by author_email
router.post('/getPostByEmail', async(req, res) => {

    const post = req.body;
    const postList = await Posts.findAll({ where: {author_email: post['author_email'], type: post['type'] }});
    res.json(postList);
})



router.post('/', async(req, res) => {
    const post = req.body;
    const ret = await Posts.create(post);
    res.json(ret);
});

module.exports = router