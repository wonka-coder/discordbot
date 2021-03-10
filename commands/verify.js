const discord = require("discord.js");
const rbx = require("noblox.js")

const client = new discord.Client();

module.exports.run = async (client, message, args) => {

var verify = "798533797205377065";

  let msg = await message.channel.send("Awaiting Prompt") // Send a message for awaiting.

 if(verify === message.channel.id){} else {
             return message.channel.send("You cannot send suggestions in this channel.")
         }

  function makeid() {
    var text = "";
    var selectFruit = ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😲','😝','🤑','🤯','😭','😑','😶','😋','🙆','👉','👇','🧠','💼','👮🏻','👍🏼','👎🏼','🐵','🌨','☁️','💧','🎬','🎧','🎮','🎲','🏅','🥇','🥈','🥉','🏆','🏒','🍎','🍫','🍿','🍪','🥛','🍽','🍴','🐑','🦀','🐔','🐭','🦊','🐧','🐞','🌍','🌏','🌕','🌖','🌚','🌝','🌵','🎄','🌲','☀️','⛅️','☔️','🍋']; // Emoji list This can be used for words.
    text += selectFruit[Math.floor(Math.random() * selectFruit.length)];
    text += selectFruit[Math.floor(Math.random() * selectFruit.length)]; // This will random the emojis
    text += selectFruit[Math.floor(Math.random() * selectFruit.length)];
    text += selectFruit[Math.floor(Math.random() * selectFruit.length)];
    return text;
  }

  const filter = m => m.author.id === message.author.id
  const collector = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1", time: "200000" }) //This is the collector to collect the Message for getting the username.
  const robloxEmbed = new discord.MessageEmbed()
.setColor("BLUE")
.setTitle("Prompt")
.setDescription("❓ What's your ROBLOX username?")
.setFooter("This prompt will cancel after 200 seconds.")
.setTimestamp()
 msg.channel.send(robloxEmbed) //Send the first Embed

 collector.on("collect", m => {
   if(m.content === 'cancel' || m.content === 'Cancel') {
     message.channel.send('**Cancelled prompt.**')
     return
   } //Collector1 End
   rbx.getIdFromUsername(m.content).then(foundId => { //Get the userID from username
     const Id = foundId
     const newString = makeid() + makeid() + makeid() + makeid() + makeid() //Emoji thing
   const foundUsername = new discord.MessageEmbed()
.setColor("BLUE")
.setTitle("Prompt")
.setDescription("Hello **" + m.content + "**, to verify that you are that user. Please put this in your blurb, or status. \n `" + newString + "`\n\nSay **done** when complete.\nSay **cancel** to cancel. ")
.setFooter("Player ID is " + foundId)
.setTimestamp()
 msg.channel.send(foundUsername) //The part where it asks you to add the Code
       const collector2 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1", time: "200000" }) // Collector2
collector2.on('collect', async mag => {
      if(mag.content.includes('done') & mag.content.includes("done") && mag.author.id == message.author.id) {
        const fetchingBlurb = new discord.MessageEmbed()
.setColor("BLUE")
.setTitle("Prompt")
.setDescription("Fetching your emojis, please wait as I am going to fetch it.")
.setFooter("Fetching..")
.setTimestamp()
         msg.channel.send(fetchingBlurb) //Checks the Blurb / Status
        setTimeout(function() { //Timeout Stuff
rbx.getStatus(foundId).then(status => { //Check status
            console.log(status) //Console.log the status
          rbx.getBlurb(foundId).then(blurb => { // Checks the blurb
            if(status.includes(newString) || blurb.includes(newString)) { // If code is in blurb procceds with operation
              const verified = new discord.MessageEmbed()
.setColor("GREEN")
.setTitle("Prompt")
.setDescription("You have now been verified! Please wait shortly as you are going to recieve the Verified role.")
.setFooter("Verifying..")
.setTimestamp()
               msg.channel.send(verified) // Sent if user has put code
              message.member.roles.add(message.guild.roles.cache.find(r => r.name == "✔️")) // Add the users role
              message.member.setNickname(m.content) // Sets the users nickname


               } else {
               message.channel.send("Can not find the emojis.") // Sent if user has not put code
               }
          })
        }, 5000)
      })
    } else
        if(mag.content.includes('cancel') && mag.author.id == message.author.id) {
          message.channel.send('**Cancelled prompt.**') // If user says `Cancel`
                               return
        }
    })
 })
})
}
}
