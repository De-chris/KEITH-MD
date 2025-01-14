/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0NPcVhSRzN6cy85bURJdzZ3Q3k3N2ZlT3QvendtUFprK3hvazlwZ0ZGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjI3SmNrazZPMmpVeXdjY1kycHdiNmNSUzVxemlTYXR1U1YxdjlSRDRGND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRThkMThiV1J2ZkcyNkNQZTZaUzBtNnFoNExxNVp1T20venJiZGdZTTJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Uk9BZEU3WVk1ZEJGVDZsQThwTkQ3WnRhTDZIWGNiaWlSZVJTSUFzOXhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRHeEtxWWNQdk1JdENZZ1cvT0I1WHlpS2ZMbWU1T0grYU04YmJZY29IRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFiVFg4WXIvZHdwV2hlZnNPWVhrMWhoampzd3dUdXZRbEdqQmo3MUFUbFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5RYWZPZzRTR1FadzBOdUVUWWNpcTAyeGROd3BEQXhsYUJZazVRSzBVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVM0VllKSUVGY3FFdFFOaFJpUk9kcWdISXoxRHpJcUJEcjYyaUdzQjZCND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllCR3A4OG9DQ1l3NUZ5L0pSbHg3UFRXb2VXQ0xMTE9rQXQ3K0Y0amFJOU8xS0RhS0hWR0UvOGpEbnZGRTFteHliSUE3SUdTRHNUUnF1RGdiWTBncER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJ2RnhCWXBkVVlOeWc5aitDUVpJc21wMW1veHNMSTBXR1FUOGoxbUFzdXdrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLUDE5VEE4VFF3dUphTGt3MUVEbUlnIiwicGhvbmVJZCI6ImY1NGEzMTI0LWQ0MTktNDBhYS04OWNmLTZkYjk3MjRiMDY1ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOa3RMTUtCWDNkcWd4cG52amQ1YnRkUHZURlE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVBiMzZFazU3c21qaUYrM0hnNEx3MWVnN3RvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlkzQjZOTjRIIiwibWUiOnsiaWQiOiIyMzQ4MDg4NDEwNzI1Ojc3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLblR6N0VGRU9pbW03d0dHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXclF6YUFkTEViQzNiOURkWG4xNGlwWTZxRGZublVhajd1QVA0aDJzN0NRPSIsImFjY291bnRTaWduYXR1cmUiOiIvc011MzB6bnluRHhNd3lQZGlYVG9xbnBpMjVqVWgwc0prRFJLV3RpTXJsSUVRLzVva1lYU2U1QkNsaXRRcjVrdmZFSGsyQmRBcEFNell0aUl6VjBCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoia3g4TjJiYU56TFJ4ZTVRRU96V0xoVy94cHNNK096RE5iQUVPRTU3dm5sbTVuS2pjOFNuZkc4anFFZUh2RVdjb0thdnlPVEw5dFNqd1JWNFNNbUJwQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDg4NDEwNzI1Ojc3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZxME0yZ0hTeEd3dDIvUTNWNTllSXFXT3FnMzU1MUdvKzdnRCtJZHJPd2sifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzY4ODkyMDV9';

const prefix = process.env.PREFIX || '+';
const mycode = process.env.CODE || "234";
const author = process.env.STICKER_AUTHOR || 'DECHRIS';
const packname = process.env.PACKNAME || 'DECHRIS';
const dev = process.env.DEV || '2348088410725';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'DECHRIS-BOT';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'false';
const api = process.env.API || 'true';
const appname = process.env.APPNAME || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'fakse';
const autoreact = process.env.AUTOREACT || 'false';
const antibot = process.env.ANTIBOT || 'false';
const anticall = process.env.ANTICALL || 'false';
const antibad = process.env.ANTI_BAD_WORD || 'false';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const permit = process.env.PM_PERMIT || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  api,
  appname,
  permit,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
