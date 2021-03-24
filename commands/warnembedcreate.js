const discord = require("discord.js");


const client = new discord.Client();

module.exports.run = async (client, message, args) => {

    if(message && message.deletable) message.delete().catch(e => {});

    let embed = new discord.MessageEmbed()
    .setTitle(`DDC | You have been warned! `)
    .setColor("#42f598")
    .setDescription(`Your behavior was not good so you got a warning from our moderators. To make sure that you are alerted about your warn, press the tick below.`);
    message.channel.send(embed).then(m => {
      m.react('✅');
    });
}

module.exports.help = {
    name: "ticket"
}
