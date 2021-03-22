const discord = require("discord.js");


const client = new discord.Client();

module.exports.run = async (client, message, args) => {

    if(message && message.deletable) message.delete().catch(e => {});

    var gameUrl = "https://www.roblox.com/games/6285403014/Den-Helder-Marinebase?refPageId=609a99e0-1575-42b5-afb4-c917fdc34c86";
    let embed = new discord.MessageEmbed()
    .setTitle(`DDC | Start up!`)
    .setURL(`${gameUrl}`)
    .setColor('RANDOM')
    .setDescription(`Hello people! The server is open! Come & join the server. Make some good roleplays! This Server Start Up is run by ${message.author}!`);
    message.channel.send(embed).then(message.channel.send("@everyone"))
  }

module.exports.help = {
    name: "ticket"
}
