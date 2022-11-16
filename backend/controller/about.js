const db = require('../models');
const About = db.about;

exports.create = (req, res) => {
    if (!req.body.firstName) {
      res.status(400).send({ message: 'Content can not be empty!' });
      return;
    }
  
    const about = new About(req.body);
    about
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
  About.find({})
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
    About.find({ _id: _id })
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

  exports.updateAbout = (req, res) => {
    try {
      const _id = req.params._id;
      if (!_id) {
        res.status(400).send({ message: 'Invalid username' });
        return;
      }
  
      About.findOne({ _id: _id }, function (error, about) {
        about.save(function (error) {
          if (error) {
            res.status(500).json(error || 'Some error occurred while updating the person.');
          } else {
            res.status(204).send();
          }
        });
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };