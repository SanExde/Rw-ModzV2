import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let cap = `${htka} *sᴏᴜʀᴄᴇ ᴄᴏᴅᴇ* ${htki}

Pengen mentahan nya ?
Nih ada santai bro....
https://github.com/ImYanXiao/Elaina-MultiDevice

Pengen yang udah di recode oleh owner?
Script bot ini gratis. jika kalian ingin,bisa chat nomor
dibawah ini!!

https://wa.me/message/6TYVKZNILFJYL1
`
conn.sendButtonDoc(m.chat, cap, botdate,'⫷ ʙᴀᴄᴋ ⫸','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: 'https://instagram/wannzx_133',
    mediaType: 2, 
    description: sgc,
    title: '≪ ᴄʟɪᴄᴋ ʜᴇʀᴇ ⋟',
    body: wm,
    thumbnail: await(await fetch("https://telegra.ph/file/7d08ae6675cce5dc71734.jpg")).buffer(),
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
