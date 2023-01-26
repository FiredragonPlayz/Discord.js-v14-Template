const { ApplicationCommandType, EmbedBuilder } = require('discord.js');
const ms = require("ms");

module.exports = {
    name: 'ping',
    description: 'API Ping of the Bot',
    cooldown: 3,
    type: ApplicationCommandType.ChatInput,
    async execute(client, interaction, args){
        interaction.reply({
            embeds: [
    new EmbedBuilder()
    .setTitle(`Calculating Ping...`)
    .setDescription(
        `**⏱️ WS Ping : \`${client.ws.ping} MS\`
    
    ⏳ Latency : \`${Date.now() - interaction.createdTimestamp - 50} MS\`

    ⚙️ Uptime : ${ms(client.uptime)}**`)
    .setColor(client.color)
            ],
            content: `**🏓 Pong!**`,
          });
    }
};