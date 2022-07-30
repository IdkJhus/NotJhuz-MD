
export async function before(m, { isAdmin, isBotAdmin }) {
   if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Awkawk Orang Asin :l')
conn.groupParticipantsUpdate(m.chat, [user], "remove")
   }
   
   if (m.sender.startsWith('265' || '265')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Awkawk Orang Asin :l')
conn.groupParticipantsUpdate(m.chat, [user], "remove")
   } 
   
   if (m.sender.startsWith('92' || '92')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Awkawk Orang Asin :l')
conn.groupParticipantsUpdate(m.chat, [user], "remove")
   } 
   
   if (m.sender.startsWith('90' || '90')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('Awkawk Orang Asin :l')
conn.groupParticipantsUpdate(m.chat, [user], "remove")
   } 
    }
