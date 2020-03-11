const { Client, RichEmbed } = require('discord.js');
const bot = new Client({ disableEveryone: true })

bot.login(process.env.TOKEN);
