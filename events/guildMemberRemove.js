const discord = require("discord.js")

exports.run = async (client, message ) => { 
    const guild = client.guilds.cache.get("796297446786334720");
    setInterval(function () {
       var memberCount = guild.members.filter(member => !member.user.bot).size;  
       var memberCountChannel = client.channels.get("817375067012202496");
       memberCountChannel.setName(`${guild.name} has ${memberCount} members!`);
    }, 1000);
}