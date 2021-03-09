const discord = require("discord.js");


const client = new discord.Client();

module.exports.run = async (client, message, args) => {

    if(message && message.deletable) message.delete().catch(e => {});

    let embed = new discord.MessageEmbed()
    .setTitle(`den helder | ticket systeem!`)
    .setColor("#42f598")
    .setDescription(`Hello, welcome to the channel #application. \n In this channel you can find information about the applications. All forms that have something to do with Den Helder will be placed here.

We do this because a lot of tickets are made about the applications. We indicate not to create tickets related to "staff applications. \
**-----------------------------------------**

*Moderator appllication:*

https://forms.gle/BAStcZnhLJw8cDZ9A

:green_circle: = OPEN

**-----------------------------------------**
*Developer appllication:*
https://forms.gle/QVF5ZvhF9sbrsjDL8
:green_circle: = OPEN

**-----------------------------------------**
*Ban appeals*
https://forms.gle/souGHuLT83G1URVu5
:green_circle: = OPEN
"`);
    message.channel.send(embed).then(m => {
      m.react('✅');
    });
}

module.exports.help = {
    name: "ticket"
}
