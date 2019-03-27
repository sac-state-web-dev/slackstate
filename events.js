const Discord = require('discord.js')
const client = new Discord.Client()

require('dotenv').config()

const EventEmitter = require('events')
const bot = new EventEmitter()

module.exports = { bot, client }

client.on('message', msg =>
{
    // Split the message on whitespace, then remove the whitespace tokens
    // Store it in `msg.words` so it will be passed to the listener
    msg.words = msg.content.split(/(\s+)/).filter(e => e.trim().length > 0)

    if (msg.words[0].match(/ping[^a-zA-Z\d]*/i))
    {
        bot.emit('ping', msg)
    }

    if (msg.words[0].match(/google/i))
    {
        bot.emit('google', msg)
    }

    if (msg.words[0].match(/lit[^a-zA-Z\d]*/i))
    {
        bot.emit('lit', msg)
    }

    if (msg.isMentioned(client.user))
    {
        if (msg.words[1].match(/^mute$/gi))
        {
            bot.emit('mute', msg)
        }
        else if (msg.words[1].match(/unmute/i))
        {
            bot.emit('unmute', msg)
        }
    }
})
