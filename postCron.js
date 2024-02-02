import cron from 'cron';
import dotenv from 'dotenv';

dotenv.config();

// 接收 client 作為參數
const postCron = (client) => {
    // 建立 job
    const job = new cron.CronJob('02 12,18 * * *', async () => {
        // 取得頻道
        const channel = client.channels.cache.get(process.env.aiaiId);
        // 發送訊息
        await channel.send('洋三愛愛');
    });

    const job2 = new cron.CronJob('02 20 * * *', async () => {
        const channel = client.channels.cache.get(process.env.testId);
        await channel.send('今天畫圖ㄇ');
    });

    // 回傳 job
    return job,job2;
}


export default postCron;