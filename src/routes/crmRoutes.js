import { addNewContact, getAllContacts, getContact, updateContact } from '../controllers/crmController';

const routes = (app) => {
  app
    .route('/contact')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      // calling next to pass to next function
      next();
    }, getAllContacts)

    .post(addNewContact);

  app
    .route('/contact/:contactID')
    .get(getContact)
    .put(updateContact)
    .delete((req, res) => {
      res.send('Delete Req successful');
    });
};

export default routes;
