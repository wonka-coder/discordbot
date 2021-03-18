const mongoose = require('mongoose')

const mongoPath =
'mongodb+srv://Wonkatje:AsECekAJVl3FeSOf@bot.k7div.mongodb.net/data?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}
