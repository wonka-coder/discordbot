const discord = require("discord.js")

exports.run = async (client, message, member ) => { 
    var logEmbed = new discord.MessageEmbed()
.setTitle("New memeber | DDC")
.setColor("#50a832")
.setDescription(`member: ${user.username}`)
.setTimestamp(); 
var logsChannel = client.channels.cache.get("801837510820757514")
logsChannel.send(logEmbed);
    myGuild = client.guilds.cache.get("796297446786334720");
    let memberCount = myGuild.memberCount;
    setInterval(function () {
       var memberCountChannel = client.channels.cache.get("817375067012202496");
       memberCountChannel.setName(`${memberCount} members!`);
    }, 1000);
}