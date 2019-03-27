const { bot, client } = require('./events.js')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

bot.on('ping', msg =>
{
    msg.channel.send('Pong!')
})

bot.on('google', msg =>
{
    let lmgtfy = 'https://lmgtfy.com/?q='

    msg.words.slice(1, -1).forEach(term =>
    {
        lmgtfy += `${term}+`
    })

    lmgtfy += msg.words[msg.words.length - 1]

    msg.channel.send(lmgtfy)
})

bot.on('lit', msg =>
{
    msg.channel.send('🔥🔥🔥')
})

client.login(process.env.BOT_TOKEN)
