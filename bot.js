const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')

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

/**
 * Discord uses a token system to determine what app controls what bot.
 * Your app must "log in" as a bot using that bot's access token.
 * See README.md for more information.
 */

if (fs.existsSync('tokenfile'))
{
    /**
     * For development purposes, you will need your own access token, linked to
     * your own bot. This access token should be put in a file called
     * 'tokenfile' (no extension) in the root directory of this project.
     * Note: 'tokenfile' is excluded from git commits. This is so that the main
     * server on heroku does not read your token and log in as your dev-bot.
     */
    const token = fs.readFileSync('tokenfile', 'utf8')

    client.login(token)
}
else
{
    /**
     * This is the access token for the main bot, which is hosted on heroku.
     * You need to override this by having a 'tokenfile' with your own access
     * token, as described above, and in the README.
     */
    client.login('NTU5OTk3ODU5NzE4NjI3MzI4.D3tv-w.6htOMH2Tr6y--X_EtLLup5J-Ohw')
}

