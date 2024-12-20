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

    const pcOptions = ["rock","paper","scissors"]; //array for bot

    // generates a random number 0, 1, or 2
    const pcRoll = Math.floor(Math.random() * 3);

    // if user wrote rock
    if (userInputToLowerCase == "rock") {
      let statusMessage = "";

      // pc selected rock = draw
      if (pcOptions[pcRoll] == userInputToLowerCase) {
        statusMessage = "It's a Draw";
        saveGame(message.author.id, message.author.tag, "draw");
      }

      // pc selected scissors = player win
      else if (pcOptions[pcRoll] == "scissors") {
        statusMessage = "You Win";
        saveGame(message.author.id, message.author.tag, "win");
      }

      // pc selected paper = player lose
      else if (pcOptions[pcRoll] == "paper") {
        statusMessage = "You Lose";
        saveGame(message.author.id, message.author.tag, "lose");
      }
      // only run if something is wrong
      else { message.reply("Error in the code"); }


      message.reply("You selected rock and pc selected " + pcOptions[pcRoll] + " - " + statusMessage);

      // let obj = returnNewGameObject(message.author.id, message.author.tag);
      // saveGameData(obj);

      // console.log(returnGameData());

      // saveGame(message.author.id, message.author.tag, );
    }
    // if user wrote paper
    else if (userInputToLowerCase == "paper") {
      let statusMessage = "";

      // pc selected paper = draw
      if (pcOptions[pcRoll] == userInputToLowerCase) {
        statusMessage = "It's a Draw";
      }

      // pc selected rock = player win
      else if (pcOptions[pcRoll] == "rock") {
        statusMessage = "You Win";
      }

      // pc selected scissors = player lose
      else if (pcOptions[pcRoll] == "scissors") {
        statusMessage = "You Lose";
      }
      // only run if something is wrong
      else { message.reply("Error in the code"); }

      message.reply("You selected paper and pc selected " + pcOptions[pcRoll] + " - " + statusMessage);
    }
    // if user wrote scissors
    else if (userInputToLowerCase == "scissors") {
      let statusMessage = "";

      // pc selected scissors = draw
      if (pcOptions[pcRoll] == userInputToLowerCase) {
        statusMessage = "It's a Draw";
      }

      // pc selected paper = player win
      else if (pcOptions[pcRoll] == "paper") {
        statusMessage = "You Win";
      }

      // pc selected rock = player lose
      else if (pcOptions[pcRoll] == "rock") {
        statusMessage = "You Lose";
      }
      // only run if something is wrong
      else { message.reply("Error in the code"); }

      message.reply("You selected scissors and pc selected " + pcOptions[pcRoll] + " - " + statusMessage);
    }
});

// saveGame() needs userID + draw/win/lose
function saveGame(userID, name, gameStatus) {
  let gameData = returnGameData(); // get data from gamedata.json
  let newGame = true; // default true unless we find a game by the player with less than 3 rounds

  // loop through gamedata.json array
  for (let i = 0; i < gameData.length; i++) {
    // if user exists within a game and the rounds of the game are less than 3 (0, 1, 2)
    if (gameData[i].userID == userID && gameData[i].rounds < 3) {
      newGame = false; // turns to false since we found a game
      
      gameData[i].rounds++;
      gameData[i][gameStatus]++;
    }
  }

  // if we should still create a new game between player and pc
  if (newGame == true) {
    let newGameObject = returnNewGameObject(userID, name);

    newGameObject.ID = gameData.length + 1; // set the ID of the game
    newGameObject.rounds++; // increase rounds by 1
    newGameObject[gameStatus]++; // increase property of draw, win, or lose

    //if array is empty
    if(gameData.length < 1) {
      gameData = [newGameObject]; // empty array replacxed with array that has object inside
    }

    //if array contains objects already
    else if(gameData.length > 0) {
      gameData.push(newGameObject); // push the object into back of the array
    }
  }

  saveGameData(gameData); //save data
}

// save gamedata
function saveGameData(data) {
  const fs = require("fs"); //filesystem
  const path = "./gamedata.json";

  fs.writeFileSync(path, JSON.stringify(data));
}

// read and return game data
function returnGameData() {
  const fs = require("fs"); //filesystem
  const path = "./gamedata.json";
  const encoding = "utf-8"; //encoding for displaying correct characters

  return JSON.parse(fs.readFileSync(path, encoding));
}

// Object Structure
function returnNewGameObject(userID, name) {
  return {
    ID : 0,
    userID : userID,
    name : name,
    draw : 0,
    win : 0,
    lose : 0,
    rounds : 0,
    time : new Date().toString()
  }
}

Client.login(config); // Logs in the discord bot with the password stored in an external file.