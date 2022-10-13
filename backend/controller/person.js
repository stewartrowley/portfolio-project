const db = require('../models');
const Person = db.person;



const apiKey =
  'eKAftMkhjVaWuP2dRICxFnv3uAKZSNhwPoVoV1QFYWSPmaqdDwQju8DbdGA1sbIq';

exports.create = (req, res) => {
  // Validate request
  if (!req.body.firstName) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  // Create a Temple
  const person = new Person({
    _id: req.body._id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    career: req.body.career,
    degree: req.body.degree,
    location: req.body.location,
  });

  // Save Temple in the database
  person
    .save(person)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Temple.',
      });
    });
};

exports.findAll = (req, res) => {

  if (apiKey) {
    Person.find(
    )
      .then((data) => {
        res.send(data);
        console.log(data)
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while retrieving temples.',
        });
      });
  } else {
    res.send('Invalid apiKey, please read the documentation.');
  }
};


exports.findOne = (req, res) => {
  const person_id = req.params.person_id;
  if (apiKey) {
    Person.find({ _id: person_id })
      .then((data) => {
        if (!data)
          res
            .status(404)
            .send({ message: 'Not found Person with id ' + person_id });
        else res.send(data[0]);
        console.log(data)
      })
      .catch((err) => {
        res.status(500).send({
          message: 'Error retrieving Person with person_id=' + person_id,
        });
      });
  } else {
    res.send('Invalid apiKey, please read the documentation.');
  }
};

// // Update a Temple by the id in the request
// exports.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: 'Data to update can not be empty!',
//     });
//   }

//   const id = req.params.id;

//   Temple.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update Temple with id=${id}. Maybe Temple was not found!`,
//         });
//       } else res.send({ message: 'Temple was updated successfully.' });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: 'Error updating Temple with id=' + id,
//       });
//     });
// };

// // Delete a Temple with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Temple.findByIdAndRemove(id)
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete Temple with id=${id}. Maybe Temple was not found!`,
//         });
//       } else {
//         res.send({
//           message: 'Temple was deleted successfully!',
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: 'Could not delete Temple with id=' + id,
//       });
//     });
// };

// // Delete all Temples from the database.
// exports.deleteAll = (req, res) => {
//   Temple.deleteMany({})
//     .then((data) => {
//       res.send({
//         message: `${data.deletedCount} Temples were deleted successfully!`,
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || 'Some error occurred while removing all temple.',
//       });
//     });
// };

// // Find all published Temples
// exports.findAllPublished = (req, res) => {
//   Temple.find({ published: true })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || 'Some error occurred while retrieving temple.',
//       });
//     });
// };