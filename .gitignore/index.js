const Discord = require('discord.js')
const bot = new Discord.Client()

let prefix = "!"


        
bot.on('message', function (message) {
    if (message.content === '!help') {
        message.channel.send(' Les Commandes sont disponibles avec le préfix **!** : ')
        message.channel.send(' **site**, **shop**, **regle**, **cgv** ')
            
    }
 })

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('540621591479058445').send(' Bienvenue ' + member.user + ' dans la Secte. ')
    member.guild.channels.get('540621591479058445').send('Nous sommes désormais ' + member.guild.memberCount );
    member.addRole('540179472872374272')
 })


bot.on('guildMemberRemove', member => {
   member.guild.channels.get('146281705949364224').send(' En Revoir ' + member.user + ' en dehors de la Secte.' );
})

bot.on('message', function (message) {
    if (message.content === '!site') {
        message.channel.send('https://www.wherecraft.eu')
    }
 })

bot.on('message', function (message) {
    if (message.content === '!shop') {
        message.channel.send('https://www.wherecraft.eu/shop')
    }
 })

bot.on('message', function (message) {
    if (message.content === '!regle') {
        message.channel.send('https://www.wherecraft.eu/p/regles')
    }
 })

bot.on('message', function (message) {
    if (message.content === '!cgv') {
        message.channel.send('https://wherecraft.eu/p/cgu-cgv')
    }
 })


bot.on('message', function (message) {
    if (message.content === '!numberplayer') {
        message.channel.send( 'Il y a ' + message.guild.memberCount + ' joueurs sur le serveur Discord ;)')
    }
 })

 bot.on('ready', function () {
    bot.user.setActivity('Commande : !help').catch(console.error)
 })

 bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenue dans la secte de **WhereCraft** ! Bienvenue parmis nous ' + member.displayName )
 
    }).catch(console.error)
 })


bot.login(process.env.TOKEN);
