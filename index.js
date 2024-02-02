import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import postCron from './postCron.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

// 設定 BOT 狀態
client.on('ready', () => {
    client.user.setPresence({ activities: [{ name: '洋三愛愛GAME' }], status: 'online' });

    console.log(`Logged in as ${client.user.tag}!`);
});

// 命令
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'bot-info') {
        interaction.reply(
            `機器人名稱：${client.user.username}\n` +
            `機器人ＩＤ：${client.user.id}\n` +
            `機器人版本：4.32\n`
        )
    }

    if (interaction.commandName === 'server-info') {
        interaction.reply(
            `伺服器名稱：${interaction.guild.name}\n` +
            `伺服器ＩＤ：${interaction.guild.id}\n` +
            `伺服器創建時間：<t:${~~(interaction.guild.createdTimestamp / 1000)}:R>\n` +
            `伺服器簡介：${interaction.guild.description ?? "洋三愛愛"}\n` +
            `伺服器擁有者：<@${interaction.guild.ownerId}>\n` +
            `伺服器人數：${interaction.guild.memberCount}\n`
        )
    }

    if (interaction.commandName === 'youmitsu') {
        interaction.reply(
            `洋三愛愛`
        )
    }

});


// 每日排程
client.once(Events.ClientReady, () => {
    console.log('Corn Ready!');
    postCron(client).start();
});

client.login(process.env.TOKEN);