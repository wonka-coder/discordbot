const discord = require("discord.js");


const client = new discord.Client();

module.exports.run = async (client, message, args) => {

    if(message && message.deletable) message.delete().catch(e => {});

    if (!message.member.roles.cache.some(role => role.name === 'TRIAL MODERATOR PERM')) return message.react("❌"), message.reply("you don't have the role:: ``TRIAL MODERATOR PERM``!").then (message =>{
      message.delete({ timeout: 10000 })}), message.delete({ timeout: 3000 });


    var gameUrl = "https://www.roblox.com/games/6285403014/Den-Helder-Marinebase?refPageId=609a99e0-1575-42b5-afb4-c917fdc34c86";
    var thum = "https://imgur.com/lCrEqtv.png";

    let embed = new discord.MessageEmbed()
    .setTitle(`DDC | Start up!`)
    .setThumbnail(`${thum}`)
    .setURL(`${gameUrl}`)
    .setColor('RANDOM')
    .setDescription(`Hello people! The server is open! Come & join the server. Make some good roleplays! This Server Start Up is run by ${message.author}! Press "DDC | Start up!" so you can enter the game or press on the link!`);
    message.channel.send(embed).then(message.channel.send(`@here, ${gameUrl}`))
  }

module.exports.help = {
    name: "ticket"
}
