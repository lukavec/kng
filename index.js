require("dotenv").config();
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', msg => {
  if(msg.content.startsWith('/kick') && msg.mentions.members.first().id==644968501118894094) {
    //msg.reply(msg.mentions.members.first().id);
    msg.reply("I will NOT kick myself!!!!!!!!!!!!");
  }
  else if (msg.content.startsWith('/kick')) {
    msg.reply('Give me 1 reason WHY!');
    //msg.reply(msg.content)
  }
})

client.login("");
