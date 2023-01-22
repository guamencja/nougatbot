const run = (ctx) => {
    let issuer = ctx.from.first_name;
    let sued = ctx.args[0];
    let reason = ctx.args.slice(1).join(' ');
    
    if (ctx.message.entities[1]?.type != 'mention' && ctx.message.entities[1]?.type != 'text_mention') {
        // lil trollin
        issuer = ctx.botInfo.first_name;
        sued = ctx.update.message.from.first_name;
        reason = 'being dumb';
    }

    ctx.reply(`${issuer} has sued ${sued} for ${reason}`, { parse_mode: 'markdown' });
}

module.exports = {
    name: 'sue',
    run,
}