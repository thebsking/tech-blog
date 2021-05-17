const { User } = require('../models');

const seedUsers = () => User.bulkCreate([
    {
        name: 'Brandon',
        username: 'bsking',
        password: '123456789',
    },
    {
        name: 'Kennerly',
        username: 'kennWho',
        password: '123456789',
    },
    {
        name: 'Chris',
        username: 'linus2787',
        password: '123456789',
    },
    {
        name: 'Brian',
        username: 'cantrelate121',
        password: '123456789',
    },
]);

module.exports = seedUsers;