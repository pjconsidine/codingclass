HandlebarsIntl.__addLocaleData({"locale":"br","pluralRuleFunction":function (n,ord){var s=String(n).split("."),t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2),n1000000=t0&&s[0].slice(-6);if(ord)return"other";return n10==1&&n100!=11&&n100!=71&&n100!=91?"one":n10==2&&n100!=12&&n100!=72&&n100!=92?"two":(n10==3||n10==4||n10==9)&&(n100<10||n100>19)&&(n100<70||n100>79)&&(n100<90||n100>99)?"few":n!=0&&t0&&n1000000==0?"many":"other"},"fields":{"year":{"displayName":"bloaz","relative":{"0":"this year","1":"next year","-1":"warlene"},"relativeTime":{"future":{"other":"+{0} y"},"past":{"other":"-{0} y"}}},"month":{"displayName":"miz","relative":{"0":"this month","1":"next month","-1":"last month"},"relativeTime":{"future":{"other":"+{0} m"},"past":{"other":"-{0} m"}}},"day":{"displayName":"deiz","relative":{"0":"hiziv","1":"warcʼhoazh","-1":"decʼh","-2":"dercʼhent-decʼh"},"relativeTime":{"future":{"other":"+{0} d"},"past":{"other":"-{0} d"}}},"hour":{"displayName":"eur","relativeTime":{"future":{"other":"+{0} h"},"past":{"other":"-{0} h"}}},"minute":{"displayName":"munut","relativeTime":{"future":{"other":"+{0} min"},"past":{"other":"-{0} min"}}},"second":{"displayName":"eilenn","relative":{"0":"now"},"relativeTime":{"future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}}}});
HandlebarsIntl.__addLocaleData({"locale":"br-FR","parentLocale":"br"});
