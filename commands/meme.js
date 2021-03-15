const discord = require("discord.js");
const fetch = require("node-fetch")

const client = new discord.Client();

exports.run = (client, message, args) => {

fetch('https://www.reddit.com/r/memes/random/.json').then(resp => resp.json()).then(respMeme => {

var permaL = respMeme[0].data.children[0].data.permaLink;
var memeU = `https://www.reddit.com${permaLink}`;
var memeF = respMeme[0].data.children[0].data.url;
var memeT = respMeme[0].data.children[0].data.title;
var memeUps = respMeme[0].data.children[0].data.ups;
var memeDowns = respMeme[0].data.children[0].data.downs;

var embedMeme = new discord.MessageEmbed()
.setTitle(`${memeT}`)
.setUrl(`${memeU}`)
.setImage(`${memeF}`)
.setDescription(`👍 ${memeUps} \n 👎 ${memeDowns} `)

message.channel.send(embedMeme);


}).catch("error", (err) => {
  console.log(err.message);
})


}
exports.config = {
  aliases: ["memes", "meme"]
}
