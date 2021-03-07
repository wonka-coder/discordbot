const discord = require("discord.js");
const { message } = require("noblox.js");

const MIN_INTERVAL = 3 * 1000;

exports.run = async client  => { 
    console.log(`${client.user.username} is online`)
    client.user.setActivity("Den Helder", {type: "WATCHING"});
var logEmbed = new discord.MessageEmbed()
.setTitle("ready! | Den helder")
.setColor("#ff0000")
.setDescription(`ready!`)
.setTimestamp(); 
}
