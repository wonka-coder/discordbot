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



          const target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

              if (!target) {
                message.reply('Please specify someone to kick')
                return
              }

                  args.shift()
              const guildId = message.guild.id
              const userId = target.id
              const reason = args.slice(1).join(' ')
              const kicked = {
                author: message.member.user.tag,
                timestamp: new Date().getTime(),
                reason,
              }
              if (!target) return message.reply("user cannot be found!");

              let filter = m => m.author.id === message.author.id
              message.channel.send(`Do you want ${target} kick the server for ${reason} \`YES\` / \`NO\``).then(() => {
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 30000,
                  errors: ['time']
                })
                .then(message => {
            message = message.first()
              if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
                target.kick(target, { dagen:1, Reden: reason}).catch(err => {
                  if (err) return message.channel.send(`error : ${err}`);
                });

           message.reply("Successfully");
         } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
            message.reply("kicked canceled");
         } else {
           message.channel.send(`Command stopped`)
         }
       })
       .catch(collected => {
           message.channel.send('time over');
       });

   })

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
                        kick: kicked,
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
