//const express = require("express");
require("dotenv").config();
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
// server.js
// where your node app starts

// init project
client.login(process.env.TOKEN);
--const bodyParser = require("body-parser");
/*const app = express();

/*app.get("/", function(request, response) {
  response.sendFile("./views/index.html");
});*/
//const fs = require("fs");
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
//app.use(express.static("public"));

// init sqlite db
/*const dbFile = "./.data/sqlite.db";
const exists = fs.existsSync(dbFile);
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(dbFile);

// if ./.data/sqlite.db does not exist, create it, otherwise print records to console
db.serialize(() => {
  if (!exists) {
    db.run(
      "CREATE TABLE bans (id INTEGER PRIMARY KEY AUTOINCREMENT, id INT, expireDate TIMESTAMP)"
    );
    console.log("New table bans created!");

    // insert default dreams
    db.serialize(() => {
      /*db.run(
        'INSERT INTO bans (dream) VALUES ("Find and count some sheep"), ("Climb a really tall mountain"), ("Wash the dishes")'
      );*//*
    });
  } else {
    console.log('Database "bans" ready to go!');
    db.each("SELECT * from bans", (err, row) => {
      if (row) {
        console.log(`record: ${row.dream}`);
      }
    });
  }
});
*/
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  //if (msg.member.id != 644968501118894094) {
  //msg.reply("recived");
  //}
  if (msg) {
    if (
      msg.content.startsWith("/kick") &&
      msg.mentions.members.first().id == 644968501118894094
    ) {
      //msg.reply(msg.mentions.members.first().id);
      msg.reply("I will NOT kick myself!!!!!!!!!!!!");
      msg.delete();
      if (!msg.guild.me.hasPermission("MANAGE_NICKNAMES"))
        //return msg.channel.send(
        //  "I don't have permission to change your nickname!"
        //);
        msg.member.nickname="soudruh který nesnese bota";
    } else if (msg.content.startsWith("/kick")) {
      msg.reply("Give me 1 reason WHY!");
      //msg.reply(msg.content)
    }
    if (msg.channel.type == "text" && msg.content == "pls help") {
      msg.delete();
      msg.member.send("Zdar, s čím chceš pomoct?");
    }
    if (msg.channel.type == "dm" && msg.author.id != 644968501118894094) {
      switch (true) {
        case msg.content.toLowerCase().includes("admin"):
          msg.reply("Ne, admin fakt nebudeš!");
          break;
        case msg.content.toLowerCase().includes("discord") &&
          msg.content.toLowerCase().includes("lepší") &&
          msg.content.toLowerCase().includes("messenger",msg.content.toLowerCase().indexOf("discord")):
          msg.reply("Discord je lepší úplně ve všem.");
          break;
        default:
          msg.reply("COŽE?");
          break;
      }
    }
  }
});


//while (true) {}
