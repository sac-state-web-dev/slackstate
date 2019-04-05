const { bot, client } = require('./events.js')

const cow = require('cowsay')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

bot.on('ping', msg =>
{
    if (!muted) msg.channel.send('Pong!')
})

bot.on('google', msg =>
{
    if (!muted)
    {
        let lmgtfy = 'https://lmgtfy.com/?q='

        msg.words.slice(1, -1).forEach(term =>
        {
            lmgtfy += `${term}+`
        })

        lmgtfy += msg.words[msg.words.length - 1]

        msg.channel.send(lmgtfy)
    }
})

bot.on('lit', msg =>
{
    if (!muted) msg.channel.send('🔥🔥🔥')
})

let muted = false

bot.on('mute', msg =>
{
    if (!muted)
    {
        muted = true
        msg.channel.send('🙊🤐')
    }
})

bot.on('unmute', msg =>
{
    muted = false
    msg.channel.send('🗣️🎙️')
})

bot.on('cowsay', msg =>
{
    let cow_message = 'moo'
    if (msg.words.length < 2)
    {
        if (msg.previous != null)
        {
            cow_message = msg.previous.content
        }
    }
    else
    {
        cow_message = msg.words.slice(1).join(' ')
    }
    
    msg.channel.send(
        "```\n" +
        cow.say({ text: cow_message }) +
        "\n```")
})

client.login(process.env.BOT_TOKEN)
