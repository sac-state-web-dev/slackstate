const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () =>
{
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', m =>
{
    // Split the message on whitespace, then remove the whitespace tokens
    const msg = m.content.split(/(\s+)/).filter( e => e.trim().length > 0)

    if (msg.length == 0) return

    console.log(msg.length)
    console.log(msg)

    if (msg[0].toLowerCase() === 'ping')
    {
        m.reply('Pong!')
    }

    if (msg[0].toLowerCase() === 'google')
    {
        let lmgtfy = 'https://lmgtfy.com/?q='
        
        msg.slice(1, -1).forEach(term =>
            {
                lmgtfy += `${term}+`
            })

        lmgtfy += msg[msg.length-1]

        m.reply(lmgtfy)
    }
})

// This is the key that identifies this code with the bot on Discord's servers.
// Without this code, you can't actually connect to the server and do things.
// Note that it is technically a security risk to have this available to the
// public, because anyone at all can modify the code and connect to the server
// with it. At the moment though, the bot only has permissions to write messages
// so I'm not too worried about it.
client.login('NTU5OTk3ODU5NzE4NjI3MzI4.D3tv-w.6htOMH2Tr6y--X_EtLLup5J-Ohw')
