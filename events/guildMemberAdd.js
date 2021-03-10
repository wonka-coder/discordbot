const discord = require("discord.js")

const client = new discord.Client();

exports.run = async (client, message, member, author ) => {

  var embed = new discord.MessageEmbed()
    myGuild = client.guilds.cache.get("796297446786334720");
    let memberCount = myGuild.memberCount;
    setInterval(function () {
       var memberCountChannel = client.channels.cache.get("817375067012202496");
       memberCountChannel.setName(`👤| ${memberCount} members`);
    }, 10);
}
