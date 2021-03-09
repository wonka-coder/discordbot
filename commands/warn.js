const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) => {
    message.delete(10);


    if (!message.member.roles.cache.some(role => role.name === 'MODERATOR PERM')) return message.react("❌"), message.reply("you don't have the role:'MODERATOR PERM' !").then (message =>{
        message.delete({ timeout: 10000 })}), message.delete({ timeout: 3000 });

      if (!args[0]) return message.react("❌"), message.reply("no user specified").then (message =>{
          message.delete({ timeout: 10000 })}), message.delete({ timeout: 3000 });


      var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      var reason = args.slice(2).join(" ");

      if (!warnUser) return message.reply("user cannot be found!");

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });
    var embed = new discord.MessageEmbed()
        .setTitle("User warned | DDC")
        .setColor("#ff8000")
        .setFooter("warn embed | Dutch Defence Corporation ")
        .setTimestamp()
        .setDescription(`You have been warned! Check the information below! check your DMs for the reason!  \n \n **warned user:** ${warnUser}`)
        .addField("**number of warnings:**", warns[warnUser.id].warns);
        message.channel.send(embed)

        var dmembed = new discord.MessageEmbed()
            .setTitle("you have been warned! | DDC")
            .setColor("#ff8000")
            .setFooter("warn embed | Dutch Defence Corporation ")
            .setTimestamp()
            .setDescription(`You have been warned! \n \n **warned user:** ${warnUser} \n \n **reason:** ${reason}  `)
            .addField("**number of warnings:**", warns[warnUser.id].warns);
            warnUser.send(dmembed);

    var logs = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**warned user:** ${warnUser} \n **reason:** ${reason} \n **warned by:** ${message.author}`)
        .addField("**number of warnings:**", warns[warnUser.id].warns);

    var channel = message.member.guild.channels.cache.get("801837510820757514");

    if (!channel) return;

    channel.send(logs);
 if (warns[warnUser.id].warns == 6) {
        message.guild.member(warnUser).ban(reason);
        var banembed = new discord.MessageEmbed()
        .setTitle("banned logs | DDC")
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`${warnUser} has been banned from ***Dutch Defence Corporation*** for having too many warns!`)
        var logsChannel = client.channels.cache.get("801837510820757514")
logsChannel.send(banembed);
    }
}

module.exports.help = {
    name: "warn"
}
