const discord = require("discord.js")

exports.run = async (client, message ) => { 
    console.log("user leaved")
    myGuild = client.guilds.cache.get("796297446786334720");
let memberCount = myGuild.memberCount;
let memberCountChannel = myGuild.channels.cache.get("817375067012202496");
memberCountChannel.setName(""+memberCount+ " Members")
}