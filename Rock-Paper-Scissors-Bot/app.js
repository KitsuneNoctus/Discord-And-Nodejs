const Discord = require("discord.js"); // discord.js node module.

const { config } = require("./config.json"); // contains a string that is the password for the discord bot.

// Gateway Intents were introduced by Discord so bot developers can choose 
// which events their bot receives based on which data it needs to function.
// With partials we will be able to receive the full data of the objects returned from each event.
const Client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
    ],
    partials: [
        Discord.Partials.Channel,
        Discord.Partials.GuildMember,
        Discord.Partials.Message,
        Discord.Partials.User
    ]
}); // Creating a new client with intents and partials needed for this bot to function.
// partials makes sure that we receive the full data of the object returned from events.

// Ready event captures the state when the bot gets online.
Client.on("ready", (client) => {
    console.log("This bot is now online " + client.user.tag);
});

// messageCreate event captures data of a message that is created/posted.
Client.on("messageCreate", (message) => {
    if (message.author.bot == true) { return; } // return if bot wrote a message

    // message.content to lowercase
    let userInputToLowerCase = message.content.toLowerCase();

    // if user wrote rock
    if (userInputToLowerCase == "rock") {
      message.reply("You chose " + userInputToLowerCase);
    }
    // if user wrote paper
    else if (userInputToLowerCase == "paper") {
      message.reply("You chose " + userInputToLowerCase);
    }
    // if user wrote scissors
    else if (userInputToLowerCase == "scissors") {
      message.reply("You chose " + userInputToLowerCase);
    }
});

Client.login(config); // Logs in the discord bot with the password stored in an external file.