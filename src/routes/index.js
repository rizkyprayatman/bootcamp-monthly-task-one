const auth = require('./auth.js');
const category = require('./category.js');
const project = require('./project.js');

module.exports = function(express) {
    const app = express();
  
    app.use('/login', auth(express));
    app.use('/category', category(express));
    app.use('/project', project(express));
  
    return app;
}

