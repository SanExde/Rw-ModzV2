import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let str = `${htki} 𝐃𝐀𝐍𝐀 ${htka}

HayðŸ‘‹, ingin melanjutkan pembayaran?

 *Pembayaran*
 Via: Dana
 Nomor: 081265970249
 A/n: Wannzx
 Mitra: WannBot-MD
 Metode pembayaran: Online ( ~Cod~ )


_Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan pulsa/saldo.
Pastikan pulsa/saldo kamu mencukupi untuk bertransaksi!


❗KLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
let wibu = `https://telegra.ph/file/266b27b2c563f41d48609.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'⫷ sᴜᴅᴀʜ ʙᴀʏᴀʀ ⫸','.sudahbayar', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/wannzx_133",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/reel/CfKCfcrAeA2/?igshid=YmMyMTA2M2Y=", 
    title: 'Wannzx MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['dana']
handler.tags = ['info']
handler.command = /^dana$/i

export default handler
