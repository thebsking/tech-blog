// declare dependencies
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers')
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;

const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'My Super secret',
    cookie: {maxAge: 300000},
    resave: false,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
});