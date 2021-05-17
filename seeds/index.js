const seedUsers = require('./userSeed');
const seedPosts = require('./postSeed');
const seedComments = require('./commentSeed');

const sequelize = require('../config/connection');

const runSeed = async () => {
    await sequelize.sync({force: true});
    console.log('--Synced--\n')

    await seedUsers();
    console.log('--users seeded--\n');

    await seedPosts();
    console.log('--posts seeded--\n');

    await seedComments();
    console.log('--comments seeded--');

    process.exit(0);
};

runSeed();