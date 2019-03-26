const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () =>
{
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg =>
{
    if (msg.content === 'ping')
    {
        msg.reply('Pong!')
    }
})

client.login('NTU5OTk3ODU5NzE4NjI3MzI4.D3tv-w.6htOMH2Tr6y--X_EtLLup5J-Ohw')
