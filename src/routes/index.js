const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    app.use('/me', meRouter);

    app.use('/courses', coursesRouter);
}

module.exports = route;
