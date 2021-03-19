const discord = require("discord.js");


const client = new discord.Client();


const mongo = require('.././mongo')
const banSchema = require('.././schemas/ban-schema')
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
              const banned = {
                author: message.member.user.tag,
                timestamp: new Date().getTime(),
                reason,
              }
              if (!target) return message.reply("user cannot be found!");
              var embed = new discord.MessageEmbed()
    .setColor("#ff0000")
    .setThumbnail("https://imgur.com/lCrEqtv")
    .setFooter("BANNED LOGS")
    .setTimestamp()
    .setDescription(`** banned:** ${target} (${target.id})
    **banned by:** ${message.author}
    **reason: ** ${reason}`);
    var channel = message.member.guild.channels.cache.get("801837510820757514");

    if (!channel) return;

    channel.send("Successfully banned!");

    var dmembed = new discord.MessageEmbed()
 .setTitle("You have been banned from ***Dutch Defence Corporation***!")
 .setColor("#ff0000")
 .setThumbnail(("https://imgur.com/lCrEqtv")
 .setFooter(`${message.member.displayName}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
 .setTimestamp()
 .setDescription(` you have been banned for the following reason: **${reason}** \n You can get an unban by clicking the link below! \n *https://forms.gle/souGHuLT83G1URVu5*`);

   let filter = m => m.author.id === message.author.id
   message.channel.send(`Do you want ${target} banned from the server for ${reason} \`YES\` / \`NO\``).then(() => {
     message.channel.awaitMessages(filter, {
         max: 1,
         time: 30000,
         errors: ['time']
       })
       .then(message => {
         message = message.first()
         if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
           target.send(dmembed).then(() =>
           target.ban(target, { dagen:1, Reden: reason})).catch(err => {
             if (err) return message.channel.send(`error : ${err}`);
           });
           message.reply(embed);
         } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
            message.reply("ban canceled!");
         } else {
           message.channel.send(`command stopped`)
         }
       })
       .catch(collected => {
           message.channel.send('time over');
       });

   })
              await mongo().then(async (mongoose) => {
                try {
                  await banSchema.findOneAndUpdate(
                    {
                      guildId,
                      userId,
                    },
                    {
                      guildId,
                      userId,
                      $push: {
                        bans: banned,
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
    aliases: ["BAN", "BAN_MEMBER"]
  }
