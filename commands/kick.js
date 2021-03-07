const discord = require("discord.js");

 
const client = new discord.Client();

exports.run = (client, message, args) => {
 
    if (!message.member.roles.cache.some(role => role.name === 'MODERATOR PERM')) return message.react("❌"), message.reply("je hebt de rol: ``perms`` niet!").then (message =>{
      message.delete({ timeout: 10000 })}), message.delete({ timeout: 3000 });

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");


    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(2).join(" ");

    if (!kickUser) return message.reply("Kan de gebruiker niet vinden.");

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setThumbnail(kickUser.user.displayAvatarURL)
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`** Gekickt:** ${kickUser} (${kickUser.id})
        **Gekickt door:** ${message.author}
        **Redenen: ** ${reason}`);

    var embedPrompt = new discord.MessageEmbed()
        .setColor("GREEN")
        .setAuthor("Gelieve te reageren binnen 30 sec.")
        .setDescription(`Wil je ${kickUser} kicken?`);

    let filter = m => m.author.id === message.author.id
    message.channel.send(`Wil je ${kickUser} kicken van de server voor ${reason} \`YES\` / \`NO\``).then(() => {
      message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
            kickUser.kick(reason).catch(err => {
                if (err) return message.channel.send(`er is een fout opgetreed! error: **${err}** `);
                message.reply("gelukt!"), kickUser.send("je bent gekickt!")
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
    aliases: ["KICK", "KICK_MEMBER"]
  }
  