const run = (ctx) => {
    const text = ctx.args.join(" ");
    ctx.reply(text.split("").reverse().join(""))
}

module.exports = {
    name: 'reverse',
    run,
};