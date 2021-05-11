const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//WHEN I enter a comment and click on the submit button while signed in
//THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        });
        if (!commentData) {
            res.status(404).json({ message: 'No comment with this id' });
            return;
        }
        res.status(200).json(commentData)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;