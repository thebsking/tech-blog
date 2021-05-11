const router = require('express').Router();
const { model } = require('../config/connection');
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                }
            ]
        });

        const posts = allPosts.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
//WHEN I click on the dashboard option in the navigation
//THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

router.get('/dashboard', withAuth, async (req, res)=> {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//WHEN I click on an existing blog post 
//THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

router.get('/post/:id', async (req, res) => {
    try {
        const getPost = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                }
            ]
        });
        const post = getPost.get({ plain: true });

        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
})

module.exports = router;