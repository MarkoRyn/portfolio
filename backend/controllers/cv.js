const Post = require('../models/Cv')
const User = require('../models/User')
const fs = require('fs')
const Cv = require('../models/Cv')

exports.createCv = (req, res, next) => {
  if (req.auth.isAdmin === 1 || req.body.editerId === req.auth.userId) {
    const cvObject = req.body
    const cv = new Cv({
      ...cvObject,
    })
    cv.save()
      .then(() => res.status(201).json({ message: 'Curriculum Vitae saved !' }))
      .catch((error) => res.status(400).json({ error }))
  } else {
    res.status(401).json({ message: 'Not authorized' })
  }
}

exports.getCv = (req, res, next) => {
  Cv.find()
    .then((cv) => {
      res.status(200).json(cv)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

exports.editCv = (req, res, next) => {
  if (req.auth.isAdmin === 1 || req.body.editerId === req.auth.userId) {
    Cv.findOne({ _id: req.params.id }).then
    const cvObject = req.body
    Cv.updateOne({ _id: req.params.id }, { ...cvObject, _id: req.params.id })
      .then(() =>
        res.status(200).json({ message: 'Curriculum Vitae is modified' })
      )
      .catch((error) => res.status(401).json({ error }))
  } else {
    res.status(401).json({ message: 'Not authorized' })
  }
}

// exports.deleteCv = (req, res, next) => {
//   if (req.auth.isAdmin === 1 || req.body.editerId === req.auth.userId) {
//     Cv.deleteOne({ _id: req.params.id })
//             .then(() => {
//               res.status(200).json({ message: 'Curriculum Vitae is deleted !' })
//             })
//             .catch((error) =>
//               res.status(401).json({ message: 'Curriculum Vitae is NOT deleted !' })
//             )
//   } else {
//     res.status(401).json({ message: 'Not authorized' })
//   }
// }

// to create, edit or delete an EXPERIENCE
exports.createExperience = async (req, res) => {
  Cv.findOne({ _id: req.params.id })
    .then((cv) => {
      Cv.updateOne({ _id: req.params.id }, { $push: { experience: req.body } })
        .then(() => res.status(201).json({ message: 'Experience saved !' }))
        .catch((error) => res.status(404).json({ error }))
    })
    .catch((error) => res.status(500).json({ error }))
}

exports.editExperience = async (req, res) => {
  Cv.findOne({ _id: req.params.id })
    .then((cv) => {
      Cv.updateOne(
        { _id: req.params.id, 'experience._id': req.body.experienceId },
        { $set: { 'experience.$.text': req.body.text } }
      )
        .then(() => res.status(200).json({ message: 'Experience updated !' }))
        .catch((error) => res.status(404).json({ error }))
    })
    .catch((error) => res.status(500).json({ error }))
}

exports.deleteExperience = async (req, res) => {
  Cv.findOne({ _id: req.params.id })
    .then((cv) => {
      Cv.updateOne(
        { _id: req.params.id },
        { $pull: { experience: { _id: req.body.experienceId } } }
      )
        .then(() => res.status(201).json({ message: 'Experience delete !' }))
        .catch((error) => res.status(404).json({ error }))
    })
    .catch((error) => res.status(500).json({ error }))
}
