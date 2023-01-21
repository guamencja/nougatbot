const TYPES = [
    '\x1b[90m[*]\x1b[0m', // INFO
    '\x1b[31m[*]\x1b[0m', // ERROR
]

const log = (lvl, ...msg) => {
    const now = new Date();
    console.log(`${now.toLocaleString()} ${TYPES[lvl]} ${msg.join(" ")}`)
}

const info = (...msg) => log(0, msg);
const error = (...msg) => log(1, msg);

module.exports = {
    info, 
    error,
};