const discord = require("discord.js")

exports.run = async (client, message, messageDelete ) => {
    var logEmbed = new discord.MessageEmbed()
    .setTitle("messages log | Den helder")
    .setColor("#ff0000")
    .setDescription(`message deleted: **${message.cleanContent}** \n \n  message of: **${message.author}** \n \n message deleted from: **${message.channel}**`)
    .setTimestamp();
    var logsChannel = client.channels.cache.get("801837510820757514")
    logsChannel.send(logEmbed);

    console.log(`bericht verwijderd ${message}`)
}
