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
    msg.channel.send(
        "```\n" +
        cow.say({ text: msg.words.slice(1).join() }) +
        "```")
})

client.login(process.env.BOT_TOKEN)
