let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Formato no compatible!`
    if (/image/.test(mime)) {
        let img = await q.download?.()
        await conn.updateProfilePicture(m.chat, img)
    } else throw `Responda la imagen a establecer con el comando *${usedPrefix + command}*`
}
handler.help = ['setpp']
handler.tags = ['group']
handler.command = /^setpp$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
