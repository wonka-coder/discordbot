const discord = require("discord.js");


const client = new discord.Client();

module.exports.run = async (client, message, args) => {

    if(message && message.deletable) message.delete().catch(e => {});

    let embed = new discord.MessageEmbed()
    .setTitle(`DDC | Verify`)
    .setColor("#42f598")
    .setDescription(`Hello, welcome to ***Dutch Defence Corporation***! If you want to proceed to the Discord please do "?verify" & follow the steps! *** You need a roblox account to continue! *** `);
    message.channel.send(embed).then(m => {
      m.react('✅');
    });
}

module.exports.help = {
    name: "ticket"
}
