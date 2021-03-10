const discord = require("discord.js")

const client = new discord.Client();

exports.run = async (client, message, member, author ) => {
  const channel = message.member.guild.channels.cache.get("798533795711156264");

if (!channel) return;

channel.send(`Welcome to the server, ${member}`);
    myGuild = client.guilds.cache.get("796297446786334720");
    let memberCount = myGuild.memberCount;
    setInterval(function () {
       var memberCountChannel = client.channels.cache.get("817375067012202496");
       memberCountChannel.setName(`👤| ${memberCount} members`);
    }, 10);
}
