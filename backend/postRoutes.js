const express = require('express')

const router = express.Router()

router.post('/', (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.json({
        message: 'Successfully added post!',
        posts: post
    })
})

router.get('/',(req, res, next ) => {

    postData = [
        {
            id: 'abcd2h',
            title: 'This is my first post',
            content: 'this is th econtent for my first post'
        },
        {
            id: 'abcd3m',
            title: 'This is my second post',
            content: 'this is th econtent for my second post'
        },
        {
            id: 'abcdefg5',
            title: 'This is my third post',
            content: 'this is th econtent for my third post'
        }
    ]

    res.json({
        message: 'posts sent successfully!',
        postData: postData
    })
})

module.exports = router