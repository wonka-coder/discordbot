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
  			permissionOverwrites: [
  				{
  					id: message.author.id,
  					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
  				},
  				{
  					id: message.guild.roles.everyone,
  					deny: ['VIEW_CHANNEL'],
  				},
  			],
  			type: 'text',
  		}).then(async channel => {
  			message.reply(`you have successfully created a ticket! Please click on ${channel} to view your ticket.`);
  			channel.send(`Hi ${message.author}, welcome to your ticket! Please be patient, we will be with you shortly. Select your language :flag_us: = English / :flag_nl = nederlands`).then(
          message.react(':flag_us:'), message.edit("This user wants to be served in English");
          message.react(':flag_nl:'), message.edit(" Deze gebruik wilt geholpen worden in het nederlands.")
        )
  			let logchannel = message.guild.channels.cache.find(channel => channel.name === `den-helderbot-logs`)
  			if(logchannel) {
  				logchannel.send(`Ticket ${message.author.id} created. Click the following to veiw <#${channel.id}>`);
  			}
  		});
  	},
  exports.config = {
    aliases: ["ticket open", "everyone"]
  }
