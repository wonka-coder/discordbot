const discord = require("discord.js");

 
const client = new discord.Client();

module.exports.run = async (client, message, args) => {

    if(message && message.deletable) message.delete().catch(e => {});

    let embed = new discord.MessageEmbed()
    .setTitle(`den helder | ticket systeem!`)
    .setColor("#42f598")
    .setDescription(`klik op '📜' voor een ticket te open! `);
    message.channel.send(embed).then(m => {
      m.react('✅');
    });
}

module.exports.help = {
    name: "ticket"
}