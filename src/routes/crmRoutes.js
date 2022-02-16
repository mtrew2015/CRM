const routes = (app) => {
  app
    .route('/contact')
    .get(
      (req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        // calling next to pass to next function
        next();
      },
      (req, res, next) => {
        res.send('GET Request successful in contact route');
      }
    )

    .post((req, res) => {
      res.send('GET Request successful in contact route');
    });

  app
    .route('/contact/:contactID')
    .put((req, res) => {
      res.send('Put req successful');
    })
    .delete((req, res) => {
      res.send('Delete Req successful');
    });
};

export default routes;
