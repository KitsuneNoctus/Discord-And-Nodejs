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
    Discord.Partials.GuildScheduledEvent,
    Discord.Partials.ThreadMember
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

  // basic math return the sum of a few numbers using addition, subtraction, multip. etc.
  if (userInputText == "!math") {
    message.reply("5 + 2 - 1 * 5 / 2 - 4 + 7 * 3 % 5 = " + (5 + 2 - 1 * 5 / 2 - 4 + 7 * 3 % 5));
  }

  // server age and member's age in server
  if (userInputText == "!age") {
    // console.log(message.channel);
    console.log(message.guild.createdTimestamp); // milliseconds since 1 jan 1970 at midnight.
    console.log(message.guild.createdAt); // date when server was created
    console.log(new Date(message.guild.createdTimestamp).toString()); // converting ms to actual date

    message.reply("Server was created " + message.guild.createdAt.toString());
  }

  // Fetch guild members returns a promise.
  message.guild.members.fetch().then(
    (value) => {
      // console.log(value);
      value.forEach(user => {
        // print each user's id and the id of the author of the message
        console.log(user.user.id + " " + message.author.id);
        console.log(user.joinedTimestamp);// print joinedTimestamp
        let date = new Date(user.joinedTimestamp);// Convert milliseconds to actual date and time
        message.reply(user.user.tag + " joined:\n" + date.toString()); // reply with the date and time
      });
    },
    (error) => {
      console.log(error); // prints error if it occurs.
    }
  );

});

// Logs in the discord bot with the password stored in an external file.
Client.login(process.env.BOT_TOKEN);
// Client.login(token); from part 48