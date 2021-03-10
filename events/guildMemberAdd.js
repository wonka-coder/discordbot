const discord = require("discord.js")

const client = new discord.Client();

exports.run = async (client, message, member, author ) => {

  var logs = new discord.MessageEmbed()
      .setColor("#ffbb00")
      .setFooter("logs")
      .setTimestamp()
      .setDescription(`new memeber ${member.displayName}`)
      .addField("**number of warnings:**", warns[warnUser.id].warns);

  var channel = message.member.guild.channels.cache.get("801837510820757514");

  if (!channel) return;

  channel.send(logs);
  var embed = new discord.MessageEmbed()
    myGuild = client.guilds.cache.get("796297446786334720");
    let memberCount = myGuild.memberCount;
    setInterval(function () {
       var memberCountChannel = client.channels.cache.get("817375067012202496");
       memberCountChannel.setName(`👤| ${memberCount} members`);
    }, 10);
}
