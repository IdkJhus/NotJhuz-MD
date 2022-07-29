import { tiktokdl } from '@bochilteam/scraper'
import { aiovideodl } from './lib/tiktokdl.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
try {
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', `
*Nickname:* ${nickname}
*Description:* ${description}
`.trim(), m)
} catch {
const { res } = await aiovideodl(args[0])
    const urll = res.data.url
    if (!urll) throw 'Can\'t download video!'
    conn.sendFile(m.chat, urll, 'tiktok.mp4', `
*Nickname:* ${wm}
`.trim(), m)
}
}
handler.help = ['tiktok2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok2)?)$/i

export default handler
