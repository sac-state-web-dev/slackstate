const Discord = require('discord.js')
const client = new Discord.Client()

require('dotenv').config()

const EventEmitter = require('events')
const bot = new EventEmitter()

module.exports = { bot, client }

let previous_message = null

client.on('message', msg =>
{
    // Split the message on whitespace, then remove the whitespace tokens
    // Store it in `msg.words` so it will be passed to the listener
    msg.words = msg.content.split(/(\s+)/).filter(e => e.trim().length > 0)

    msg.previous = previous_message

    if (msg.isMentioned(client.user))
    {
        if (msg.words[1].match(/^mute$/i))
        {
            bot.emit('mute', msg)
        }
        else if (msg.words[1].match(/^unmute$/i))
        {
            bot.emit('unmute', msg)
        }
    }

    if (!bot.muted)
    {
        if (msg.words[0].match(/^ping[^a-zA-Z\d]*$/i))
        {
            bot.emit('ping', msg)
        }

        if (msg.words[0].match(/^google$/i))
        {
            bot.emit('google', msg)
        }

        if (msg.words[0].match(/^lit[^a-zA-Z\d]*$/i))
        {
            bot.emit('lit', msg)
        }

        

        if (msg.words[0].match(/^cowsay$/i))
        {
            bot.emit('cowsay', msg)
        }

        if (msg.words[0].match(/^hello$/i) && msg.words[1] &&
            msg.words[1].match(/^there[^ a - zA - Z\d]*$/i))
        {
            bot.emit('hello there', msg)
        }
    }
    previous_message = msg
})
