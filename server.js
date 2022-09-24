const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

client.on("ready", () => console.log("Ready"));

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  message.channel.send({
    embeds: [
      new EmbedBuilder()
        .setDescription("Hello, world")
        .setTitle("O vai tomar no cu"),
    ],
  });
});

client.login(token);
