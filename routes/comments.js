const {Reply, Comment} = require('../models/Comment');
const express = require('express');
const router = express.Router();

router.get('/:videoId', async (req, res) => {

    const comments = await Comment.find({videoId: req.params.videoId});
    return res.send(comments);
});

router.post('/', async (req, res) => {
    try {
        const comment = new Comment({
            text: req.body.text,
            videoId: req.body.videoId
          });
        await comment.save();

        return res.send(comment);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});






module.exports = router;
