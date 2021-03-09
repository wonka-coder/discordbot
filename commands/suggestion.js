const discord = require("discord.js");


const client = new discord.Client();

exports.run = (client, message, args) => {

    var buggie = "818825270765158430";
    let reason = args.slice(0).join(" ")

    var embed = new discord.MessageEmbed()
    .setTitle("suggestion")
    .setAuthor(`${message.member.displayName}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
    .setColor('#030bfc')
    .setDescription(`${reason}`)
    .setFooter("DDC")

    var failedSuggestion = new discord.MessageEmbed()
    .setTitle("suggestion")
    .setColor("RED")
    .setDescription(`${args[0]}`)
    .setFooter("DDC")


    message.delete()


    if(!args[0]){
        return message.reply("You have not provided any arguments for your suggestion.")
    } else {
        if(buggie === message.channel.id){
            let embMsg = await message.channel.send(embed)
            let emb = embMsg;
            emb.edit(embed)
            emb.react('✅')
            emb.react('❌')


        } else {
            return message.channel.send("You cannot send suggestions in this channel.")
        }
    }




};

}

module.exports.help = {
    name: "suggestion"
}
