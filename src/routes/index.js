const project = require('./project.js');
const category = require('./category.js');

module.exports = function (express) {
    const app = express();

    app.use('/project', project(express));
    app.use('/category', category(express));

    return app;
}
