import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);
  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getAllContacts = (req, res) => {
  Contact.find({}, (err, contacts) => {
    if (err) {
      res.send(err);
    }
    res.json(contacts);
  });
};

export const getContact = (req, res) => {
    Contact.findById(req.params.contactID, (err, contacts) => {
      if (err) {
        res.send(err);
      }
      res.json(contacts);
    });
  };
