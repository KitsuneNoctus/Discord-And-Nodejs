// contains a string that is the password/token for the discord bot.
require('dotenv').config();
const Discord = require("discord.js"); // discord.js node module

// contains a string that is the password/token for the discord bot. (from part 48)
// const { token } = require("./config.json");

// Gateway Intents were introduced by Discord so bot developers can choose 
// which events their bot receives based on which data it needs to function.
// With partials we will be able to receive the full data of the objects returned from each event.
const Client = new Discord.Client({
  intents:[
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.DirectMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.Guilds
  ],
  partials: [
    Discord.Partials.Message,
    Discord.Partials.Channel,
    Discord.Partials.GuildMember,
    Discord.Partials.User,
    Discord.Partials.GuildScheduledEvent
  ]
}); // Creating a new client with intents and partials needed for this bot to function.
// partials makes sure that we receive the full data of the object returned from events.

// Ready event captures the state when the bot gets online.
Client.on("ready", (client) => {
  console.log("This bot is now online:" + client.user.tag);
});

// messageCreate event captures data of a message that is created/posted.
Client.on("messageCreate", (message) => {
  // message content to lower case only
  const userInputText = message.content.toLowerCase();

  // only allow non-bots to perform any code execution.
  if (message.author.bot) { return }
  console.log("a new message written!");

  // only run this code is the user that wrote the message is NOT a bot.
  if (!message.author.bot) {
    message.reply("Hello World! You are not a bot!");
  }

  // commands
  if (userInputText == "!commands" || userInputText == "!help") {
    message.reply("This bot operates on the following commands: !commands !help !age !math");
  }
});

// Logs in the discord bot with the password stored in an external file.
Client.login(process.env.BOT_TOKEN);
// Client.login(token); from part 48