// COMANDO EVENTO > VIP
// sωıтcн
const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    var prefix = "++"

if (!message.guild)return;
if (message.author !== '476533548224872449' && !message.content.startsWith(prefix + 'evento')) return;
if (message.content.startsWith(prefix + 'evento')){
var embed = new Discord.RichEmbed()
embed.setTitle('Evento UA: '+message.guild.name)
embed.setImage('https://cdn.discordapp.com/attachments/479020123496251392/479020186784104450/9aafbc04-23e7-456d-a7d5-59c5c665d630.gif')
// EMBED IMAGEM DO AUTHOR > BACKGROUND
embed.setColor(65535)
// EMBED IMAGEM DO AUTHOR > ICON
embed.setThumbnail('https://theblueraft.files.wordpress.com/2010/08/aang.jpg')
var desc = message.content.split(' ')
desc.shift()
for (var i=0; i  < message.guild.members.size;i++){
var member = message.guild.members.array()[i]
embed.setDescription(`${desc.join(' ')}`)
member.send({embed})
}}

}
module.exports.help = {
    name: "evento"
}