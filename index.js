const discord = require("discord.js");
const botConfig = require("./botConfig.json");

const client = new discord.Client();
const fs = require('fs');
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.events = new discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        console.log("Successfully loaded " + file)
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});
    //Events "handler"
    fs.readdir('./events/', (err, files) => {
        if (err) console.log(err);
        files.forEach(file => {
            let eventFunc = require(`./events/${file}`);
            console.log("Successfully loaded events " + file)
            let eventName = file.split(".")[0];
            client.on(eventName, (...args) => eventFunc.run(client, ...args));
        });
});







client.on("message", async message => {

    if(message.author.bot) return;

    if(message.channel.type === "dm") return;

  let prefix = botConfig.prefix;

  let messageArray = message.content.split(" ");

  let command = messageArray[0];

  let arguments = messageArray.slice(1);


});

client.login("ODE2MDI4ODEyMzM1NjQ0Njcz.YD1ADQ.DjAVdLjfWp8ni1074B4LDqmosy0");
