import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Links.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
*ミ𝐐𝐮𝐞 𝐨𝐧𝐝𝐚 ${name}, 𝐀𝐪𝐮𝐢́ 𝐞𝐬𝐭𝐚́𝐧 𝐭𝐨𝐝𝐨𝐬 𝐥𝐨𝐬 𝐥𝐢𝐧𝐤𝐬 𝐝𝐞 𝐥𝐚𝐬 𝐜𝐥𝐚𝐬𝐞𝐬 𝐝𝐞 𝐡𝐨𝐲. 𝐒𝐮𝐞𝐫𝐭𝐞 :𝐃! 彡*

*📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*
*📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*

📅𝐌𝐈𝐂𝐑𝐎𝐄𝐂𝐎𝐍𝐎𝐌𝐈́𝐀 (𝟕-𝟗 𝐀𝐌) - https://meet.google.com/yhj-qebu-aum
📅𝐅𝐈́𝐒𝐈𝐂𝐀 𝐈𝐈 (𝟗-𝟏𝟏 𝐀𝐌) - https://meet.google.com/pvr-xfrf-kos
📅𝐏𝐑𝐎𝐆𝐑𝐀𝐌𝐀𝐂𝐈𝐎́𝐍 𝐈𝐈 (𝟏𝟏-𝟏 𝐏𝐌) - https://meet.google.com/too-squx-wug
📅𝐄𝐒𝐓𝐀𝐃𝐈́𝐒𝐓𝐈𝐂𝐀 𝐈 (𝟐-𝟒 𝐏𝐌) - https://meet.google.com/bxg-etvx-gxz
📅𝐂𝐀́𝐋𝐂𝐔𝐋𝐎 𝐈𝐈 (𝟒-𝟔 𝐏𝐌) - https://meet.google.com/qry-vrpj-mmp
`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, 'https://www.youtube.com/channel/UCVffcsDwUR2iVXeC-b4yprw', '𝚈𝙾𝚄𝚃𝚄𝙱𝙴', 'https://github.com/IdkJhus', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['💻 𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼 💻', '/donasi'],
['🔖 𝙾𝚆𝙽𝙴𝚁 🔖', '/owner'],
['🧧 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🧧', '/infobot']
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.command = /^(linksmeet|googlemeet|meet)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
