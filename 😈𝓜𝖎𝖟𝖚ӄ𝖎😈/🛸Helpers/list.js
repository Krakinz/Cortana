`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
module.exports = {
  name: `list`,
  description: `ɢᴇᴛ ᴛʜᴇ entire ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      `🐙============================================================================================================================<⚡>`;
      const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
      await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      `🐙============================================================================================================================<⚡>`;
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        { url: `./𝓜𝖎𝖟𝖚ӄ𝖎/Mizuki_Main.png` },
        MessageType.image,
        {
          mimetype: Mimetype.png,
        }
      );
      const buttons = [
        {
          buttonId: `${ᴋᴇɪ}smile`,
          buttonText: { displayText: `${ᴋᴇɪ}smile` },
          type: 1,
        },
        {
          buttonId: `${ᴋᴇɪ}repo`,
          buttonText: { displayText: `${ᴋᴇɪ}repo` },
          type: 1,
        },
      ];
      const buttonMessage = {
        contentText: `*𝘽𝙊𝙏 𝙄𝙉 𝘽𝙀𝙏𝘼*
シ︎🛸𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}

┌────⭓ 🤩𝘼𝙣𝙞𝙢𝙚 
│🎋• ${ᴋᴇɪ}anime _(ꜱᴇᴀʀᴄʜ)_
│🎋• ${ᴋᴇɪ}animewallpaper _(ꜱᴇᴀʀᴄʜ)_
│🎋• ${ᴋᴇɪ}smile _(ɢɪꜰ)_ 
│🎋• ${ᴋᴇɪ}yes _(ɢɪꜰ)_
│🎋• ${ᴋᴇɪ}bite _(ɢɪꜰ)_
│🎋• ${ᴋᴇɪ}blush _(ɢɪꜰ)_
│🎋• ${ᴋᴇɪ}bored _(ɢɪꜰ)_
│🎋• ${ᴋᴇɪ}confused _(ɢɪꜰ)_
│🎋• ${ᴋᴇɪ}cry _(ɢɪꜰ)_
│🎋• ${ᴋᴇɪ}goodnight _(ɢɪꜰ)_
│🎋• ${ᴋᴇɪ}happy _(ɢɪꜰ)_
│🎋• ${ᴋᴇɪ}hi5 _(ɢɪꜰ)_
│🎋• ${ᴋᴇɪ}poke _(ɢɪꜰ)_
│🎋• ${ᴋᴇɪ}sad _(ɢɪꜰ)_
│🎋• ${ᴋᴇɪ}thinking _(ɢɪꜰ)_
│🎋• ${ᴋᴇɪ}cuddle _(ɢɪꜰ)_
│🎋• ${ᴋᴇɪ}hug _(ɢɪꜰ)_
│🎋• ${ᴋᴇɪ}pat _(ɢɪꜰ)_
│🎋• ${ᴋᴇɪ}slap _(ɢɪꜰ)_ 
│🎋• ${ᴋᴇɪ}wink _(ɢɪꜰ)_
└───────⭓

┌────⭓ 🎙️𝙈𝙪𝙨𝙞𝙘
│🎙️• ${ᴋᴇɪ}lyrics _(ꜱᴇᴀʀᴄʜ)_
│🎙️• ${ᴋᴇɪ}ytsearch _(ꜱᴇᴀʀᴄʜ)_
│🎙️• ${ᴋᴇɪ}ytaudio _(ᴍᴜꜱɪᴄ-ᴅʟ)_
│🎙️• ${ᴋᴇɪ}play _(ᴍᴜꜱɪᴄ-ᴅʟ)_
│🎙️• ${ᴋᴇɪ}ytvideo _(ᴠɪᴅᴇᴏ-ᴅʟ)_
└───────⭓

┌────⭓ 𝙊𝙬𝙣𝙚𝙧-𝙊𝙣𝙡𝙮
│🐙• ${ᴋᴇɪ}update
│🐙• ${ᴋᴇɪ}broadcast
│🐙• ${ᴋᴇɪ}unmute _(ʙᴇᴛᴀ)_
│🐙• ${ᴋᴇɪ}mute _(ʙᴇᴛᴀ)_
└───────⭓

┌────⭓ 💻𝙎𝙮𝙨𝙩𝙚𝙢
│⚙️• ${ᴋᴇɪ}bugreport
│⚙️• ${ᴋᴇɪ}help 
│⚙️• ${ᴋᴇɪ}mizuki
│⚙️• ${ᴋᴇɪ}nekobin _(ʙᴇᴛᴀ)_
│⚙️• ${ᴋᴇɪ}update
│⚙️• ${ᴋᴇɪ}broadcast _(ʙᴇᴛᴀ)_
└───────⭓

┌────⭓ 👑𝙂𝙧𝙤𝙪𝙥𝙨
│🔰• ${ᴋᴇɪ}promote 
│🔰• ${ᴋᴇɪ}demote
│🔰• ${ᴋᴇɪ}spam
│🔰• ${ᴋᴇɪ}invite
│🔰• ${ᴋᴇɪ}admins
│🔰• ${ᴋᴇɪ}disappear
│🔰• ${ᴋᴇɪ}groupdp
│🔰• ${ᴋᴇɪ}kick
│🔰• ${ᴋᴇɪ}tagall
│🔰• ${ᴋᴇɪ}setwelcome
│🔰• ${ᴋᴇɪ}setgoodbye
│🔰• ${ᴋᴇɪ}setantilink _(ʙᴇᴛᴀ)_
└───────⭓

┌────⭓ 🧀𝙁𝙪𝙣𝙨
│🦄• ${ᴋᴇɪ}google _(ꜱᴇᴀʀᴄʜ)_
│🦄• ${ᴋᴇɪ}carbon 
│🦄• ${ᴋᴇɪ}pfgroupdp
│🦄• ${ᴋᴇɪ}github
│🦄• ${ᴋᴇɪ}beautycheck
│🦄• ${ᴋᴇɪ}joke _(ᴛᴇxᴛ)_
│🦄• ${ᴋᴇɪ}meme _(ɪᴍᴀɢᴇ)_  
│🦄• ${ᴋᴇɪ}ocr
│🦄• ${ᴋᴇɪ}sticker
│🦄• ${ᴋᴇɪ}translate
│🦄• ${ᴋᴇɪ}tts _(ʙᴇᴛᴀ)_ 
│🦄• ${ᴋᴇɪ}weather _(ʙᴇᴛᴀ)_  
│🦄• ${ᴋᴇɪ}ud
└───────⭓

┌────⭓ 👅𝙃𝙪𝙢𝙖𝙣 𝙉𝙎𝙁𝙒
│👅• ${ᴋᴇɪ}rporn _(ɢɪꜰ)_
│👅• ${ᴋᴇɪ}tikporn _(ᴠɪᴅᴇᴏ)_
│👅• ${ᴋᴇɪ}4k _(ɪᴍᴀɢᴇ)_
│👅• ${ᴋᴇɪ}blowjob _(ɪᴍᴀɢᴇ)_
│👅• ${ᴋᴇɪ}slut _(ɪᴍᴀɢᴇ)_
│👅• ${ᴋᴇɪ}milf _(ɪᴍᴀɢᴇ)_
│👅• ${ᴋᴇɪ}milk _(ɪᴍᴀɢᴇ)_
│👅• ${ᴋᴇɪ}pussy _(ɪᴍᴀɢᴇ)_
└───────⭓

┌────⭓ ⭓ 🍄𝙃𝙚𝙣𝙩𝙖𝙞 𝙉𝙎𝙁𝙒
│🍄• ${ᴋᴇɪ}rporn _(ɢɪꜰ)_
│🍄• ${ᴋᴇɪ}ass _(ɪᴍᴀɢᴇ)_  
│🍄• ${ᴋᴇɪ}bdsm _(ɪᴍᴀɢᴇ)_  
│🍄• ${ᴋᴇɪ}cum _(ɪᴍᴀɢᴇ)_  
│🍄• ${ᴋᴇɪ}doujin _(ɪᴍᴀɢᴇ)_ 
│🍄• ${ᴋᴇɪ}feet _(ɪᴍᴀɢᴇ)_  
│🍄• ${ᴋᴇɪ}femdom _(ɪᴍᴀɢᴇ)_  
│🍄• ${ᴋᴇɪ}foxgirl _(ɪᴍᴀɢᴇ)_  
│🍄• ${ᴋᴇɪ}glasses _(ɪᴍᴀɢᴇ)_  
│🍄• ${ᴋᴇɪ}hentai _(ɪᴍᴀɢᴇ)_  
│🍄• ${ᴋᴇɪ}maid _(ɪᴍᴀɢᴇ)_  
│🍄• ${ᴋᴇɪ}masturbation _(ɪᴍᴀɢᴇ)_ 
│🍄• ${ᴋᴇɪ}netorare _(ɪᴍᴀɢᴇ)_  
│🍄• ${ᴋᴇɪ}orgy _(ɪᴍᴀɢᴇ)_ 
│🍄• ${ᴋᴇɪ}panties _(ɪᴍᴀɢᴇ)_  
│🍄• ${ᴋᴇɪ}pussy _(ɪᴍᴀɢᴇ)_ 
│🍄• ${ᴋᴇɪ}school _(ɪᴍᴀɢᴇ)_  
│🍄• ${ᴋᴇɪ}tentacles _(ɪᴍᴀɢᴇ)_ 
│🍄• ${ᴋᴇɪ}thighs _(ɪᴍᴀɢᴇ)_
│🍄• ${ᴋᴇɪ}uniform _(ɪᴍᴀɢᴇ)_
│🍄• ${ᴋᴇɪ}yuri _(ɪᴍᴀɢᴇ)_
└───────⭓

*⧪➛𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣!*
many many more!
`,
        footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™*`,
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage,
      };
      await ӄʀǟӄɨռʐ
        .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, buttonMessage, MessageType.buttonsMessage, {
          quoted: chat,
          contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
        })
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      `🐙============================================================================================================================<⚡>`;
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
`🐙============================================================================================================================<⚡>`;
