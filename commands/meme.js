const discord = require("discord.js");
const fetch = require("node-fetch")

const client = new discord.Client();

exports.run = (client, message, args) => {

fetch('https://www.reddit.com/r/memes/random/.json').then(resp => resp.json()).then(respMeme => {

var permaLink = respMeme[0].data.children[0].data.permaLink;
var memeUrl = `https://www.reddit.com${permaLink}`;
var memeFoto = respMeme[0].data.children[0].data.url;
var memeTitle = respMeme[0].data.children[0].data.title;
var memeUps = respMeme[0].data.children[0].data.ups;
var memeDowns = respMeme[0].data.children[0].data.downs;
var memeView = respMeme[0].data.children[0].data.view_count;

var embedMeme = new discord.MessageEmbed()
     .setColor('random')
     .setTitle(`${memeTitle}`)
     .setURL(`${memeUrl}`)
     .setImage(`${memeFoto}`)
     .setDescription(`👎 ${memeDowns} \n 👍 ${memeUps} \n 👀 ${memeView} `);

message.channel.send(embedMeme);


}).catch("error", (err) => {
  console.log(err.message);
})


}
exports.config = {
  aliases: ["memes", "meme"]
}
