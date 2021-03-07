const discord = require("discord.js")

exports.run = async (client, message, user, reaction, emoji ) => { 
  
   // let already = new discord.MessageEmbed()
    //.setColor("#f2fff7")
    //.setAuthor(`toegang geweigerd!`)
    //.setDescription(`Je kunt maar één ticket tegelijk open hebben staan.`);
  
    //let success = new discord.MessageEmbed()
    //.setColor("#f2fff7")
    //.setTitle(`📜 | ticket systeem!`)
    //.setDescription(`ticket`);
  
    //let split = '';
    //let usr = user.id.split(split);
    //for (var i = 0; i < usr.length; i++) usr[i] = usr[i].trim();
  
    
      if(emoji === "✅"){
        if(!message.guild.channels.cache.find(c => c.name === `ticket-${usr[0]}${usr[1]}${usr[2]}${usr[3]}`)){

          let categoria = message.guild.channels.cache.find(c => c.name == "tickets" && c.type == "category");
          if(!categoria) categoria = await message.guild.channels.create("tickets", {type: "category", position: 1}).catch(e => {return functions.errorEmbed(message, message.channel, "Une erreur a été rencontrée.")});
  
          let permsToHave = ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'ADD_REACTIONS']
  
          message.guild.channels.create(`ticket-${usr[0]}${usr[1]}${usr[2]}${usr[3]}`, { permissionOverwrites:[
            {
              deny: 'VIEW_CHANNEL',
              id: message.guild.id
            },
            {
              allow: permsToHave,
              id: user.id
            },
            {
              allow: permsToHave,
              id: role.id
            },
          ],
          parent: categoria.id,
          reason: `Cet utilisateur a besoin d'aide.`,
          topic: `**ID:** ${user.id} -- **Tag:** ${user.tag} | s!close`
        }).then(channel => {
  
          let createdEmbed = new discord.MessageEmbed()
          .setAuthor(`📝 | Open ticket`)
          .setTimestamp()
          .setColor(color.none)
          .setFooter(`den helder ticket systeem!`, bot.user.displayAvatarURL())
          .setDescription(`Een gebruiker heeft een ticket geopend en wacht op de behandeling van zijn verzoek.`)
          .addField(`infomatie`, `**gebruiker :** \`${user.tag}\`\n**ID :** \`${user.id}\`\n**Ticket :** ${channel}\n**Date :** \`${dateFormat(new Date(), "dd/mm/yyyy - HH:MM:ss")}\``);
        })
        reaction.users.remove(user.id);
        return;
      } else {
        reaction.users.remove(user.id);
        message.reply({embed: already}).then(m => m.delete({timeout: 5000}).catch(e => {}));
      }
      }
  
    // ========================= //
  
    
      if(emoji === "🗑️"){
  
          let deletedEmbed = new Discord.MessageEmbed()
          .setAuthor(`🗑️ | Ticket Fermé`)
          .setColor(color.none)
          .setDescription(`L'auteur a confirmé la fermeture du ticket.`)
          .setTimestamp()
          .setFooter(`Système de Ticket`, bot.user.displayAvatarURL())
          .addField(`Informations`, `**Utilisateur :** \`${user.tag}\`\n**ID :** \`${user.id}\`\n**Ticket :** \`${message.channel.name}\`\n**Date :** \`${dateFormat(new Date(), "dd/mm/yyyy - HH:MM:ss")}\``);
  
          if(logsChannel) logsChannel.send(deletedEmbed);
  
          message.channel.delete();
  
        
      }
    
  
  
}