const discord = require("discord.js")

const client = new discord.Client();

exports.run = async (client, message, member, author, guild ) => {
  var roleMember = member.guild.roles.cache.find(roleMember => roleMember.name === "Member");
  member.roles.add(roleMember);
    myGuild = client.guilds.cache.get("796297446786334720");
    let memberCount = myGuild.memberCount;
    setInterval(function () {
       var memberCountChannel = client.channels.cache.get("817375067012202496");
       memberCountChannel.setName(`👤| ${memberCount} members`);
    }, 10);
}
