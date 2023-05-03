const peopleRoutes = require('./userApi');
const workRoutes = require('./userApi');

const constructorMethod = (app) => {
    app.use('/', peopleRoutes);
  app.use('/', workRoutes);

  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
};

module.exports = constructorMethod;