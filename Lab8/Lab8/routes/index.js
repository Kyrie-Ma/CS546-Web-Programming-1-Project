const searchshowRoutes = require('./searchshows');
const showRoutes = require('./show');
const path = require('path');

const constructorMethod = (app) => {
  app.use('/searchshows', searchshowRoutes);
  app.use('/show', showRoutes);
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('static/about.html'));
  });

  app.use('*', (req, res) => {
    res.status(404).json({error: "404 Not Found"});
  });
};

module.exports = constructorMethod;