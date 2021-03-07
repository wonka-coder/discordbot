const discord = require("discord.js")

exports.run = async (client, message, messageDelete ) => { 
    var logEmbed = new discord.MessageEmbed()
    .setTitle("Berichten log | Den helder")
    .setColor("#ff0000")
    .setDescription(`bericht verwijderd: **${message.cleanContent}** \n \n  bericht van: **${message.author}** \n \n in kanaal : **${message.channel}**`)
    .setTimestamp(); 
    var logsChannel = client.channels.cache.get("801837510820757514")
    logsChannel.send(logEmbed);

    console.log(`bericht verwijderd ${message}`)
}
