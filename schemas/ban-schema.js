const mongoose = require('mongoose')

const banSchema = mongoose.Schema({
  guildId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  ban: {
    type: [Object],
    required: true,
  },
})

module.exports = mongoose.model('bans', banSchema)
