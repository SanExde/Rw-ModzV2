import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
    let info = fs.readFileSync('./mp3/setuju.opus')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { quoted: fkontak },{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://instagram.com/wannzx_133",
    mediaType: 2,
    description: "https://instagram.com/wannzx_133", 
    title: 'wannzx-ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ',
    body: wm2,
    thumbnail: thumb,
    sourceUrl: sig  }}})
}
handler.command =  /^(setuju)$/i

export default handler