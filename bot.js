const Discord = require('discord.js');
const client = new Discord.Client();

client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('499247001003884544');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online : ${currentSize} `);
  if (currentSize !== size) channel.setName(`Voice Online : ${currentSize} `);
});

client.on ("guildMemberAdd", member => {

   var role = member.guild.roles.find ("name", "Online Players");
   member.addRole (role);

})

client.on ("guildMemberRemove", member => {

})

client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord.gg')){
        message.reply (' ')
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted')); 
        
    }
    }
})

client.on('message', msg => {

    if (msg.content == '#join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('✅'));
     }
    }
}
})
client.on('ready', () => { 
    client.channels.get("499247001003884544").join();
    });
    
client.login(process.env.BOT_TOKEN);
