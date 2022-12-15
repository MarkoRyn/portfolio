const mongoose = require('mongoose')

const cvSchema = new mongoose.Schema({
  education: {
    type: Array({
      title: String,
      school: String,
      degree: String,
      startDate: Date,
      endDate: Date,
      result: String,
      description: String,
    }),
    require: true,
  },
  experience: {
    type: Array({
      title: String,
      company: String,
      location: String,
      employmentType: String,
      startDate: Date,
      endDate: Date,
      description: String,
    }),
    require: true,
  },
  skill: {
    type: Array({
      ide: [String],
      frontend: [String],
      backend: [String],
      software: [String],
    }),
  },
  softSkill: { type: [String] },
  interest: { type: [String] },
  language: {
    type: Array({
      title: String,
      level: Number,
    }),
  },
})

module.exports = mongoose.model('Cv', cvSchema)
