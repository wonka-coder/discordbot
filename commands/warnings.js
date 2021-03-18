const discord = require("discord.js");


const client = new discord.Client();


const mongo = require('.././mongo')
const warnSchema = require('.././schemas/warn-schema')
module.exports.run = async (client, message, args) => {
  const target = message.mentions.users.first()
   if (!target) {
     message.reply('Please specify a user to load the warnings for.')
     return
   }

   const guildId = message.guild.id
   const userId = target.id

   await mongo().then(async (mongoose) => {
     try {
       const results = await warnSchema.findOne({
         guildId,
         userId,
       })

       var reply = new discord.MessageEmbed()
       .setTitle(`Previous warnings of <@${userId}>`)
       .setDescription(for (const warning of results.warnings) {const { author, timestamp, reason } = warning `${author} on ${new Date(
           timestamp
         ).toLocaleDateString()} for "${reason}"\n\n``)


       message.reply(reply)
     } finally {
       mongoose.connection.close()
     }
   })
 },


module.exports.help = {
    name: "warn"
}
