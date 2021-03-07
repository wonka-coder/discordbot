const discord = require("discord.js")

exports.run = async (client, message, user, reaction, emoji ) => { 
if (reaction.message.partial) await reaction.message.fetch();
if (message.partial) await reaction.fetch();


if (user.client) return;
if (!reaction.message.guild) return;

if (reaction.message.channel.id === '798664612878876702') {
  if (reaction.emoji.name === '✅'){
    await reaction.message.guild.members.cache.get(userid).roles.add('798533744800694302')
  }
}
if (user) return message.reply("Kan de gebruiker niet vinden.");
     
var dmembed = new discord.MessageEmbed()
.setTitle("welkom!")
.setColor("#ff0000")
.setThumbnail(user.user.displayAvatarURL)
.setFooter(message.member.displayName, message.author.displayAvatarURL)
.setTimestamp()
.setDescription(`welkom in ***Dutch Defence Corporation***! `);
user.send(dmembed)   
}