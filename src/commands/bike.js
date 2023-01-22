const Canvas = require('canvas');
const fs = require('fs');

const run = async (ctx) => {
    // get user profile photo
    const pfp = await ctx.telegram.getUserProfilePhotos(ctx.from.id);
    const pfpURL = await ctx.telegram.getFileLink(pfp.photos[0][0].file_id);

    // loading resources and creating canvas
    const pfpImage = await Canvas.loadImage(pfpURL.href);
    const background = await Canvas.loadImage(`${__dirname}/../img/bike.jpg`);
    const canvas = Canvas.createCanvas(background.width, background.height);
    const context = canvas.getContext('2d');

    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    context.drawImage(pfpImage, 480, 210, 156, 156); // drawing pfp onto the background

    // save and send
    fs.writeFileSync(`${__dirname}/.../temp/image.jpg`, canvas.toBuffer('image/jpeg'));
    ctx.replyWithPhoto({ source: `${__dirname}/.../temp/image.jpg` }, {caption: `${ctx.from.first_name} has fell off a bike lmao`}); // how am i supposed to translate polish metaphores into english with the sense preserved
}

module.exports = {
    name: 'bike',
    run,
}