const discord = require("discord.js");
const fs = require("fs");
const db = require('quick.db')


module.exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.some(role => role.name === 'TRIAL MODERATOR PERM')) return message.react("❌"), message.reply("you don't have the role:'TRIAL MODERATOR PERM !").then (message =>{
        message.delete({ timeout: 10000 })}), message.delete({ timeout: 3000 });

      if (!args[0]) return message.react("❌"), message.reply("no user specified!").then (message =>{
          message.delete({ timeout: 10000 })}), message.delete({ timeout: 3000 });


      var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      var reason = args.slice(1).join(" ");

      if (!user) return message.reply("user cannot be found!");

      let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

          if(warnings === 3) {
            return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)
          }

          if(warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, 1)
            user.send(`You have been warned in **${message.guild.name}** for ${reason} aantal **${warnings}*`)
            await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
          } else if(warnings !== null) {
              db.add(`warnings_${message.guild.id}_${user.id}`, 1)
             user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
            await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
          }


        }


module.exports.help = {
    name: "warn"
}
