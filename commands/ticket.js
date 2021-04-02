const discord = require("discord.js");
var emoij = ("flag_nl", "flag_us");

const client = new discord.Client();

exports.run = async (client, message, args) => {
  var embedNL = new discord.MessageEmbed()
.setTitle("Ticket systeem |  ***Dutch Defence Corporation***!")
.setColor("#ff0000")
.setThumbnail("https://imgur.com/lCrEqtv.png")
.setFooter(`Nederlands`)
.setTimestamp()
.setDescription(`Deze gebruiker wilt geholpen worden in het nederlands`);
var embedPrompt = new discord.MessageEmbed()
.setTitle("select your language | selecteer je taal")
.setColor("#ff0000")
.setThumbnail("https://imgur.com/lCrEqtv.png")
.setFooter(`Ticket promptMessage`)
.setTimestamp()
.setDescription(`:flag_us: = English | :flag_nl: = nederlands`);

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

        message.channel.send(embedPrompt).then(async msg => {

                    var emoji = await promptMessage(":flag_nl:", ":flag_us:"");

                    if (emoji === " :flag_nl:") {

                        message.reply(embedNL);

                    } else if (emoji === ":flag_us:") {

                        message.reply("English")

                    }

                });
  			let logchannel = message.guild.channels.cache.find(channel => channel.name === `den-helderbot-logs`)
  			if(logchannel) {
  				logchannel.send(`Ticket ${message.author.id} created. Click the following to veiw <#${channel.id}>`);
  			}
  		});
  	},
    async function promptMessage(message, author, time, reactions) {
    // We gaan eerst de tijd * 1000 doen zodat we seconden uitkomen.
    time *= 1000;

    // We gaan ieder meegegeven reactie onder de reactie plaatsen.
    for (const reaction of reactions) {
        await message.react(reaction);
    }

    // Als de emoji de juiste emoji is die men heeft opgegeven en als ook de auteur die dit heeft aangemaakt er op klikt
    // dan kunnen we een bericht terug sturen.
    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    // We kijken als de reactie juist is, dus met die filter en ook het aantal keren en binnen de tijd.
    // Dan kunnen we bericht terug sturen met dat icoontje dat is aangeduid.
    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
}
  exports.config = {
    aliases: ["ticket open", "everyone"]
  }
