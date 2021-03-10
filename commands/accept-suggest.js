const discord = require("discord.js");


const client = new discord.Client();


module.exports.run = async(client, message, args) => {

if(message && message.deletable) message.delete().catch(e => {});

  if (!message.member.roles.cache.some(role => role.name === 'Head Developer')) return message.react("❌"), message.reply("you don't have the role:'TRIAL MODERATOR PERM !").then (message =>{
      message.delete({ timeout: 10000 })}), message.delete({ timeout: 3000 });


    if(!args[0]){
        return message.channel.send('You need give me a messageID!')
    }

    const messageID = args[0];

    try{
        const suggestionChannel = message.guild.channels.cache.get('818825270765158430')
        const suggestieEmbed = await suggestionChannel.messages.fetch(messageID)
        var channel01 = message.guild.channels.cache.find(channel => channel.id === "818825270765158430")


        const data = suggestieEmbed.embeds[0];
        const acceptEmbed = new discord.MessageEmbed()
        .setAuthor(data.author.name, data.author.iconURL)
        .setTitle('✅ |  Will be added ingame!')
        .setDescription(data.description)
        .setColor("#22ff00")
        .setFooter("DDC | suggestions")

        suggestieEmbed.edit(acceptEmbed)
        channel01.send(acceptEmbed)



    } catch(err) {
        console.log(err)
    }

};


module.exports.help = {
    name: `accept`
};
