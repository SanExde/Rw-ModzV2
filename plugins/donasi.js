let handler = async (m, { conn }) => {
let info = `
*${htki} ๐๐๐๐๐๐ ${htka}*

2022 *๐๐๐ง๐ง๐ณ๐ฑ-๐๐ ๐๐๐๐ข๐๐ข๐๐ฅ*
`
const sections = [
   {
	title: `๐๐๐๐๐๐`,
	rows: [
	    {title: "Dana", rowId: '.dana', description: 'Bayar melalui Dana' },
	    {title: "Gopay", rowId: '.gopay', description: 'Bayar melalui Gopay' },
	{title: "Pulsa Telkomsel", rowId: '.telkomsel', description: 'Bayar melalui Pulsa Telkomtod' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "โซท แดแดษดแดsษช โซธ",
  sections 
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "รฐลธลลฝ Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['donasi', 'donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.private = true

export default handler
