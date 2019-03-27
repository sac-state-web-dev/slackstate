const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
require('dotenv').config()

client.on('ready', () =>
{
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', m =>
{
    // Split the message on whitespace, then remove the whitespace tokens
    const msg = m.content.split(/(\s+)/).filter( e => e.trim().length > 0)

    if (msg[0].match(/ping[^a-zA-Z\d]*/i))
    {
        m.reply('Pong!')
    }

    if (msg[0].match(/google/i))
    {
        let lmgtfy = 'https://lmgtfy.com/?q='
        
        msg.slice(1, -1).forEach(term =>
            {
                lmgtfy += `${term}+`
            })

        lmgtfy += msg[msg.length-1]

        m.reply(lmgtfy)
    }

    if (msg[0].match(/lit[^a-zA-Z\d]*/i))
    {
        m.channel.send('🔥🔥🔥');
    }
})

client.login(process.env.BOT_TOKEN)
