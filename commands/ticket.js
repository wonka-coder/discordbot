const discord = require("discord.js");


const client = new discord.Client();

exports.run = async (client, message, args) => {
   const categoryId = "806092431698427984";
  var ticketC = "798533810584551464";

  if(ticketC === message.channel.id){} else {
              return message.channel.send("You can not make a ticket here! ")
          }

  if(message.guild.channels.cache.find(channel => channel.name == userName.toLowerCase() + "-" + userDiscriminator)) {
  			return message.reply('you already have a ticket, please close your exsisting ticket first before opening a new one!');
  		}

      message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => { // Maak kanaal

             createdChan.setParent(categoryId).then((settedParent) => { // Zet kanaal in category.

                 // Put permissions for everyone
                 settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
                 settedParent.overwritePermissions(message.guild.roles.find('name', "@support"), { "VIEW_CHANNEL": true });
                 // Put permission by the user that created the ticket
                 settedParent.overwritePermissions(message.author, {

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
