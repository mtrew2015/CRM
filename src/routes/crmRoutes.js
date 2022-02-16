const routes = (app) => {
  app
    .route('/contact')
    .get((req, res) => {
      res.send('GET Request successful in contact route');
    })

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
