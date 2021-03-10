const discord = require("discord.js");


const client = new discord.Client();

module.exports.run = async (client, message, args) => {


  if (!message.member.roles.cache.some(role => role.name === 'SUPER ADMIN PERM')) return message.react("❌"), message.reply("you don't have the role:: ``SUPER ADMIN PERM``!").then (message =>{
    message.delete({ timeout: 10000 })}), message.delete({ timeout: 3000 });

    if (!args[0]) return message.reply("Hoeveel messages wil je clearen?");

    if (Number.isInteger(parseInt(args[0]))){

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() =>{

            if(args[0] <= 0){
                message.reply("Ik kan geen 1 bericht clearen!").then(msg => msg.delete({ timeout: 6000 }));
            }else if(args[0] == 1) {
                message.reply("1 reden gecleared").then(msg => msg.delete({ timeout: 6000 }));
            }else {
                message.reply(`Ik heb **${args[0]}** berichten verwijderd`).then(msg => msg.delete({ timeout: 6000 }));
            }
        })

    }else {
        return message.reply("Hoeveel wil je clearen?")
    }




}

module.exports.help = {
    name: "clear"
}
