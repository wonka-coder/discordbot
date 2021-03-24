const discord = require("discord.js");


const client = new discord.Client();


const mongo = require('.././mongo')
const warnSchema = require('.././schemas/warn-schema')


module.exports.run = async (client, message, args) => {
  const target = message.mentions.users.first()
      if (!target) {
        message.reply('Please specify someone to warn.')
        return
      }

          args.shift()
          message.reply("Successfully!")
          message.member.roles.add(message.guild.roles.cache.find(r => r.name == "Warned"))
          message.member.roles.remove(message.guild.roles.cache.find(r => r.name == "Member"))
      const guildId = message.guild.id
      const userId = target.id
      const reason = args.slice(1).join(' ')
      target.send(`You have been warned for ${reason}!  `)
      const warning = {
        author: message.member.user.tag,
        timestamp: new Date().getTime(),
        reason,
      }

      await mongo().then(async (mongoose) => {
        try {
          await warnSchema.findOneAndUpdate(
            {
              guildId,
              userId,
            },
            {
              guildId,
              userId,
              $push: {
                warnings: warning,
              },
            },
            {
              upsert: true,
            }
          )
        } finally {
          mongoose.connection.close()
        }
      })
    },


module.exports.help = {
    name: "warn"
}
