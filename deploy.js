import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const commands = [
    {
        name: 'bot-info',
        description: '查看機器人的資訊',
    },
    {
        name: 'server-info',
        description: '查看伺服器的資訊',
    },
    {
        name: 'youmitsu',
        description: '洋三愛愛',
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(process.env.ID), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();