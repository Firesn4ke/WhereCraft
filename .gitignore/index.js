const { Client, RichEmbed } = require('discord.js');
const bot = new Client({ disableEveryone: true })

 bot.on('guildMemberAdd', member => {
    member.guild.channels.get('554081631279906827').send(' Bienvenue ' + member.user + ' dans la Secte. ')
    member.guild.channels.get('554081631279906827').send('Nous sommes désormais ' + member.guild.memberCount );
    member.addRole('569664315460943872')
 })
