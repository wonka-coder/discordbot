const discord = require("discord.js")

exports.run = async (client, message, member ) => {

  var embed = new discord.MessageEmbed()
      .setColor("#ff0000")
      .setTitle("messages log | DDC")
      .setFooter("DDC | Logs")
      .setTimestamp()
      .setDescription(`** join members:**${message.author}`);
      var channel = message.member.channel.guild.cache.get("801837510820757514");

      if (!channel) return;

      channel.send(embed);

    myGuild = client.guilds.cache.get("796297446786334720");
    let memberCount = myGuild.memberCount;
    setInterval(function () {
       var memberCountChannel = client.channels.cache.get("817375067012202496");
       memberCountChannel.setName(`👤| ${memberCount} members`);
    }, 10);
}
