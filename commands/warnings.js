const discord = require("discord.js");


const client = new discord.Client();


const mongo = require('.././mongo')
const kickSchema = require('.././schemas/kick-schema')
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

       await mongo().then(async (mongoose) => {
         try {
           const results2 = await kickSchema.findOne({
             guildId,
             userId,
           })

       let reply = `Previous warnings for <@${userId}>:\n\n`

             for (const warning of results.warnings) {
               const { author, timestamp, reason } = warning

               reply += `By ${author} on ${new Date(
                 timestamp
               ).toLocaleDateString()} for "${reason}"\n\n`
             }
    message.reply(reply)

    let reply2 = `Previous kicks of <@${userId}>:\n\n`

          for (const kick of results2.kicks) {
            const { author, timestamp, reason } = warning

            reply += `By ${author} on ${new Date(
              timestamp
            ).toLocaleDateString()} for "${reason}"\n\n`
          }
 message.reply(reply2)

     } finally {
       mongoose.connection.close()
     }
   })
 });
}



module.exports.help = {
    name: "warn"
}
