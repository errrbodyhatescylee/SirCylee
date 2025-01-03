//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "cadillaccylee111@gmail.com";
global.location = "Johannesburg, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/errrbodyhatescylee/Queen_Kylie-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/purbus.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27615045572";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/lt92j5.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "27615045572";
global.auto_bio = process.env.AUTO_BIO || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kylie-session-ll.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0Fvc0JPdFBuVlg4RDlQNkRRMEJDWDhlMmtzcW5aR28xU1ZOTnVUOXBITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1hFTk9sUXk0NFprRXhydzB0a0ErYnVoQXByVExGL05CYkxrRUlZdjlUUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RDhrcytLYUFicG96TVErQnI0KzVGRS9oYnFZQzllbWNHQ3BzYkVBRUcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaZ2crbUV1blJ5MC9jbGtwUkRZUG8vbTJoc3pER1pZd2U0NnRNaXNuVHdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNN1grcVBsVXE2Z1RFVkhBV1hxeDBVa1p2U3Q3Q3g1TW9xWDlXaXcvSFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBnQy9pZW5yN3ZGS0NLOUdvSUNobE5TUDlmVW1JL2VZOWVoeFI4bVYwVFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0pGaTIzR0xMMDJ2bUowK3l4Y2dEZjZDRXZLSnZNR1hRQU1CODV3YXdGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmhtY1lSY1JyRFcrK2Q4TXlwTFVCellGYmJvc1FKQ3pMU3VUVy9KMVZrZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRJdzVKRlhyZjR4dmg1Z2JaQllzTXJYVEkxcG1mdFgyejViTHE3QjdpcHIySEFiNFo1MzA1cTBySmZYelcwY1Y5NHV5WnE5NGw3a0UxcXhSU1lRY2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTUsImFkdlNlY3JldEtleSI6InE3NklSVDRRZ2I5UEVFMGhnd1RRaXFjbzlaTTJKUFAzRHNDL2YvZy84ZWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik1NT0hkLUFvUlFpV3VjSE1EZEhWb3ciLCJwaG9uZUlkIjoiMjEwODU4ZmItNDc2Yi00MmY5LTlkMDMtNzg2ZjMwOWE2Y2ZiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpNSzQ0U0tuMzY5RmU4a3A4bS9VVmgrWXgvWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1dWNlVlVmdnFuU2Q1eld2UWNWV09ZUjE3eDQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWkhUTDI3VFkiLCJtZSI6eyJpZCI6IjI3NjE1MDQ1NTcyOjUwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKM1g5WjRFRUtmVzJic0dHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjYWplWnIzOVBwMjhaUEVDaU5RR2tjejJQQnNGckV0cTJqZEVnSzRKVm1zPSIsImFjY291bnRTaWduYXR1cmUiOiJBc214dmpzblo3a01ESlBhenBwSHVwV1g2ZC9mZjlGOGhDVjY4OFRkOEJNSXROenZwWlFyU2NDQkM3QU55dTZpbGY5cWtudW4vbTh6WHJFeG5RZ2dBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoialY1UllTSnpBZkxYR0ZGbjhQbE9ZWDNpVldyUExLcUNIdnNYU1dpd1BMMXJXT1JRUzZ4VzBFMmZvVXg1ZGVrR0RxNS9oemR6MjB0SEJNeUtyRjFqZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzYxNTA0NTU3Mjo1MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYR28zbWE5L1Q2ZHZHVHhBb2pVQnBITTlqd2JCYXhMYXRvM1JJQ3VDVlpyIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1ODEzOTQwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUszbiJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_KYLIE-V1👸❤️🧸™`",
  author: process.env.PACK_AUTHER || "Kylie",
  packname: process.env.PACK_NAME || "Sir Cylee",
  botname: process.env.BOT_NAME || "QUEEN_KYLIE",
  ownername: process.env.OWNER_NAME || "Sir Cylee ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "true",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "k y l i e").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
