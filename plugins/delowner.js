let handler = async (m, { conn, text }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `Etiqueta a la persona por favor!`
    if (!global.owner.includes(who.split`@`[0])) throw 'Este usuario no es dueño!'
    let index = global.owner.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.owner.splice(index, 1)
    conn.reply(m.chat, `@${who.split('@')[0]} Abandona el privilegio de ser propietario!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['delowner [@user]']
handler.tags = ['owner']
handler.command = /^(remove|hapus|-|del)owner$/i

handler.owner = true

export default handler