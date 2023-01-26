const { EmbedBuilder } = require("discord.js");
const ms = require("ms");

module.exports = {
  name: "ping",
  description: "Ping of the bot",
  aliases: ["latency"],
  cooldown: 3,
  run: async (client, message, args) => {
    message.channel.send({
      embeds: [
        new EmbedBuilder()
        .setTitle(`Calculating Ping...`)
        .setDescription(
            `**⏱️ WS Ping : \`${client.ws.ping} MS\`
        
        ⏳ Latency : \`${Date.now() - message.createdTimestamp - 50} MS\`
    
        ⚙️ Uptime : ${ms(client.uptime)}**`)
        .setColor(client.color)
      ],
      content: `**🏓 Pong!**`,
    });
  },
};
