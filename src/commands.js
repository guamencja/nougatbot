const fs = require('fs');
const log = require("./logger");

const COMMAND_DIR = `${__dirname}/commands/`;
function load(bot) {
    // looking for commands to load
    const files = fs.readdirSync(COMMAND_DIR);
    const commandFiles = files.filter(file => file.endsWith('.js'));
        
    // loading the commands
    for (const file of commandFiles) {
        const command = require(COMMAND_DIR + file);
        bot.command(command.name, (ctx) => {
            // handling command arguments here, so there is no need to parse them every time in command files
            ctx.args = ctx.update.message.text.split(" ").slice(1);
            command.run(ctx);
        });
        log.info(`Loaded /${command.name}`);
    }
}

module.exports = {
    load
};