const discord = require("discord.js");

 
const client = new discord.Client();

exports.run = (client, message, args) => {
 
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Geen perms");

    if (!args[2]) return message.reply("geen gebruiker opgeven.");

    if (!args[3]) return message.reply("Je hebt een te korte reden geschrijven of je hebt geen gebruiker tagged! Maak jouw reden 2 woorden of langer!");

    var User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

    var reason = args.slice(2).join(" ");

    if (!User) return message.reply("Kan de gebruiker niet vinden.");

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setThumbnail(User.user.displayAvatarURL)
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`** Gekickt:** ${User} (${User.id})
        **Gekickt door:** ${message.author}
        **Redenen: ** ${reason}`);

    var embedPrompt = new discord.MessageEmbed()
        .setColor("GREEN")
        .setAuthor("Gelieve te reageren binnen 30 sec.")
        .setDescription(`Wil je ${User} kicken?`);

    let filter = m => m.author.id === message.author.id
    message.channel.send(`Wil je ${User} kicken van de server voor ${reason} \`YES\` / \`NO\``).then(() => {
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
                message.reply("gelukt!")
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
  