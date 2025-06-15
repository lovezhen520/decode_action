//Sun Jun 15 2025 01:50:38 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env('每日抽');
var lFAgmyS = Object['\u0064\u0065\u0066\u0069\u006e\u0065\u0050\u0072\u006f\u0070\u0065\u0072\u0074\u0079'],
  Sl2j5W,
  Jitcce,
  iwbNjy,
  IcOCwH,
  hItefEQ,
  mLNOlNn,
  A6NQD7,
  dTvq5qp;
function S3FG6d() {
  return globalThis;
}
function ojqE_J() {
  return global;
}
function BWi9WLg() {
  return window;
}
function zG7J_U() {
  return new Function("return this")();
}
function YzbKJV(lFAgmyS = [S3FG6d, ojqE_J, BWi9WLg, zG7J_U], JqFp3YL, F7TZkI = [], Sl2j5W, Jitcce) {
  JqFp3YL = JqFp3YL;
  try {
    JqFp3YL = Object
    F7TZkI.push(''.__proto__["constructor"].name)
  } catch (e) {}
  A5_ZJa: for (Sl2j5W = 0; Sl2j5W < lFAgmyS["length"]; Sl2j5W++) try {
    JqFp3YL = lFAgmyS[Sl2j5W]();
    for (Jitcce = 0; Jitcce < F7TZkI["length"]; Jitcce++) {
      if (typeof JqFp3YL[F7TZkI[Jitcce]] === "undefined") {
        continue A5_ZJa;
      }
    }
    return JqFp3YL;
  } catch (e) {}
  return JqFp3YL || this;
}
Sl2j5W = YzbKJV() || {}
Jitcce = Sl2j5W.TextDecoder
iwbNjy = Sl2j5W["Uint8Array"]
IcOCwH = Sl2j5W["Buffer"]
hItefEQ = Sl2j5W.String || String
mLNOlNn = Sl2j5W["Array"] || Array
function Oyrwig(...lFAgmyS) {
  return lFAgmyS[lFAgmyS["length"] - 0x1];
}
function U45klzB(P6Fh13D, lFAgmyS) {
  switch (dTvq5qp) {
    case -23:
      return !P6Fh13D;
    case -0x25:
      return P6Fh13D / lFAgmyS;
    case -0x1d:
      return P6Fh13D + lFAgmyS;
  }
}
function quXatYZ(P6Fh13D) {
  return Oyrwig(P6Fh13D = dTvq5qp + (dTvq5qp = P6Fh13D, 0), P6Fh13D);
}
dTvq5qp = dTvq5qp;
const ZUrbsT = require('./jdCookie'),
  MW_pMQ5 = require('./utils/Rebels_sendJDNotify'),
  vzPsjlf = require('./utils/Rebels_jdCommon'),
  {
    ["H5st"]: wp7Z0D0
  } = require('./utils/Rebels_H');
let ZfarMbK = process["env"]["jd_day_threads"] || '\u0031';
const nJ2dFBI = process["env"]["jd_day_interval"] || "2000",
  IL7nWy = (process["env"]["jd_day_notify"] || process["env"]["jd_day_Notify"]) === "true",
  w_ZwTU = (process["env"]["jd_day_pinFilter"] || '')["split"]('\x40'),
  WC1sdCg = process["env"]["jd_day_prizeNotify"] === "true",
  iKEi2r = 0x5;
let G_tk4wG = Object["keys"](ZUrbsT)["map"](P6Fh13D => ZUrbsT[P6Fh13D])["filter"](P6Fh13D => P6Fh13D);
if (U45klzB(G_tk4wG[0x0], dTvq5qp = -0x17)) {
  $["msg"]($["name"], "【提示】请先获取Cookie")
  process["exit"](1)
}
U45klzB((async () => {
  if (Oyrwig(MW_pMQ5["config"]({
    ["title"]: $["name"]
  }), await zkum_D0(), IL7nWy && MW_pMQ5["getMessage"]()) && true) {
    await MW_pMQ5["push"]();
  }
})()["catch"](P6Fh13D => {
  var lFAgmyS = "logErr";
  return $[lFAgmyS](P6Fh13D);
})["finally"](() => $["done"]()), dTvq5qp = -0x17);
async function zkum_D0() {
  try {
    try {
      const IcOCwH = parseInt(ZfarMbK);
      if (IcOCwH > 0x0 && IcOCwH !== 0x1) {
        ZfarMbK = IcOCwH;
      }
    } catch {
      ZfarMbK = 1;
    }
    if (Oyrwig(ZfarMbK = Math["min"](ZfarMbK, iKEi2r), $["waitTime"] = null, nJ2dFBI)) {
      try {
        const hItefEQ = parseInt(nJ2dFBI);
        if (hItefEQ >= 0x0) {
          $["waitTime"] = hItefEQ;
        }
      } catch {
        console["log"]("⚠ 自定义运行间隔时长设置错误")
      }
    }
    if (Oyrwig($["needRemoveCookieIndex"] = [], console["log"](`==========${$["name"]}变量开启状态==========`), console["log"](`间隔时长: [${U45klzB($["waitTime"], 0x3e8, dTvq5qp = -0x25)}秒]运行间隔时长`), console["log"](`代理开关: [${vzPsjlf["getProxyStatus"]()}]`), console["log"](`通知推送: [${IL7nWy ? '开启' : '关闭'}]`), console["log"](`账号过滤: [${w_ZwTU["join"]('\u002c\u0020')}]`), console["log"](`==========${$["name"]}变量状态结束==========`), console["log"](''), await vzPsjlf["concTask"](ZfarMbK, G_tk4wG, i4_Pzw), $["runEnd"] = false, $["needRemoveCookieIndex"]["length"]) > 0) {
      G_tk4wG = G_tk4wG["filter"]((lFAgmyS, JqFp3YL) => {
        return U45klzB($["needRemoveCookieIndex"]["includes"](U45klzB(JqFp3YL, 0x1, quXatYZ(-29))), dTvq5qp = -0x17);
      })
      $["needRemoveCookieIndex"] = []
    }
    const Y7T8OAM = MW_pMQ5["getMessage"]();
    if (Y7T8OAM) {
      console["log"](`\n📣 运行结果\n${Y7T8OAM["replace"](/：/g, " ➜ ")}`)
    }
  } catch (e) {
    console["log"](`❌ 脚本运行遇到了错误\n${e}`)
  }
}
async function i4_Pzw(lFAgmyS, JqFp3YL) {
  if ($["runEnd"]) {
    var iwbNjy = ["runEnd"];
    return {
      [iwbNjy[0x0]]: true
    };
  }
  const IcOCwH = decodeURIComponent(vzPsjlf["getCookieValue"](lFAgmyS, "pt_pin")),
    hItefEQ = `【账号${JqFp3YL}】${vzPsjlf["dataMasking"](IcOCwH, {
      ["printWidth"]: 0x6
    })}：`,
    mLNOlNn = MW_pMQ5["create"](JqFp3YL, IcOCwH);
  if (w_ZwTU["length"] > 0x0 && (w_ZwTU["includes"](IcOCwH) || w_ZwTU["includes"](encodeURIComponent(IcOCwH)))) {
    return Oyrwig(mLNOlNn["fix"]("已设置跳过运行当前账号"), console["log"](mLNOlNn["getInlineContent"]()), $["needRemoveCookieIndex"]["push"](JqFp3YL), undefined);
  }
  const e6WIZf = await vzPsjlf["getLoginStatus"](lFAgmyS);
  if (U45klzB(e6WIZf, quXatYZ(-23)) && typeof e6WIZf === "boolean") {
    return Oyrwig(console["log"](`${hItefEQ}账号无效`), mLNOlNn["fix"]("账号无效"), $["needRemoveCookieIndex"]["push"](JqFp3YL), undefined);
  }
  const BWi9WLg = vzPsjlf["genUA"](IcOCwH);
  let zG7J_U, YzbKJV;
  if (Oyrwig(zG7J_U = '', await oW31eUM("comp_data_load"), zG7J_U)) {
    const ZfarMbK = zG7J_U["rewardProgressItems"][0];
    if (ZfarMbK) {
      if (Oyrwig(YzbKJV = ZfarMbK["rewardReceiveKey"], YzbKJV)) {
        await oW31eUM("comp_data_interact");
      } else {
        var nJ2dFBI = ["length"];
        if (ZfarMbK["rewardInfoList"] && ZfarMbK["rewardInfoList"][nJ2dFBI[0x0]] > 0) {
          const IL7nWy = ZfarMbK["rewardInfoList"][0];
          if (IL7nWy && IL7nWy["couponInfo"] && 1) {
            var iKEi2r = ["toLocaleString"];
            const G_tk4wG = IL7nWy["couponInfo"];
            console["log"](`${hItefEQ}[已领取]满${G_tk4wG["couponQuota"]}减${G_tk4wG["couponDiscount"]}(${new Date(G_tk4wG["beginTime"])["toLocaleString"]()}-${new Date(G_tk4wG["endTime"])[iKEi2r[0x0]]()})`);
          } else {
            console["log"](`${hItefEQ}💨 空气`);
          }
        } else {
          var chRRqHk = ["log"];
          console[chRRqHk[0]](`${hItefEQ}💨 空气`);
        }
      }
    } else {
      console["log"](`${hItefEQ}未获取到进度项信息`);
    }
  }
  if ($["runEnd"]) {
    return {
      ["runEnd"]: true
    };
  }
  await $["wait"](parseInt(U45klzB($["waitTime"] * 0x1, 0x1f4, dTvq5qp = -29), 10));
  async function GWLD7vm(lFAgmyS, Sl2j5W) {
    try {
      var iwbNjy = ["comp_data_load"];
      switch (lFAgmyS) {
        case iwbNjy[0]:
          if (Sl2j5W["data"]) {
            zG7J_U = Sl2j5W["data"];
          } else {
            var e6WIZf = "log";
            msg = vzPsjlf["getErrorMsg"](Sl2j5W["data"])
            console[e6WIZf](`${hItefEQ}失败[${Sl2j5W["code"]}]：${msg}`)
          }
          break;
        case "comp_data_interact":
          if (Sl2j5W["data"]) {
            if (Oyrwig(comp_data_interact = Sl2j5W["data"], Sl2j5W["data"]["rewardInfoList"] && Sl2j5W["data"]["rewardInfoList"]["length"] > 0)) {
              const YzbKJV = Sl2j5W["data"]["rewardInfoList"][0];
              if (YzbKJV && YzbKJV["couponInfo"]) {
                const nJ2dFBI = YzbKJV["couponInfo"];
                if (Oyrwig(console["log"](`${hItefEQ}✅满${nJ2dFBI["couponQuota"]}减${nJ2dFBI["couponDiscount"]}(${new Date(nJ2dFBI["beginTime"])["toLocaleString"]()}-${new Date(nJ2dFBI["endTime"])["toLocaleString"]()})`), mLNOlNn["insert"](`满${nJ2dFBI["couponQuota"]}减${nJ2dFBI["couponDiscount"]}(${new Date(nJ2dFBI["beginTime"])["toLocaleString"]()}-${new Date(nJ2dFBI["endTime"])["toLocaleString"]()})`), WC1sdCg)) {
                  await MW_pMQ5["sendNotify"](`${$["name"]}`, `【京东账号${JqFp3YL}】${IcOCwH}：获得外卖卷，满${nJ2dFBI["couponQuota"]}减${nJ2dFBI["couponDiscount"]}(${new Date(nJ2dFBI["beginTime"])["toLocaleString"]()}-${new Date(nJ2dFBI["endTime"])["toLocaleString"]()})，请尽快使用~`);
                }
              }
            } else {
              console["log"](`${hItefEQ}💨 空气`);
            }
          } else {
            msg = vzPsjlf["getErrorMsg"](Sl2j5W["data"])
            console["log"](`${hItefEQ}失败[${Sl2j5W["code"]}]：${msg}`)
          }
      }
    } catch (e) {
      console["log"](`❌ 未能正确处理 ${lFAgmyS} 请求响应 ${e["message"] || e}`);
    }
  }
  async function oW31eUM(JqFp3YL) {
    if ($["runEnd"] && true) {
      return;
    }
    let ojqE_J = '',
      zG7J_U = null,
      ZUrbsT = null,
      ZfarMbK = "POST",
      nJ2dFBI = {},
      IL7nWy = {};
    switch (JqFp3YL) {
      case "comp_data_load":
        IL7nWy = {
          ["appId"]: "31afb",
          ["functionId"]: "comp_data_load",
          ["appid"]: "delivery_reward",
          ["clientVersion"]: vzPsjlf["getLatestAppVersion"](),
          ["client"]: "ios",
          ["body"]: {
            ["token"]: "NvWqx37VhPNKx3z2CVkXv",
            ["commParams"]: {
              ["ubbLoc"]: "ttf.lqzx",
              ["lid"]: "4_50952_60426_0",
              ["client"]: 0,
              ["sdkToken"]: "jdd01YG5AHZNQU4TUXDWWHFZ7G5SAAJCXWGQWUMQPTWY6BVJJMTTEDYJVZXJSSF3ZHX2UFPU26WZJWZN4GY7TS4QAKPSMUCCDJSBBUTS5AFI01234567"
            },
            ["bizParams"]: {
              ["openChannel"]: "jdAppHome"
            }
          },
          ua: BWi9WLg,
          ["t"]: true
        }
        nJ2dFBI = await wp7Z0D0["getH5st"](IL7nWy)
        ojqE_J = "https://api.m.jd.com/client.action?functionId=comp_data_load"
        zG7J_U = nJ2dFBI["paramsData"]
        break;
      case "comp_data_interact":
        IL7nWy = {
          ["appId"]: "ff785",
          ["functionId"]: "comp_data_interact",
          ["appid"]: "delivery_reward",
          ["clientVersion"]: vzPsjlf["getLatestAppVersion"](),
          ["client"]: "ios",
          ["body"]: {
            ["token"]: "NvWqx37VhPNKx3z2CVkXv",
            ["fnCode"]: "invoke",
            ["commParams"]: {
              ["longitude"]: '',
              ["latitude"]: '',
              ["ubbLoc"]: "ttf.lqzx",
              ["lid"]: "4_50952_60426_0",
              ["client"]: 0,
              ["sdkToken"]: "jdd01YG5AHZNQU4TUXDWWHFZ7G5SAAJCXWGQWUMQPTWY6BVJJMTTEDYJVZXJSSF3ZHX2UFPU26WZJWZN4GY7TS4QAKPSMUCCDJSBBUTS5AFI01234567"
            },
            ["bizParams"]: {
              ["rewardReceiveKey"]: YzbKJV,
              ["openChannel"]: "jdAppHome",
              ["actFlowCode"]: "receiveReward"
            }
          },
          ua: BWi9WLg,
          ["t"]: true
        }
        nJ2dFBI = await wp7Z0D0["getH5st"](IL7nWy)
        ojqE_J = "https://api.m.jd.com/client.action?functionId=comp_data_interact"
        zG7J_U = nJ2dFBI["paramsData"]
        break;
      default:
        console["log"](`❌ 未知请求 ${JqFp3YL}`);
        return;
    }
    const iKEi2r = {};
    if (zG7J_U) {
      Object["assign"](zG7J_U, iKEi2r);
    }
    if (ZUrbsT) {
      Object["assign"](ZUrbsT, iKEi2r);
    }
    const G_tk4wG = {
      ["url"]: ojqE_J,
      ["method"]: ZfarMbK,
      ["headers"]: {
        ["Host"]: "api.m.jd.com",
        ["Origin"]: "https://prodev.m.jd.com",
        ["Content-Type"]: "application/x-www-form-urlencoded",
        ["Cookie"]: lFAgmyS,
        ["User-Agent"]: BWi9WLg
      },
      ["params"]: ZUrbsT,
      ["data"]: zG7J_U,
      ["timeout"]: 0x7530,
      ["httpsTlsOptions"]: {
        ["secureProtocol"]: "TLSv1_2_method",
        ["ciphers"]: "ECDHE-RSA-AES256-GCM-SHA384"
      }
    };
    if (ZfarMbK === "GET" && true) {
      delete (delete G_tk4wG["data"], G_tk4wG["headers"]["Content-Type"]);
    }
    const chRRqHk = 0x1;
    let oW31eUM = 0x0,
      dTvq5qp = null;
    while (oW31eUM < chRRqHk) {
      if (oW31eUM > 0) {
        await $["wait"](0x3e8);
      }
      const MW_pMQ5 = await vzPsjlf["request"](G_tk4wG);
      if (U45klzB(MW_pMQ5["success"], quXatYZ(-23)) && 1) {
        dTvq5qp = `🚫 ${JqFp3YL} 请求失败 ➜ ${MW_pMQ5["error"]}`
        oW31eUM++
        continue;
      }
      if (U45klzB(MW_pMQ5["data"], quXatYZ(-0x17))) {
        dTvq5qp = `🚫 ${JqFp3YL} 请求失败 ➜ 无响应数据`
        oW31eUM++
        continue;
      }
      await GWLD7vm(JqFp3YL, MW_pMQ5["data"]);
      break;
    }
    if (oW31eUM >= chRRqHk) {
      console["log"](dTvq5qp);
    }
  }
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = false, this.isNeedRewrite = false, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}