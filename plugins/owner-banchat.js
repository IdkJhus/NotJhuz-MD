let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 𝙵𝚄𝙴 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙿𝙾𝚁 𝙹𝙷𝚄𝚂.*\n\n*—◉ 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰́ 𝙷𝙰𝚂𝚃𝙰 𝚀𝚄𝙴 𝙴𝙻 𝙳𝙴𝙲𝙸𝙳𝙰 𝙻𝙴𝚅𝙰𝙽𝚃𝙰𝚁 𝙴𝙻 𝙱𝙰𝙽.*')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.rowner = true
export default handler
