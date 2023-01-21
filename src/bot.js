const { Telegraf } = require('telegraf');
const commands = require('./commands');

const bot = new Telegraf(process.env.TOKEN);
commands.load(bot);
bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));