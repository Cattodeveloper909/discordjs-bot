// Logging into discord =

// require the discord.js module
const Discord = require("discord.js");
const cron = require("cron");

// create a new Discord client
const client = new Discord.Client();

// remote config file where my data is stored
const { prefix, token, channelid } = require("./config.json");

// Date library of node

// When client is ready, run this:
// This will only run one time after logging in
client.once("ready", () => {
  console.log(`Online as ${client.user.tag}`);
  client.user.setActivity("9help");
});

// login to Discord with token
client.login(token);

// creating functions to use

function help() {
  return `
    📌Commands to use class notifier:

    9day =
    Show the classes of the day📆

    9mail =
    It will reply with a gmail's link📫

    9idukay =
    It will reply with a Idukay Link!📝

    9info =
    Information about the project!🚀
  `;
}

// Listening to messages if the client is on
client.on("message", (message) => {
  //declaring variables
  const friday = `
   8:00 am  -- English
   8:35 am  -- English
   9.10 am  -- PPE

   9:45 am  -- Receso

   10:00 am -- PPE
   10:35 am -- English
   11:10 am -- English

   11:45 AM -- Receso

   12:00 am -- Matematica

`;

  const thursday = `
   8:00 am  -- English
   8:35 am  -- English
   9.10 am  -- Quimica

   9:45 AM  -- Receso

   10:00 am -- Historia
   10:35 am -- Matematicas
   11:10 am -- Biologia

   11:45 AM -- Receso

   12:00 am -- Lenguaje

`;

  const wednesday = `
   8:00 am  -- Matematica
   8:35 am  -- Matematica
   9.10 am  -- Quimica

   9:45 AM  -- Receso

   10:00 am -- Biologia
   10:35 am -- English
   11:10 am -- English

   11:45 AM -- Receso

   12:00 am -- Lenguaje

`;

  const tuesday = `
   8:00 am  -- Fisica
   8:35 am  -- Historia
   9.10 am  -- English

   9:45 AM  -- Receso

   10:00 am -- English
   10:35 am -- Filosofia
   11:10 am -- Orientacion Vocacional

   11:45 AM -- Receso

   12:00 am -- Lenguaje

`;

  const monday = `
   8:00 am  -- Fisica
   8:35 am  -- Historia
   9.10 am  -- Emprendimiento y gestion

   9:45 am  -- Receso

   10:00 am -- Emprendimiento y gestion
   10:35 am -- Filosofia
   11:10 am -- English

   11:45 AM -- Receso

   12:00 am -- Lenguaje

`;
  var days = [monday, tuesday, wednesday, thursday, friday];
  const gmail = "https://mail.google.com/mail/u/1/?ogbl#inbox";
  const idukay = "https://idukay.net/#/";
  const github = "https://github.com/Cattodeveloper909";
  const discordid = "DarthNeder#2142";

  // if one of the message is help do this:
  if (message.content === `${prefix}help`) {
    // reply in the same channel from it was sent
    message.channel.send(help());

    // you concatenate messages with the else if block
  } else if (message.content === `${prefix}calendar`) {
    message.channel.send(`There you go! ${calendar}`);
  } else if (message.content === `${prefix}idukay`) {
    message.channel.send(`Voila! ${idukay}`);
  } else if (message.content === `${prefix}mail`) {
    message.channel.send(`Sent! ${gmail}`);
  } else if (message.content === `${prefix}day`) {
    message.channel.send(`Today's scheadule: ${days[today - 1]} `);
  } else if (message.content === `${prefix}info`) {
    message.channel.send(
      `This was made by Said Neder\nGithub: ${github}\nDiscord: ${discordid}`
    );
  }
});

function notificationclass() {
  return `
  You have class! GO NOW ${idukay}
  `;
}

function classbreak() {
  return `
  You have a break right now, patience and be calm, enjoy!
  `;
}

//const kalamardo = client.guilds.cache.get("814143626647961640");
//console.log(kalamardo);
//const channell = kalamardo.channels.cache.get("814147482719748146");
// send a message if it is the time specified.
let classnotification1 = new cron.CronJob("00 00 3 * * *", () => {
  channel.send(notificationclass);
});

let classnotification2 = new cron.CronJob("00 35 3 * * *", () => {
  channel.send(notificationclass);
});

let classnotification3 = new cron.CronJob("00 00 3 * * *", () => {
  channel.send(notificationclass);
});

let classnotification4 = new cron.CronJob("00 10 4 * * *", () => {
  channel.send(notificationclass);
});

let classnotification5 = new cron.CronJob("00 45 4 * * *", () => {
  channel.send(classbreak);
});

let classnotification6 = new cron.CronJob("00 00 5 * * *", () => {
  channel.send(notificationclass);
});

let classnotification7 = new cron.CronJob("00 35 5 * * *", () => {
  channel.send(notificationclass);
});

let classnotification8 = new cron.CronJob("00 10 6 * * *", () => {
  channel.send(notificationclass);
});

let classnotification9 = new cron.CronJob("00 45 6 * * *", () => {
  channel.send(classbreak);
});

let classnotification10 = new cron.CronJob("00 00 7 * * *", () => {
  message.channel.send(notificationclass);
});

let classnotification11 = new cron.CronJob("00 38 18 * * *", () => {
  channel.send(`You have ended your classes! Enjoy the rest of the day!`);
});

// When you want to start it, use:
classnotification1.start();
classnotification2.start();
classnotification3.start();
classnotification4.start();
classnotification5.start();
classnotification6.start();
classnotification7.start();
classnotification8.start();
classnotification9.start();
classnotification10.start();
classnotification11.start();

miauuuuuu;
