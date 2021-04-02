const discord = require("discord.js");


const client = new discord.Client();

exports.run = async (client, message, args) => {

  var ticketC = "798533810584551464";

  if(ticketC === message.channel.id){} else {
              return message.channel.send("You can not make a ticket here! ")
          }

  if(message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.id}`)) {
  			return message.reply('you already have a ticket, please close your exsisting ticket first before opening a new one!');
  		}

  		message.guild.channels.create(`ticket-${message.author.id}`, {
        // Put permissions for everyone
        overwritePermissions(message.guild.roles.cache.find('name', "@everyone"), { "READ_MESSAGES": false });
        overwritePermissions(message.guild.roles.cache.find('name', "@support"), { "VIEW_CHANNEL": true });
        // Put permission by the user that created the ticket
        overwritePermissions(message.author, {

            "READ_MESSAGES": true, "SEND_MESSAGES": true,
            "ATTACH_FILES": true, "CONNECT": true,
            "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true

        }).then(async channel => {
  			message.reply(`you have successfully created a ticket! Please click on ${channel} to view your ticket.`);
  			channel.send(`Hi ${message.author}, welcome to your ticket! Please be patient, we will be with you shortly. If you would like to close this ticket please run \`?close\``);
  			let logchannel = message.guild.channels.cache.find(channel => channel.name === `den-helderbot-logs`)
  			if(logchannel) {
  				logchannel.send(`Ticket ${message.author.id} created. Click the following to veiw <#${channel.id}>`);
  			}
  		});
  	},
  exports.config = {
    aliases: ["ticket open", "everyone"]
  }
