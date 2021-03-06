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

       let reply = `Previous warnings for <@${userId}>:\n\n`

       for (const warnings of results.warnings) {
         const { author, timestamp, reason } = warnings

         reply += `By ${author} on ${new Date(
           timestamp
         ).toLocaleDateString()} for "${reason}"\n\n`
       }

       message.reply(reply)
     } finally {
       mongoose.connection.close()
     }
   })
 };
