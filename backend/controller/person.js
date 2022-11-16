const db = require('../models');
const Person = db.person;

exports.create = (req, res) => {
  if (!req.body.firstName) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const person = new Person(req.body);
  person
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || 'Some error occurred while creating a person'
      });
    });
};


exports.findAll = (req, res) => {
  Person.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || 'Some error occurred while getting a person.'
      });
    });
};

exports.findOne = (req, res) => {
  const _id = req.params._id;
  Person.find({ _id: _id })
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found in about' + _id });
      else res.send(data[0]);
    })
    .catch((error) => {
      res.status(500).send({
        message: 'Error retrieving aboutId' + _id,
        error: error
      });
    });
};

