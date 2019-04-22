const { Client, RichEmbed } = require('discord.js');
const bot = new Client({ disableEveryone: true })

 bot.on('guildMemberAdd', member => {
    member.addRole('569664315460943872')
 })
