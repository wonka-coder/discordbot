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
user.send("hoi")
}