const discord = require("discord.js");


const client = new discord.Client();

exports.run = (client, message, args) => {
  if(message && message.deletable) message.delete().catch(e => {});

    if (!message.member.roles.cache.some(role => role.name === 'MODERATOR PERM')) return message.react("❌"), message.reply("you don't have the role:'MODERATOR PERM'!").then (message =>{
      message.delete({ timeout: 10000 })}), message.delete({ timeout: 3000 });

      if (!args[0]) return message.react("❌"), message.reply("no user specified").then (message =>{
          message.delete({ timeout: 10000 })}), message.delete({ timeout: 3000 });



    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(2).join(" ");

    if (!kickUser) return message.reply("user cannot be found!");

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setThumbnail(kickUser.user.displayAvatarURL)
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**kicked user:** ${kickUser} (${kickUser.id})
        **kicked by:** ${message.author}
        **reason: ** ${reason}`);
        var channel = message.member.guild.channels.cache.get("801837510820757514");

        if (!channel) return;

        channel.send(embed);
        var dmembed = new discord.MessageEmbed()
        .setTitle("You've been kicked out ***Dutch Defence Corporation***!")
        .setColor("#ff0000")
        .setThumbnail(kickUser.user.displayAvatarURL)
        .setFooter("his message was sent automatically because you received a kick in Dutch Defence Corporation. You can block the bot if you wish to stop receiving these messages ")
        .setTimestamp()
        .setDescription(`you got kicked for the following reason: **${reason}** \n You are free to join forever! this can be done by copying this link! *https://discord.gg/kr7Z7v7Nwm* `);

    let filter = m => m.author.id === message.author.id
    message.channel.send(`Do you want ${kickUser} kick the server for ${reason} \`YES\` / \`NO\``).then(() => {
      message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
            kickUser.send(dmembed).then(() =>
            kickUser.kick(kickUser, { dagen:1, Reden: reason})).catch(err => {
              if (err) return message.channel.send(`error : ${err}`);
            });

            message.reply(embed);
          } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
             message.reply("kicked canceled");
          } else {
            message.channel.send(`Command stopped`)
          }
        })
        .catch(collected => {
            message.channel.send('time over');
        });

    })
}
  exports.config = {
    aliases: ["KICK", "KICK_MEMBER"]
  }
