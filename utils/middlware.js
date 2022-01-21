module.exports = (app) => {
  var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
  };
  app.use(allowCrossDomain);
  app.use(require('../routes/get_details_route'))
  app.use(require('../routes/postDetails'))
  app.use(require('../routes/update-details'))
  app.use(require('../routes/delete_details_route'))



}