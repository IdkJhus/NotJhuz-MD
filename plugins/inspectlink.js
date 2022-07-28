let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
  let [, code] = text.match(linkRegex) || []
  if (!code) throw 'Link invalid'
  let res = await conn.query({
    json: ["query", "invite", code],
    expect200: true
  })
  if (!res) throw res
  let caption = `
-- [Group Link Inspector] --
${res.id}
*Nombre del Grupo:* ${res.subject}
*Creado* por @${res.id.split('-')[0]} en *${formatDate(res.creation * 1000)}*${res.subjectOwner ? `
*Título cambiado* por @${res.subjectOwner.split`@`[0]} en *${formatDate(res.subjectTime * 1000)}*`: ''}${res.descOwner ? `
*Descripción cambiada* por @${res.descOwner.split`@`[0]} en *${formatDate(res.descTime * 1000)}*` : ''}
*Número de Integrantes:* ${res.size}
*Miembros actuales en el grupo*: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]).join('\n').trim() : 'no hay miembros'}
${res.desc ? `*Descripción actual:*
${res.desc}` : '*No hay descripción*'}

*JSON Version*
\`\`\`${JSON.stringify(res, null, 1)}\`\`\`
`.trim()
  let pp = await conn.getProfilePicture(res.id).catch(console.error)
  if (pp) conn.sendFile(m.chat, pp, 'pp.jpg', null, m)
  m.reply(caption, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(caption)
    }
  })
}
handler.help = ['inspect <chat.whatsapp.com>']
handler.tags = ['tools']

handler.command = /^inspect$/i

export default handler

function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}