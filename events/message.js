const prefix = "?"
const discord = require("discord.js")


var message1 = "Your behavior was noticed by our moderators, and you have received a warning for this behaviour. To re-enter back in the server, please tick this icon ' ✅ ' below. Make sure to obey our rules at any time."

const client = new discord.Client();
 exports.run = async(client, message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix)) {

 let messageArray = message.content.split(" "),
     cmd = messageArray[0],
     args = messageArray.slice(1),
     commandfile = client.commands.get(cmd.slice(prefix.length)) || client.aliases.get(cmd.slice(prefix.length));

if(!commandfile) return;
    commandfile.run(client,message,args);
  }
  if (message.channel.id === "798533810584551464") {
message.reply(" the tickets are closed! | de tickets zijn dicht!"), message.delete();
  }
  if (message.channel.id === "798533810584551464") {
    var embed = new discord.MessageEmbed()
        .setTitle("ticket closed!! | DDC")
        .setColor("#ff8000")
        .setFooter("tickets!| Dutch Defence Corporation ")
        .setTimestamp()
        .setDescription(`the tickets are closed! if you have questions please send a message to <@464803075844997131> !  `)
        message.channel.send(embed);
  }
  if (message.channel.id === "824242554014531614") {
    var embed = new discord.MessageEmbed()
    .setTitle(`DDC | You have been warned! `)
    .setColor("#42f598")
    .setDescription(`${message1}`);
    message.channel.send(embed).then(m => {
      m.react('✅');
    });

  }
}
