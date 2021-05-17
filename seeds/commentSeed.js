const {Comment} = require('../models');

const seedComments = () => Comment.bulkCreate([
    {
        comment: 'Welcome to the site!',
        user_id: '2', 
        post_id: '1',
    },
    {
        comment: `So glad you're here!`,
        user_id: '4', 
        post_id: '1',
    },
    {
        comment: 'could not agree more!',
        user_id: '1', 
        post_id: '2',
    },
    {
        comment: 'absolutely! how do you take yours?',
        user_id: '2', 
        post_id: '3',
    },
    {
        comment: 'little cream, little sugar. you?',
        user_id: '3', 
        post_id: '3',
    },
    {
        comment: 'just black for me. love that bitter taste.',
        user_id: '2', 
        post_id: '3',
    },
    {
        comment: 'same here!',
        user_id: '1', 
        post_id: '3',
    },
    
]);

module.exports = seedComments;