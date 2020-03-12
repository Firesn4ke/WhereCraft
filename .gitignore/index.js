const { Client, RichEmbed } = require('discord.js');
const bot = new Client({ disableEveryone: true })

let prefix = "!"

bot.login(process.env.TOKEN);

bot.on('message', function (message) {
    if (message.content === '!help') {
        message.channel.send('Les Commandes disponibles sont **!numberplayer, !overwatch(pas utile), !streamowl, !streamowlen, !tweetow, !tweetowen, !ytow, !ytowen !stats,** ')
    }
 })

bot.on('message', function (message) {
    if (message.content === '!piece') {
  
  const rando_imgs = [
        'Face',
        'Pile',
]
        message.channel.send(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
    }
 })

bot.on('message', function (message) {
    if (message.content === '!info') {

    var info = new RichEmbed()
    
    .setTitle(`**Toutes les infos sur Wherecraft**`)
    .setDescription(`Wherecraft est un serveur Minecraft moddé Survie & Automatisation.\n  Le serveur n’est disponible que avec le launcheur disponible avec la commande **!launcheur** (pas encore disponible) !`)
    .addField(`**Les liens importants :**`, `[Le Site](http://www.wherecraft.eu/)\n[Twitter Officiel](???)\n[La Boutique](???)`)
    .setColor('#65e66e')
    message.channel.send(info)
    
  }
})

  
bot.on('message', function (message) {
    if (message.content.startsWith('!avatar')) {

	const membre = message.mentions.users.first() || message.author;

        var embed = new RichEmbed()
        .setTitle(`Avatar de **${membre.username}**`)
        .setDescription(`[Télécharger](${membre.displayAvatarURL})`)
        .setImage(membre.displayAvatarURL)
    
        message.channel.send(embed)
    }
})

bot.on('message', function (message) {
    if (message.content === '!de') {
  const rando_imgs = [
        'http://dobbelsteen.virtuworld.net/img/1c.gif',
        'http://dobbelsteen.virtuworld.net/img/2c.gif',
	'http://dobbelsteen.virtuworld.net/img/3c.gif',
	'http://dobbelsteen.virtuworld.net/img/4c.gif',
	'http://dobbelsteen.virtuworld.net/img/5c.gif',
	'http://dobbelsteen.virtuworld.net/img/6c.gif',
]
        message.channel.send(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
    }
 })

bot.on('message', function (message) {
    if (message.content === '!b') {
	message.channel.bulkDelete(parseInt(1))
	message.reply('vous souhaite la bienvenue !')
    }
 })

bot.on('message', function (message) {
	
    if (message.content === '!salthoho') {
	message.channel.bulkDelete(parseInt(1))
	message.channel.send('Salt de Hohocraft détecté')
        message.channel.send('https://cdn.discordapp.com/attachments/550368143923740712/582196877353549828/Hoho_Salt.png')	    
    }
	
else if (message.content === '!saltlucas') {
	message.channel.bulkDelete(parseInt(1))
	message.channel.send('Salt de Lucasaw détecté')
        message.channel.send('https://cdn.discordapp.com/attachments/548954229365014532/582251637800960000/Salt-baeLucasaw.png')
    }

else if (message.content === '!saltzey') {
	message.channel.bulkDelete(parseInt(1))
	message.channel.send('Salt de ZeyliX détecté')
        message.channel.send('https://cdn.discordapp.com/attachments/550368143923740712/582260292784881780/Salt-baeZeylix.png')
    }
	
else if (message.content === '!saltyuri') {
	message.channel.bulkDelete(parseInt(1))
	message.channel.send('Salt de Yurika détecté')
        message.channel.send('https://cdn.discordapp.com/attachments/550368143923740712/582260327392084033/Salt-baeYurika.png')
    }
	
else if (message.content === '!saltpyro') {
	message.channel.bulkDelete(parseInt(1))
	message.channel.send('Salt de Pyrolaze détecté')
        message.channel.send('https://cdn.discordapp.com/attachments/550368143923740712/582260327534559242/Salt-baePyro.png')
    }
	
else if (message.content === '!saltchevre') {
	message.channel.bulkDelete(parseInt(1))
	message.channel.send('Salt de LaChèvre détecté')
        message.channel.send('https://cdn.discordapp.com/attachments/550368143923740712/582260328281407489/Salt-baeLaChevre.png')
    }
	
else if (message.content === '!saltblaz') {
	message.channel.bulkDelete(parseInt(1))
	message.channel.send('Salt de Blazrock détecté')
        message.channel.send('https://cdn.discordapp.com/attachments/550368143923740712/582260328323088386/Salt-baeBlazrock.png')
    }
	
else if (message.content === '!saltlacer') {
	message.channel.bulkDelete(parseInt(1))
	message.channel.send('Salt de Lacer détecté')
        message.channel.send('https://cdn.discordapp.com/attachments/550368143923740712/582264285951033364/Salt-baeLacer.png')
    }

else if (message.content === '!saltnitro') {
	message.channel.bulkDelete(parseInt(1))
	message.channel.send('Salt de NitrOmega détecté')
        message.channel.send('https://cdn.discordapp.com/attachments/540589880250597376/582608869356732446/Salt-baeNitro.png')
    }
	
 })


bot.on('message', function (message) {
    if (message.content === '!streamowl') {
        message.channel.send('https://www.twitch.tv/overwatchleague_fr')
    }
 })

bot.on('message', function (message) {
    if (message.content === '!tweetow') {
        message.channel.send('https://twitter.com/OverwatchFR')
    }
 })

bot.on('message', function (message) {
    if (message.content === '!tweetowen') {
        message.channel.send('https://twitter.com/PlayOverwatch')
    }
 })

bot.on('message', function (message) {
    if (message.content === '!ytow') {
        message.channel.send('https://www.youtube.com/channel/UC8fDAVEut58sjBXMiU76yQw')
    }
 })

bot.on('message', function (message) {
    if (message.content === '!ytowen') {
        message.channel.send('https://www.youtube.com/channel/UClOf1XXinvZsy4wKPAkro2A')
    }
 })

bot.on('message', function (message) {
    if (message.content === '!carrh') {
        message.channel.send('Veuillez taper la commande **!carr** ainsi que votre **Battletag** (en remplacant le **#** par un **-**) et avoir la carriere en publque')
    }
 })

const uneCommande = '!carr '

bot.on('message', message => {
  if (message.content.startsWith(uneCommande)) {
    const str = message.content.substring(uneCommande.length)
    const lien = 'https://playoverwatch.com/fr-fr/career/pc/'
    message.channel.sendMessage(lien+str)
  }
});

const min = '!min'

bot.on('message', message => {
  if (message.content.startsWith(min)) {
    const str = message.content.substring(min.length)
     const lien = '1 minutes de silence pour'
    message.channel.bulkDelete(parseInt(1))
    message.channel.sendMessage(lien+str)
  }
});

const tell = '!tell'

bot.on('message', message => {
  
  if (message.content.startsWith(tell)) {
if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
    const str = message.content.substring(tell.length)
    message.channel.bulkDelete(parseInt(1))
    message.channel.sendMessage(str)
  }
});

bot.on('message', function (message) {
    if (message.content === '!streamowlen') {
        message.channel.send('https://www.twitch.tv/overwatchleague')
    }
 })

bot.on('message', function (message) {
    if (message.content === '!overwatch') {
        message.channel.send(':heart: Blackwatch :heart:')
    }
 })

bot.on('message', function (message) {
    if (message.content === '!numberplayer') {
        message.channel.send( 'Il y a ' + message.guild.memberCount + ' joueurs :video_game: sur ce serveur')
    }
 })

 bot.on('ready', function () {
    bot.user.setActivity('!info').catch(console.error)
 })

 bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenue dans la secte Overwatch ' + member.displayName + '!' )
	  
    }).catch(console.error)
 })    
 
 bot.on('guildMemberAdd', member => {
    member.addRole('540179472872374272')
 })

 bot.on('guildMemberAdd', member => {
	 
        var embed = new RichEmbed()
        .setColor('#ff9900')
	.setThumbnail('https://cdn.discordapp.com/attachments/566596689906106373/588877537757888533/586273b931349e0568ad89df.png')
	.setImage('https://media.discordapp.net/attachments/541759242580000768/591212333473202186/image0.gif')
	.addField('Overwatch (Fr)', 'Bienvenue ' + member.user + ' dans la Secte. ')
	.addField('--------------------', 'Nous sommes désormais ' + member.guild.memberCount, true);
	 
         member.guild.channels.get('540621591479058445').send(embed)
 })
	    
 bot.on('guildMemberRemove', member => {
   member.guild.channels.get('540621591479058445').send(' En Revoir ' + member.user + ' en dehors de la Secte.' );
})
	    
bot.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = args[1]
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(parseInt(count) + 1)
    }
 
    if (args[0].toLowerCase() === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Membre introuvable")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne peux pas mute ce membre")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' a été mute :white_check_mark:')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then((role) => {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' a été mute :white_check_mark:')
            })
        }
    }
})
// Configuration & Settings
const yourID = "413334310561513472"; //Instructions on how to get this: https://redd.it/40zgse
const setupCMD = "!createrolemess"
const initialMessage = `**React to the messages below to receive the associated role. If you would like to remove the role, simply remove your reaction!**`;
const embedMessage = `
Veuillez sélectionner votre rang dans Overwatch à l'aide des réactions.
Si votre rang a changé, veuillez retirer votre ancien emoji pour un nouveaux.
`;
const embedFooter = "Role Reactions"; // Must set this if "embed" is set to true
const roles = ["Bronze", "Argent", "Or", "Platine", "Diamant", "Master", "GrandMaster", "Top500"];

const oui = "<:bronze:540881103494447114>"

const reactions = [ oui, "😬", "😁", "😂", "😃", "😄", "😅", "😆"];
const embed = true; // Set to "true" if you want all roles to be in a single embed
const embedColor = "#dd2423"; // Set the embed color if the "embed" variable is set to true
// If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";
// Function to generate the role messages, based on your settings
function generateMessages() {
    let messages = [];
    for (let role of roles) messages.push(`React below to get the **"${role}"** role!`); //DONT CHANGE THIS
    return messages;
}
// Function to generate the embed fields, based on your settings and if you set "const embed = true;"
function generateEmbedFields() {
    return roles.map((r, e) => {
        return {
            emoji: reactions[e],
            role: r
        };
    });
}
// Client events to let you know if the bot is online and to handle any Discord.js errors
bot.on("ready", () => console.log("Bot is online!"));
bot.on('error', console.error);
// Handles the creation of the role reactions. Will either send the role messages separately or in an embed
bot.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD) {
        if (!embed) {
            message.channel.send(initialMessage);
            const toSend = generateMessages();
            toSend.forEach((role, react) => {
                message.channel.send(role).then(m => {
                    m.react(reactions[react]);
                });
            });
        } else {
            const roleEmbed = new RichEmbed()
                .setDescription(embedMessage)
                .setFooter(embedFooter);
            if (embedColor) roleEmbed.setColor(embedColor);
            const fields = generateEmbedFields();
            for (const f of fields) roleEmbed.addField(f.emoji, f.role, true);
            message.channel.send(roleEmbed).then(async m => {
                for (let r of reactions) await m.react(r);
            });
        }
    }
});
// This makes the events used a bit more readable
const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};
// This event handles adding/removing users from the role(s) they chose
bot.on('raw', async event => {
    if (!events.hasOwnProperty(event.t)) return;
    const { d: data } = event;
    const user = bot.users.get(data.user_id);
    const channel = bot.channels.get(data.channel_id);
    const message = await channel.fetchMessage(data.message_id);
    const member = message.guild.members.get(user.id);
    const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
    const reaction = message.reactions.get(emojiKey);
    let embedFooterText;
    if (message.embeds[0]) embedFooterText = message.embeds[0].footer.text;
    if (message.author.id === bot.user.id && (message.content !== initialMessage || (message.embeds[0] && (embedFooterText !== embedFooter)))) {
        if (!embed) {
            const re = `\\*\\*"(.+)?(?="\\*\\*)`;
            const role = message.content.match(re)[1];
            if (member.id !== bot.user.id) {
                const roleObj = message.guild.roles.find(r => r.name === role);
                if (event.t === "MESSAGE_REACTION_ADD") {
                    member.addRole(roleObj.id);
                } else {
                    member.removeRole(roleObj.id);
                }
            }
        } else {
            const fields = message.embeds[0].fields;
            for (let i = 0; i < fields.length; i++) {
                if (member.id !== bot.user.id) {
                    const role = message.guild.roles.find(r => r.name === fields[i].value);
                    if (fields[i].name === reaction.emoji.name) {
                        if (event.t === "MESSAGE_REACTION_ADD") {
                            member.addRole(role.id);
                            break;
                        } else {
                            member.removeRole(role.id);
                            break;
                        }
                    }
                }
            }
        }
    }
});
