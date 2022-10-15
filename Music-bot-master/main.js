// Requirements and Variables
require('dotenv').config();
const keepAlive = require(`./server`);
const { Client } = require('discord.js');
const client = new Client({ intents: 32767 });
const { Player } = require('discord-player');
const { Client, GatewayIntentBits } = require('discord.js');

// Array of Command objects
const cmds = [{
    name: `ping`, // Command name
    description: `Ping!`, // Command description
    async execute(interaction) { // Execute function
        await interaction.reply({
            content: `Pong.`
        });
    }
}]

// Interaction Create Event
client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) {
        await cmds.forEach(async command => {
            if (interaction.commandName == command.name) {
                try {
                    await command.execute(interaction);
                } catch (error) {
                    console.error(error);
                }
            }
        });
    }
});

// Ready Event
client.on('ready', async () => {
    console.log(`Testing bot is now online successfully!`);
    await client.guilds.cache
            .get(process.env['serverId'])
            .commands.set(cmds);
});

global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
   disableMentions: 'everyone',
});

// Bot Login
client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

client.login(client.config.app.token);
keepAlive();