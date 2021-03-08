const discord = require("discord.js")

exports.run = async (client, message, guildMemberAdd ) => { 

    var dmembed = new discord.MessageEmbed()
    .setTitle("Welkom in: ***Dutch Defence Corporation***!")
    .setColor("#ff0000")
    .setThumbnail(kickUser.user.displayAvatarURL)
    .setFooter(message.member.displayName, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`Welkom!! je kan je rol krijgen door naar het kanaal **verify** te gaan & dan op het '✅' te drukken! veel plezier!`);
    user.send(dmembed)   

    var logEmbed = new discord.MessageEmbed()
    .setTitle("member joined | DDC ")
    .setColor("#50a832")
    .setDescription(`new member:${message.author} `)
    .setTimestamp(); 
    var logsChannel = client.channels.cache.get("801837510820757514")
}