const discord = require("discord.js");
const { message } = require("noblox.js");

const MIN_INTERVAL = 3 * 1000;

exports.run = async client  => {
    console.log(`${client.user.username} is online`)
    client.user.setActivity("Dutch Defence Corporation", {type: "WATCHING"});
var logEmbed = new discord.MessageEmbed()
.setTitle("Restart | Den helder")
.setColor("#50a832")
.setDescription(`Restart`)
.setTimestamp();
var logsChannel = client.channels.cache.get("801837510820757514")
logsChannel.send(logEmbed);
myGuild = client.guilds.cache.get("796297446786334720");
let memberCount = myGuild.memberCount;
setInterval(function () {
   var memberCountChannel = client.channels.cache.get("817375067012202496");
   memberCountChannel.setName(`👤| ${memberCount} members`);
}, 1000);
}
