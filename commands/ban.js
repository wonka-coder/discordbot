const discord = require("discord.js");


const client = new discord.Client();

exports.run = (client, message, args) => {

  if (!message.member.roles.cache.some(role => role.name === 'SUPER ADMIN PERM')) return message.react("❌"), message.reply("je hebt de rol: ``SUPER ADMIN PERM`` niet!").then (message =>{
    message.delete({ timeout: 10000 })}), message.delete({ timeout: 3000 });

    if (!args[0]) return message.react("❌"), message.reply("Geen gebruiker opgegeven.").then (message =>{
      message.delete({ timeout: 10000 })}), message.delete({ timeout: 3000 });


    var User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

    var reason = args.slice(2).join(" ");

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setThumbnail(User.user.displayAvatarURL)
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`** Gekickt:** ${User} (${User.id})
        **Gekickt door:** ${message.author}
        **Redenen: ** ${reason}`);

        var dmembed = new discord.MessageEmbed()
        .setTitle("Je bent verbannen uit ***Dutch Defence Corporation***!")
        .setColor("#ff0000")
        .setThumbnail(User.user.displayAvatarURL)
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(` je bent voor de volgende reden verbannen: **${reason}** \n Je kan een unban krijgen door op de het onderstaande linkje te drukken! \n *https://forms.gle/souGHuLT83G1URVu5*`);

          banMember.send(dmembed).then(() =>
          banMember.ban()

    let filter = m => m.author.id === message.author.id
    message.channel.send(`Wil je ${User} verbannen van de server voor ${reason} \`YES\` / \`NO\``).then(() => {
      message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
            User.ban().catch(err => {
                if (err) return message.channel.send(`er is een fout opgetreed! error: **${err}** `);
            });

            message.reply(embed);
          } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
             message.reply("kick geanuleerd!");
          } else {
            message.channel.send(`Command gecanceld. `)
          }
        })
        .catch(collected => {
            message.channel.send('command verlopen');
        });

    })
}
  exports.config = {
    aliases: ["BAN", "BAN_MEMBER"]
  }
