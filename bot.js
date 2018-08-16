const discord = require("discord.js");
const config = require("./config.json");
const bot = new discord.Client({disableEveryone: true});
const fs = require("fs");

// QUANDO O BOT ESTIVER ON.
// sωıтcн.
bot.on("ready", async () => {
  console.log(`${bot.user.username} is ready for action!`);
  if (config.activity.streaming == true) {
    bot.user.setActivity(config.activity.game, {url: 'https://www.twitch.tv/switinho'});
  } else {
    bot.user.setActivity(config.activity.game, {type: 'WATCHING'}); //PLAYING, LISTENING, WATCHING.
    bot.user.setStatus('online'); // DND, IDLE, ONLINE, INVISIBLE.
  }
});

// LOAD COMMAND'S ONPY.
// sωıтcн.
bot.commands = new discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("os commandos estão sendo carregados...");

  console.log(`caregando ${jsfiles.length} commands...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

// MESSAGE EVENTOS.
// sωıтcн.
bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(bot, message, args);
});

bot.on("guildMemberAdd", member => {
  let channel = member.guild.channels.find('name', '✔※chat-geral');
   channel.send(`${member}` + ' Seja bem vindo:cupid: ao  THE SENSE :wink: ai, Chame seus amiguinhos e espero que tenha trazido Cerveja :beer::beers::beer::beers:')
 });


bot.login(config.token);
