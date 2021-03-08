const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) => {

    // !warn spelerNaam redenen hier.

    if (!message.member.roles.cache.some(role => role.name === 'MODERATOR PERM')) return message.react("❌"), message.reply("je hebt de rol: ``MODERATOR PERM`` niet!").then (message =>{
        message.delete({ timeout: 10000 })}), message.delete({ timeout: 3000 });

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    if (!args[1]) return message.reply("Gelieve een redenen op te geven.");

    if (!message.member.roles.cache.some(role => role.name === 'MODERATOR PERM')) return message.react("❌"), message.reply("je hebt de rol: ``MODERATOR PERM`` niet!").then (message =>{
        message.delete({ timeout: 10000 })}), message.delete({ timeout: 3000 });

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("Kan de gebruiker niet vinden.");

    if (warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry je kunt deze gebruiker niet warnen");

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**Gewarnd:** ${warnUser} (${warnUser.id})
        **Warning door:** ${message.author}
        **Redenen: ** ${reason}`)
        .addField("Aantal warns", warns[warnUser.id].warns);

    var channel = message.member.guild.channels.cache.get("498068972604882945");

    if (!channel) return;

    channel.send(embed);

    if (warns[warnUser.id].warns == 3) {

        var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setDescription("PAS OP")
            .addField("Bericht", "Je hebt nog een waarschuwing voor een ban.");

        message.channel.send(embed);

    } else if (warns[warnUser.id].warns == 6) {
        message.guild.member(warnUser).ban(reason);
        var banembed = new discord.MessageEmbed()
        .setTitle("banned logs | DDC")
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`${warnUse} is verbannen van ***Dutch Defence Corporation*** voor het hebben van teveel warns!`)
        var logsChannel = client.channels.cache.get("801837510820757514")
logsChannel.send(banembed);
    }
}

module.exports.help = {
    name: "warn"
}