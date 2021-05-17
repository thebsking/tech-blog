const {Post} = require('../models')

const postSeed = () => Post.bulkCreate([
    {
        title: 'My First Post',
        content: 'This is my first blog post! Thank you so much for checking out this site. I hope you enjoy reading. ',
        user_id: '1'
    },
    {
        title: 'Handlebars',
        content: `Using Handlebars is really cool! It's super easy to use all of the html tags that you already know but now you get to use logic like if/else statements & for loops. Highly recommend this framework for anyone getting serious about development`,
        user_id: '2'
    },
    {
        title: 'Coffee',
        content: 'I cannot imagine making it through the day without coffee. It is really nice to sit down at the keyboard with a hot cup of joe to keep you going. I honestly do not know how anyone could code without it.',
        user_id: '3'
    },
    {
        title: 'What the... is the Internet?',
        content: 'Can anyone really explain this? What is it? How does it work? It seems like one of the great mysteries of life. Any info would be greatly appreciated.',
        user_id: '2'
    },
    {
        title: 'My First Post',
        content: 'This is my first blog post! Thank you so much for checking out this site. I hope you enjoy reading. ',
        user_id: '3'
    }
]);

module.exports = postSeed;