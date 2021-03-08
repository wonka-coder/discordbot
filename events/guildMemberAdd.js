const discord = require("discord.js")

exports.run = async (client, message, guildMemberAdd ) => { 
    var logEmbed = new discord.MessageEmbed()
    .setTitle("member joined | DDC ")
    .setColor("#50a832")
    .setDescription(`new member:${message.author} `)
    .setTimestamp(); 
    var logsChannel = client.channels.cache.get("801837510820757514")
    logsChannel.send(logEmbed);
    myGuild = client.guilds.cache.get("796297446786334720");
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get("817375067012202496");
    memberCountChannel.setName(""+memberCount+ " Members")
}