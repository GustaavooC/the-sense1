const discord = require('discord.js');

module.exports.run = async (client,message,args)=>{
    var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermissions("BAN_MEMBERS")) return message.reply("você não tem permissão de usar esse comando |🎉")
    if(message.mentions.users.size < 1) return message.reply("você não mencinou ninguém |🎉")
    if(!message.guild.member(usuario).bannable) return message.reply("eu não posso banir essa pessoa |🎉")
    if(razão.length < 1) return message.reply("você não colocou uma razão |🎉")

    message.guild.member(usuario).ban()

   var discord = require ('discord.js')

   var embed = new discord.RichEmbed()
   .setColor('RANDOM')
   .addField(":rage: ᴜsᴀʀɪᴏ ʙᴀɴɪᴅᴏ ᴅᴏ sᴇʀᴠᴇʀ",usuario.username,)
   .addField(":smiling_imp: ʀᴀᴢᴀᴏ ᴅᴏ ʙᴀɴ", razão);

   message.channel.send(embed)
}

module.exports.help = {
    name: 'tsban'
};