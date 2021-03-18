const discord = require("discord.js");
const fs = require("fs");
const db = require('quick.db')


module.exports.run = async (client, message, args) => {
  const user = message.mentions.members.first() || message.author


  let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)


  if(warnings === null) warnings = 0;


  message.channel.send(`${user} have **${warnings}** warning(s)`)


}


module.exports.help = {
    name: "warn"
}
