const discord = require("discord.js");


const client = new discord.Client();


const mongo = require('.././mongo')
const kickSchema = require('.././schemas/kick-schema')
module.exports.run = async (client, message, args) => {
  if(message && message.deletable) message.delete().catch(e => {});

    if (!message.member.roles.cache.some(role => role.name === 'MODERATOR PERM')) return message.react("❌"), message.reply("you don't have the role:'MODERATOR PERM'!").then (message =>{
      message.delete({ timeout: 10000 })}), message.delete({ timeout: 3000 });

      if (!args[0]) return message.react("❌"), message.reply("no user specified!").then (message =>{
          message.delete({ timeout: 10000 })}), message.delete({ timeout: 3000 });



          const target = message.mentions.users.first()
              if (!target) {
                message.reply('Please specify someone to kick')
                return
              }

                  args.shift()
                  target.send("You are kicked out of ***Dutch Defence Corporation*** | Discord invite link :  ")
                  target.kick()
                            .then(() => console.log(`Kicked ${member.displayName}`))
                            .catch(console.error);
              const guildId = message.guild.id
              const userId = target.id
              const reason = args.slice(1).join(' ')

              const kick = {
                author: message.member.user.tag,
                timestamp: new Date().getTime(),
                reason,
              }

              await mongo().then(async (mongoose) => {
                try {
                  await kickSchema.findOneAndUpdate(
                    {
                      guildId,
                      userId,
                    },
                    {
                      guildId,
                      userId,
                      $push: {
                        kicks: kick,
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
  exports.config = {
    aliases: ["KICK", "KICK_MEMBER"]
  }
