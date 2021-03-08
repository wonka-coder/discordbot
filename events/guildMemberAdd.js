const discord = require("discord.js")

exports.run = async (client, message, guildMemberAdd ) => { 
user.send("hoi")
    myGuild = client.guilds.cache.get("796297446786334720");
    let memberCount = myGuild.memberCount;
    setInterval(function () {
       var memberCountChannel = client.channels.cache.get("817375067012202496");
       memberCountChannel.setName(`${memberCount} members!`);
    }, 1000);
}