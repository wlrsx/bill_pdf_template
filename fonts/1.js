// Clash Verge - WhiteList mode
// 2025/06/18
// 包含常见国家和地区的图标和过滤表达式
// 包含 Loyalsoldier/clash-rules 所有规则
// 包含 部分规则

const proxyName = "🚀 Default";

const countryRegions = [
    { code: "HK", name: "香港", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/hk.svg", filter: "(?i)港|HK|Hong\\sKong|香港" },
    { code: "TW", name: "台湾", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/tw.svg", filter: "(?i)台|台湾|TW|Taiwan|🇹🇼(?!.*(中国|CN|China|PRC|🇨🇳|Networks))" },
    { code: "SG", name: "新加坡", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/sg.svg", filter: "(?i)新|新加坡|狮城|SG|Singapore|🇸🇬" },
    { code: "JP", name: "日本", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/jp.svg", filter: "(?i)日|日本|JP|Japan|东京|🇯🇵" },
    { code: "US", name: "美国", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/us.svg", filter: "(?i)美|美国|洛杉矶|US|USA|United\\sStates|America|🇺🇸(?!.*(Plus|custom))" },
    { code: "DE", name: "德国", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/de.svg", filter: "(?i)德国|DE|Germany|🇩🇪(?!.*shadowsocks)" },
    { code: "KR", name: "韩国", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/kr.svg", filter: "(?i)韩|韩国|首尔|KR|Korea|South\\sKorea|🇰🇷" },
    { code: "UK", name: "英国", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/gb.svg", filter: "(?i)英|英国|UK|United\\sKingdom|Britain|Great\\sBritain|🇬🇧" },
    { code: "CA", name: "加拿大", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ca.svg", filter: "(?i)加|加拿大|CA|Canada|🇨🇦(?!.*(Anycast|Datacamp))" },
    { code: "AU", name: "澳大利亚", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/au.svg", filter: "(?i)澳|澳大利亚|AU|Australia|🇦🇺" },
    { code: "FR", name: "法国", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/fr.svg", filter: "(?i)法国|FR|France|🇫🇷(?!.*(free|Frontier|Frankfurt))" },
    { code: "NL", name: "荷兰", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/nl.svg", filter: "(?i)荷兰|NL|Netherlands|🇳🇱(?!.*(only|online|MNL))" },
    { code: "RU", name: "俄罗斯", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ru.svg", filter: "(?i)俄罗斯|RU|Russia|🇷🇺" },
    { code: "IN", name: "印度", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/in.svg", filter: "(?i)印度|IN|India|🇮🇳(?!.*(Singapore|Argentina|Intel|Inc|ing|link|business|hinet|internet|印度尼西亚|main))" },
    { code: "BR", name: "巴西", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/br.svg", filter: "(?i)巴西|BR|Brazil|🇧🇷" },
    { code: "IT", name: "意大利", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/it.svg", filter: "(?i)意大利|IT|Italy|🇮🇹(?!.*(mitce|reality|digital|leiting|limited|it7|territories))" },
    { code: "CH", name: "瑞士", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ch.svg", filter: "(?i)瑞士|CH|Switzerland|🇨🇭(?!.*(incheon|chunghwa|tech|psychz|channel|seychelles|chuncheon))" },
    { code: "SE", name: "瑞典", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/se.svg", filter: "(?i)瑞典|SE|Sweden|🇸🇪(?!.*(sel2|sea1|server|selfhost|neonpulse|base|seoul|seychelles))" },
    { code: "NO", name: "挪威", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/no.svg", filter: "(?i)挪威|NO|Norway|🇳🇴(?!.*(none|node|annoy|cf_no1|technolog))" },
    { code: "CN", name: "中国", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/cn.svg", filter: "(?i)中|中国|CN|China|PRC|🇨🇳(?!.*(台湾|香港|TW|CN_d))" },
    { code: "MY", name: "马来西亚", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/my.svg", filter: "(?i)马来西亚|MY|Malaysia|🇲🇾(?!.*myshadow)" },
    { code: "VN", name: "越南", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/vn.svg", filter: "(?i)越南|VN|Vietnam|🇻🇳" },
    { code: "PH", name: "菲律宾", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ph.svg", filter: "(?i)菲律宾|PH|Philippines|🇵🇭(?!.*(phoenix|phx))" },
    { code: "TH", name: "泰国", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/th.svg", filter: "(?i)泰国|TH|Thailand|🇹🇭(?!.*(GTHost|pathx))" },
    { code: "ID", name: "印度尼西亚", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/id.svg", filter: "(?i)印度尼西亚|ID|Indonesia|🇮🇩" },
    { code: "AR", name: "阿根廷", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ar.svg", filter: "(?i)阿根廷|AR|Argentina|🇦🇷(?!.*(warp|arm|flare|star|shar|par|akihabara|bavaria))" },
    { code: "NG", name: "尼日利亚", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ng.svg", filter: "(?i)尼日利亚|NG|Nigeria|🇳🇬(?!.*(ong|ing|angeles|ang|ung|Hongkong|Singapore))" },
    { code: "TR", name: "土耳其", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/tr.svg", filter: "(?i)土耳其|TR|Turkey|🇹🇷(?!.*(trojan|str|central))" },
    { code: "ES", name: "西班牙", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/es.svg", filter: "(?i)西班牙|ES|Spain|🇪🇸(?!.*(vless|angeles|vmess|seychelles|business|ies|reston))" },
    { code: "AT", name: "奥地利", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/at.svg", filter: "(?i)奥地利|AT|Austria|🇦🇹(?!.*Gate)" },
    { code: "MX", name: "墨西哥", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/mx.svg", filter: "(?i)墨西哥|MX|Mexico|🇲🇽" },
    { code: "EE", name: "爱沙尼亚", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ee.svg", filter: "(?i)爱沙尼亚|EE|Estonia|🇪🇪(?!.*free)" },
    { code: "PL", name: "波兰", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/pl.svg", filter: "(?i)波兰|PL|Poland|🇵🇱" },
    { code: "IR", name: "伊朗", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ir.svg", filter: "(?i)伊朗|IR|Iran|🇮🇷" },
    { code: "ZA", name: "南非", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/za.svg", filter: "(?i)南非|ZA|South\\sAfrica|🇿🇦" },
    { code: "CO", name: "哥伦比亚", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/co.svg", filter: "(?i)哥伦比亚|CO|Colombia|🇨🇴" },
    { code: "SA", name: "沙特阿拉伯", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/sa.svg", filter: "(?i)沙特|SA|Saudi\\sArabia|🇸🇦(?!.*(usa|sakura))" },
    { code: "CL", name: "智利", icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/cl.svg", filter: "(?i)智利|CL|Chile|🇨🇱(?!.*cloud)" }
];

function getTestUrlForGroup(groupName) {
    switch (groupName) {
        case "Steam":
            return "https://store.steampowered.com/";
        case "Telegram":
            return "https://web.telegram.org/";
        case "ChatGPT":
            return "https://chat.openai.com/";
        case "Claude":
            return "https://claude.ai/";
        case "Spotify":
            return "https://www.spotify.com/";
        case "Google":
            return "http://google.com/";
        case "Microsoft":
            return "http://msn.com/";
        case "Linux Do":
            return "https://linux.do/";
        default:
            return "http://www.gstatic.com/generate_204";
    }
}

function getIconForGroup(groupName) {
    switch (groupName) {

        case "PayPal":
            return "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg";
        case "Wise":
            return "https://upload.wikimedia.org/wikipedia/commons/e/e8/Wise_Logo_512x124.svg";
        case "Grok":
            return "https://images.seeklogo.com/logo-png/61/1/grok-logo-png_seeklogo-613403.png";
        case "DeepSeek":
            return "https://brandlogos.net/wp-content/uploads/2025/02/deepseek_logo_icon-logo_brandlogos.net_s5bgc-512x389.png";
        case "Gemini":
            return "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png";
        case "Steam":
            return "https://fastly.jsdelivr.net/gh/Orz-3/mini@master/Color/Steam.png";
        case "Blizzard":
            return "https://upload.wikimedia.org/wikipedia/commons/b/b2/Blizzard_Entertainment_Logo.svg";
        case "Telegram":
            return "https://fastly.jsdelivr.net/gh/shindgewongxj/WHATSINStash@master/icon/telegram.png";
        case "ChatGPT":
            return "https://fastly.jsdelivr.net/gh/shindgewongxj/WHATSINStash@master/icon/openai.png";
        case "Claude":
            return "https://fastly.jsdelivr.net/gh/shindgewongxj/WHATSINStash@master/icon/anthropic.png";
        case "Spotify":
            return "https://fastly.jsdelivr.net/gh/shindgewongxj/WHATSINStash@master/icon/spotify.png";
        case "eBay":
            return "https://www.vectorlogo.zone/logos/ebay/ebay-ar21.svg";
        case "Shopee":
            return "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopee_logo.svg";
        case "Google":
            return "https://fastly.jsdelivr.net/gh/shindgewongxj/WHATSINStash@master/icon/google.png";
        case "Microsoft":
            return "https://fastly.jsdelivr.net/gh/shindgewongxj/WHATSINStash@master/icon/microsoft.png";
        default:
            return "";
    }
}

const domesticNameservers = [
    "https://dns.alidns.com/dns-query",
    "https://doh.pub/dns-query",
    "https://doh.360.cn/dns-query"
];

const foreignNameservers = [
    "https://1.1.1.1/dns-query",
    "https://1.0.0.1/dns-query",
    "https://208.67.222.222/dns-query",
    "https://208.67.220.220/dns-query",
    "https://194.242.2.2/dns-query",
    "https://194.242.2.3/dns-query"
];

const cnDnsList = ["https://dns.alidns.com/dns-query", "https://223.5.5.5/dns-query", "https://1.12.12.12/dns-query"];
const trustDnsList = ["quic://dns.cooluc.com", "https://1.0.0.1/dns-query", "https://1.1.1.1/dns-query"];

const dnsConfig = {
    "enable": true,
    "ipv6": false,
    "prefer-h3": true,
    "enhanced-mode": "redir-host",
    // "fake-ip-range": "198.18.0.1/16",
    // "fake-ip-filter": [
    //     "+.lan",
    //     "+.local",
    //     "*.arpa",
    //     "time.*.com",
    //     "ntp.*.com",
    //     "time.*.com",
    //     "+.market.xiaomi.com",
    //     // Windows网络出现小地球图标
    //     "+.msftconnecttest.com",
    //     "+.msftncsi.com",
    //     // QQ快速登录检测失败
    //     "localhost.ptlogin2.qq.com",
    //     "localhost.sec.qq.com",
    //     // 微信快速登录检测失败
    //     "localhost.work.weixin.qq.com"],
    "default-nameserver": ["114.114.114.114"],
    "nameserver-policy": {
        // "+.lan": "10.10.10.8" 指定 lan 域名解析服务器
        "geosite:cn": cnDnsList,
        "geosite:geolocation-!cn": trustDnsList,
        "domain:google.com,facebook.com,youtube.com,twitter.com,github.com,cloudflare.com,jsdelivr.net,hf.space": trustDnsList,
    },
    nameserver: cnDnsList,
    fallback: trustDnsList,
    "fallback-filter": { geoip: true, "geoip-code": "CN", ipcidr: ["240.0.0.0/4"] }
}

const customRules = [
    //"AND,((PROTOCOL,UDP),(DST-PORT,443)),REJECT-NO-DROP",
    "DOMAIN,d.metacubex.one,DIRECT",
    "DOMAIN,clash.razord.top,DIRECT",
    "DOMAIN,yacd.haishan.me,DIRECT",
    "DOMAIN-SUFFIX,ampproject.org," + proxyName,
    "RULE-SET,Lark," + proxyName,
];

const rules = [
    ...customRules,
    // 广告拦截
    "RULE-SET,reject,广告拦截",

    // TikTok
    "RULE-SET,TikTok_Bypass,TikTok_Bypass",
    "RULE-SET,TikTok,TikTok",

    // AI/大模型分流
    "RULE-SET,ChatGPT,ChatGPT",
    "RULE-SET,Claude,Claude",
    "RULE-SET,Gemini,Gemini",
    "DOMAIN-SUFFIX,deepseek.com,DeepSeek",
    "DOMAIN-SUFFIX,grok.com,Grok",

    // 金融支付
    "RULE-SET,PayPal,PayPal",
    "DOMAIN-SUFFIX,wise.com,Wise",

    // 电商
    "RULE-SET,Shopee,Shopee",
    "RULE-SET,Amazon,Amazon",
    "RULE-SET,AmazonIP,Amazon",
    "RULE-SET,eBay,eBay",

    // 社交/通讯
    "RULE-SET,telegramcidr,Telegram,no-resolve",
    "RULE-SET,Whatsapp,WhatsApp",
    "RULE-SET,Twitter,Twitter",
    "RULE-SET,Facebook,Facebook",
    "RULE-SET,Instagram,Instagram",
    "RULE-SET,XiaoHongShu,RedNote",

    // 媒体/流媒体
    "RULE-SET,Netflix,Netflix",
    "RULE-SET,YouTube,YouTube",
    "RULE-SET,Spotify,Spotify",
    "RULE-SET,Blizzard,Blizzard",
    "RULE-SET,Steam,Steam",

    // 苹果服务
    "RULE-SET,apple,Apple",
    "RULE-SET,icloud,Apple",

    // Google
    "RULE-SET,Google,Google",

    // 其它国外流量走代理
    // "RULE-SET,greatfire," + proxyName,
    // "RULE-SET,gfw," + proxyName,
    // "RULE-SET,proxy," + proxyName,
    // "RULE-SET,tld-not-cn," + proxyName,

    // Loyalsoldier 规则国内直连
    // "RULE-SET,private,DIRECT",
    // "RULE-SET,lancidr,DIRECT,no-resolve",
    // "RULE-SET,cncidr,DIRECT,no-resolve",
    // "GEOIP,CN,DIRECT,no-resolve",
    // "RULE-SET,direct,DIRECT",
    // "RULE-SET,applications,DIRECT",
    "RULE-SET,GoogleCNProxyIP,DIRECT",
    "RULE-SET,UnBan,DIRECT",
    "RULE-SET,ChinaDomain,DIRECT",
    "RULE-SET,ChinaMedia,DIRECT",
    "RULE-SET,ChinaCompanyIp,DIRECT",
    "RULE-SET,ChinaIp,DIRECT",
    // 兜底
    "MATCH," + proxyName
];

const http_yaml = {
    "type": "http",
    "format": "yaml",
    "interval": 86400
};

const http_domain = {
    "type": "http",
    "behavior": "domain",
    "interval": 86400
}

const http_ipcidr = {
    "type": "http",
    "behavior": "ipcidr",
    "interval": 86400
};

const http_classical = {
    "type": "http",
    "behavior": "classical",
    "interval": 86400
};

const ruleProviders = {
    // Loyalsoldier/clash-rules rules
    apple: {
        ...http_domain,
        url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
        path: "./ruleset/apple.yaml"
    },
    applications: {
        ...http_domain,
        url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
        path: "./ruleset/applications.yaml"
    },
    cncidr: {
        ...http_ipcidr,
        url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
        path: "./ruleset/cncidr.yaml"
    },
    direct: {
        ...http_domain,
        url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
        path: "./ruleset/direct.yaml"
    },
    gfw: {
        ...http_domain,
        url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
        path: "./ruleset/gfw.yaml"
    },
    // google: {
    //     ...http_domain,
    //     url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    //     path: "./ruleset/google.yaml"
    // },
    greatfire: {
        ...http_domain,
        url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/greatfire.txt",
        path: "./ruleset/greatfire.yaml"
    },
    icloud: {
        ...http_domain,
        url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
        path: "./ruleset/icloud.yaml"
    },
    lancidr: {
        ...http_ipcidr,
        url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
        path: "./ruleset/lancidr.yaml"
    },
    private: {
        ...http_domain,
        url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
        path: "./ruleset/private.yaml"
    },
    proxy: {
        ...http_domain,
        url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
        path: "./ruleset/proxy.yaml"
    },
    reject: {
        ...http_domain,
        url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
        path: "./ruleset/reject.yaml"
    },
    telegramcidr: {
        ...http_ipcidr,
        url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
        path: "./ruleset/telegramcidr.yaml"
    },
    "tld-not-cn": {
        ...http_domain,
        url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
        path: "./ruleset/tld-not-cn.yaml"
    },

    // WLRSX rules
    "TikTok_Bypass": {
        ...http_classical,
        url: "https://fastly.jsdelivr.net/gh/wlrsx/clash-rules-lite@main/rules/TikTok_Bypass.yaml",
        path: "./ruleset/wlrsx/TikTok_Bypass.yaml"
    },
    "TikTok": {
        ...http_classical,
        url: "https://fastly.jsdelivr.net/gh/wlrsx/clash-rules-lite@main/rules/TikTok.yaml",
        path: "./ruleset/wlrsx/TikTok.yaml"
    },
    "Lark": {
        ...http_classical,
        url: "https://fastly.jsdelivr.net/gh/wlrsx/clash-rules-lite@main/rules/Lark.yaml",
        path: "./ruleset/wlrsx/Lark.yaml"
    },

    // blackmatrix7 rules
    "Google": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Google/Google_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/Google.yaml"
    },
    "YouTube": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTube/YouTube_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/YouTube.yaml"
    },
    "Netflix": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Netflix/Netflix_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/Netflix.yaml"
    },
    "Twitter": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Twitter/Twitter_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/Twitter.yaml"
    },
    "Facebook": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Facebook/Facebook_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/Facebook.yaml"
    },
    "Instagram": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Instagram/Instagram_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/Instagram.yaml"
    },
    "Whatsapp": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Whatsapp/Whatsapp_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/Whatsapp.yaml"
    },
    "XiaoHongShu": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/XiaoHongShu/XiaoHongShu_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/XiaoHongShu.yaml"
    },
    "ChatGPT": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/OpenAI.yaml"
    },
    "Claude": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Claude/Claude_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/Claude.yaml"
    },
    "Gemini": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Gemini/Gemini_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/Gemini.yaml"
    },
    "Spotify": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Spotify/Spotify_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/Spotify.yaml"
    },
    "PayPal": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/PayPal/PayPal_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/PayPal.yaml"
    },
    "Shopee": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Shopee/Shopee_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/Shopee.yaml"
    },
    "Amazon": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Amazon/Amazon_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/Amazon.yaml"
    },
    "AmazonIP": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/AmazonIP/AmazonIP_Classical_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/AmazonIP.yaml"
    },
    "eBay": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/eBay/eBay_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/eBay.yaml"
    },
    "Blizzard": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Blizzard/Blizzard_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/Blizzard.yaml"
    },
    "Steam": {
        ...http_classical,
        "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Steam/Steam_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/Steam.yaml"
    },
    "Lan": {
        ...http_classical,
        "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@refs/heads/master/rule/Clash/Lan/Lan_No_Resolve.yaml",
        "path": "./ruleset/blackmatrix7/Lan.yaml"
    },
    // ACL4SSR rules
    "GoogleCNProxyIP": {
        ...http_ipcidr,
        "url": "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Providers/Ruleset/GoogleCNProxyIP.yaml",
        "path": "./ruleset/ACL4SSR/GoogleCNProxyIP.yaml"
    },
    "UnBan": {
        ...http_domain,
        "url": "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Providers/UnBan.yaml",
        "path": "./ruleset/ACL4SSR/UnBan.yaml"
    },
    "ChinaDomain": {
        ...http_domain,
        "url": "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Providers/ChinaDomain.yaml",
        "path": "./ruleset/ACL4SSR/ChinaDomain.yaml"
    },
    "ChinaMedia": {
        ...http_domain,
        "url": "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Providers/ChinaMedia.yaml",
        "path": "./ruleset/ACL4SSR/ChinaMedia.yaml"
    },
    "ChinaCompanyIp": {
        ...http_domain,
        "url": "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Providers/ChinaCompanyIp.yaml",
        "path": "./ruleset/ACL4SSR/ChinaCompanyIp.yaml"
    },
    "ChinaIp": {
        ...http_ipcidr,
        "url": "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Providers/ChinaIp.yaml",
        "path": "./ruleset/ACL4SSR/ChinaIp.yaml"
    }
};

const urlTestOption = {
    url: 'https://www.gstatic.com/generate_204',
    interval: 300,
    tolerance: 50,
    hidden: true
}

const fallbackOption = {
    url: 'https://www.gstatic.com/generate_204',
    interval: 300,
    lazy: true,
    timeout: 3000,
    "max-failed-times": 3,
    hidden: true
}

const loadBalanceOption = {
    url: 'https://www.gstatic.com/generate_204',
    interval: 300,
    lazy: true,
    hidden: true
}

const proxyGroups = [
    {
        name: proxyName,
        type: "select",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg",
        proxies: ["自动选择", "手动选择", "故障转移", "负载均衡 (散列)", "负载均衡 (轮询)", "DIRECT"],
    },
    {
        name: "自动选择",
        type: "select",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg",
        proxies: ["ALL - 自动选择", "HK 自动选择", "TW 自动选择", "SG 自动选择", "US 自动选择", "JP 自动选择"],
    },
    {
        name: "手动选择",
        type: "select",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg",
        "include-all": true,
        "exclude-filter": "(?i)官网|主页|流量|剩余|到期|游戏|关注",
        proxies: ["DIRECT", "REJECT"]
    },
    {
        name: "故障转移",
        type: "select",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/ambulance.svg",
        proxies: ["ALL - 故障转移", "HK 故障转移", "TW 故障转移", "SG 故障转移", "US 故障转移", "JP 故障转移"],
    },
    {
        name: "负载均衡 (散列)",
        type: "select",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/balance.svg",
        proxies: ["HK 负载均衡 (散列)", "TW 负载均衡 (散列)", "SG 负载均衡 (散列)", "US 负载均衡 (散列)", "JP 负载均衡 (散列)"],
    },
    {
        name: "负载均衡 (轮询)",
        type: "select",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/merry_go.svg",
        proxies: ["HK 负载均衡 (轮询)", "TW 负载均衡 (轮询)", "SG 负载均衡 (轮询)", "US 负载均衡 (轮询)", "JP 负载均衡 (轮询)"],
    },
    {
        ...urlTestOption,
        name: "ALL - 自动选择",
        type: "url-test",
        "include-all": true,
        "exclude-filter": "(?i)官网|主页|流量|剩余|到期|游戏|关注",
    },
    {
        ...fallbackOption,
        name: "ALL - 故障转移",
        type: "fallback",
        "include-all": true,
        "exclude-filter": "(?i)官网|主页|流量|剩余|到期|游戏|关注",
    },
    {
        ...urlTestOption,
        name: "HK 自动选择",
        type: "url-test",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "HK").filter,
        icon: countryRegions.find(region => region.code === "HK").icon
    },
    {
        ...fallbackOption,
        name: "HK 故障转移",
        type: "fallback",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "HK").filter,
        icon: countryRegions.find(region => region.code === "HK").icon
    },
    {
        ...loadBalanceOption,
        name: "HK 负载均衡 (散列)",
        type: "load-balance",
        strategy: "consistent-hashing",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "HK").filter,
        icon: countryRegions.find(region => region.code === "HK").icon
    },
    {
        ...loadBalanceOption,
        name: "HK 负载均衡 (轮询)",
        type: "load-balance",
        strategy: "round-robin",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "HK").filter,
        icon: countryRegions.find(region => region.code === "HK").icon
    },
    {
        ...urlTestOption,
        name: "TW 自动选择",
        type: "url-test",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "TW").filter,
        icon: countryRegions.find(region => region.code === "TW").icon
    },
    {
        ...fallbackOption,
        name: "TW 故障转移",
        type: "fallback",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "TW").filter,
        icon: countryRegions.find(region => region.code === "TW").icon
    },
    {
        ...loadBalanceOption,
        name: "TW 负载均衡 (散列)",
        type: "load-balance",
        strategy: "consistent-hashing",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "TW").filter,
        icon: countryRegions.find(region => region.code === "TW").icon
    },
    {
        ...loadBalanceOption,
        name: "TW 负载均衡 (轮询)",
        type: "load-balance",
        strategy: "round-robin",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "TW").filter,
        icon: countryRegions.find(region => region.code === "TW").icon
    },
    {
        ...urlTestOption,
        name: "SG 自动选择",
        type: "url-test",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "SG").filter,
        icon: countryRegions.find(region => region.code === "SG").icon
    },
    {
        ...fallbackOption,
        name: "SG 故障转移",
        type: "fallback",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "SG").filter,
        icon: countryRegions.find(region => region.code === "SG").icon
    },
    {
        ...loadBalanceOption,
        name: "SG 负载均衡 (散列)",
        type: "load-balance",
        strategy: "consistent-hashing",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "SG").filter,
        icon: countryRegions.find(region => region.code === "SG").icon
    },
    {
        ...loadBalanceOption,
        name: "SG 负载均衡 (轮询)",
        type: "load-balance",
        strategy: "round-robin",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "SG").filter,
        icon: countryRegions.find(region => region.code === "SG").icon
    },
    {
        ...urlTestOption,
        name: "US 自动选择",
        type: "url-test",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "US").filter,
        icon: countryRegions.find(region => region.code === "US").icon
    },
    {
        ...fallbackOption,
        name: "US 故障转移",
        type: "fallback",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "US").filter,
        icon: countryRegions.find(region => region.code === "US").icon
    },
    {
        ...loadBalanceOption,
        name: "US 负载均衡 (散列)",
        type: "load-balance",
        strategy: "consistent-hashing",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "US").filter,
        icon: countryRegions.find(region => region.code === "US").icon
    },
    {
        ...loadBalanceOption,
        name: "US 负载均衡 (轮询)",
        type: "load-balance",
        strategy: "round-robin",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "US").filter,
        icon: countryRegions.find(region => region.code === "US").icon
    },
    {
        ...urlTestOption,
        name: "JP 自动选择",
        type: "url-test",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "JP").filter,
        icon: countryRegions.find(region => region.code === "JP").icon
    },
    {
        ...fallbackOption,
        name: "JP 故障转移",
        type: "fallback",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "JP").filter,
        icon: countryRegions.find(region => region.code === "JP").icon
    },
    {
        ...loadBalanceOption,
        name: "JP 负载均衡 (散列)",
        type: "load-balance",
        strategy: "consistent-hashing",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "JP").filter,
        icon: countryRegions.find(region => region.code === "JP").icon
    },
    {
        ...loadBalanceOption,
        name: "JP 负载均衡 (轮询)",
        type: "load-balance",
        strategy: "round-robin",
        "include-all": true,
        filter: countryRegions.find(region => region.code === "JP").filter,
        icon: countryRegions.find(region => region.code === "JP").icon
    },
    {
        name: "YouTube",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/youtube.svg",
        hidden: false,
    },
    {
        name: "TikTok_Bypass",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/tiktok.svg"
    },
    {
        name: "TikTok",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/tiktok.svg"
    },
    {
        name: "Netflix",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/netflix.svg"
    },
    {
        name: "Apple",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/apple.svg"
    },
    {
        name: "Google",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/google.svg"
    },
    {
        name: "Twitter",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/twitter.svg"
    },
    {
        name: "Facebook",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/facebook.svg"
    },
    {
        name: "Instagram",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/instagram.svg"
    },
    {
        name: "WhatsApp",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/whatsapp.svg"
    },
    {
        name: "RedNote",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: getIconForGroup("RedNote")
    },
    {
        name: "Telegram",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg"
    },
    {
        name: "ChatGPT",
        type: "select",
        url: "https://chatgpt.com",
        "expected-status": "200",
        proxies: ["TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg"
    },
    {
        name: "Claude",
        type: "select",
        url: "https://claude.ai/new",
        "expected-status": "200",
        proxies: ["US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/claude.svg"
    },
    {
        name: "Gemini",
        type: "select",
        proxies: ["TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: getIconForGroup("Gemini")
    },
    {
        name: "Grok",
        type: "select",
        proxies: ["US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: getIconForGroup("Grok")
    },
    {
        name: "DeepSeek",
        type: "select",
        proxies: ["US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: getIconForGroup("DeepSeek")
    },
    {
        name: "PayPal",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: getIconForGroup("PayPal")
    },
    {
        name: "Wise",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: getIconForGroup("Wise")
    },
    {
        name: "Shopee",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: getIconForGroup("Shopee")
    },
    {
        name: "Amazon",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/amazon.svg"
    },
    {
        name: "eBay",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: getIconForGroup("eBay")
    },
    {
        name: "Spotify",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: getIconForGroup("Spotify")
    },
    {
        name: "Blizzard",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: getIconForGroup("Blizzard")
    },
    {
        name: "Steam",
        type: "select",
        proxies: [proxyName, "手动选择", "HK 自动选择", "HK 故障转移", "HK 负载均衡 (散列)", "HK 负载均衡 (轮询)", "TW 自动选择", "TW 故障转移", "TW 负载均衡 (散列)", "TW 负载均衡 (轮询)", "SG 自动选择", "SG 故障转移", "SG 负载均衡 (散列)", "SG 负载均衡 (轮询)", "US 自动选择", "US 故障转移", "US 负载均衡 (散列)", "US 负载均衡 (轮询)", "JP 自动选择", "JP 故障转移", "JP 负载均衡 (散列)", "JP 负载均衡 (轮询)"],
        icon: getIconForGroup("Steam")
    },
    {
        name: "广告拦截",
        type: "select",
        proxies: [proxyName, "手动选择", "REJECT", "DIRECT"],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/block.svg",
        hidden: false,
    }
];


function main(config, profileName) {
    const originalProxies = Array.isArray(config.proxies) ? [...config.proxies] : [];
    const proxyCount = originalProxies.length;
    const proxyProviderCount = config['proxy-providers'] && typeof config['proxy-providers'] === 'object'
        ? Object.keys(config['proxy-providers']).length
        : 0;

    if (proxyCount === 0 && proxyProviderCount === 0) {
        throw new Error('配置文件中未找到任何代理');
    }

    config["dns"] = dnsConfig;
    config["proxy-groups"] = proxyGroups;
    config["rule-providers"] = ruleProviders;
    config["rules"] = rules;

    const githubPrefix = "https://fastgh.lainbo.com/";
    const rawGeoxURLs = {
        geoip: "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
        geosite: "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
        mmdb: "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/country-lite.mmdb",
    };
    const accelURLs = Object.fromEntries(Object.entries(rawGeoxURLs).map(([key, githubUrl]) => [key, `${githubPrefix}${githubUrl}`]));
    const otherOptions = {
        "find-process-mode": "strict",
        "unified-delay": false,
        "tcp-concurrent": true,
        profile: { "store-selected": true, "store-fake-ip": true },
        sniffer: { enable: true, sniff: { TLS: { ports: [443, 8443] }, HTTP: { ports: [80, "8080-8880"], "override-destination": true } } },
        "geodata-mode": true,
        "geox-url": accelURLs,
    };
    Object.keys(otherOptions).forEach((key) => {
        config[key] = otherOptions[key];
    });

    // 定义支持 UDP 的协议类型
    const udpSupportedTypes = new Set(['vmess', 'vless', 'ss']);

    // 处理代理，根据类型添加 UDP 属性
    config.proxies = originalProxies
        .map(proxy => {
            // 验证代理对象的有效性
            if (!proxy || typeof proxy !== 'object' || !proxy.name) {
                console.warn('警告：发现无效或缺少名称的代理配置:', proxy);
                return null;
            }

            // 如果协议类型支持 UDP，则添加 udp: true
            if (udpSupportedTypes.has(proxy.type?.toLowerCase())) {
                return {
                    ...proxy,
                    udp: true
                    // 可选：取消注释以下行以启用接口绑定
                    // 'interface-name': 'WLAN' // 或 '以太网'
                };
            }

            // 其他类型保持原样，不添加或修改 udp 属性
            return proxy;
        })
        .filter(proxy => proxy !== null);
    return config;
}