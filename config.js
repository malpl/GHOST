const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "tcxC1DiD#PVwZs87akh70Inf_AFSGAoY0oVjUFru8nbOHQWZkNSs",
MONGODB: process.env.MONGODB || "mongodb://mongo:MfPJLADhRWNHvxuOORrlmfJHboedaADB@junction.proxy.rlwy.net:57828",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/5hYWrRH/thumb.png",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi GHOST-MD Is Online Now 💻\n*💻 Owner* - GHOST-MD\n\n*💻 Owner Number* -201030825867",
SUDO_NB: process.env.SUDO_NB || "201030825867",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
