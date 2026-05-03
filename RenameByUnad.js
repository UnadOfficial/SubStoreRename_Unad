function operator(proxies) {
  const SUB_NAME = 'XXX'; // 👈 按需修改订阅名
  const map = {
    '🇺🇸':'US','美国':'US','United States':'US','USA':'US','洛杉矶':'US','纽约':'US','西雅图':'US','硅谷':'US','阿什本':'US','迈阿密':'US','达拉斯':'US','凤凰城':'US','波特兰':'US',
    '🇯🇵':'JP','日本':'JP','Japan':'JP','东京':'JP','大阪':'JP','名古屋':'JP','北海道':'JP','福冈':'JP',
    '🇭🇰':'HK','香港':'HK','Hong Kong':'HK','HKG':'HK',
    '🇹🇼':'TW','台湾':'TW','Taiwan':'TW','台北':'TW','台中':'TW','高雄':'TW',
    '🇸🇬':'SG','新加坡':'SG','Singapore':'SG',
    '🇰🇷':'KR','韩国':'KR','Korea':'KR','首尔':'KR','釜山':'KR','仁川':'KR',
    '🇬🇧':'UK','英国':'UK','United Kingdom':'UK','伦敦':'UK','曼彻斯特':'UK',
    '🇩🇪':'DE','德国':'DE','Germany':'DE','法兰克福':'DE','柏林':'DE',
    '🇫🇷':'FR','法国':'FR','France':'FR','巴黎':'FR',
    '🇨🇦':'CA','加拿大':'CA','Canada':'CA','温哥华':'CA','多伦多':'CA','蒙特利尔':'CA',
    '🇦🇺':'AU','澳大利亚':'AU','澳洲':'AU','Australia':'AU','悉尼':'AU','墨尔本':'AU',
    '🇳🇱':'NL','荷兰':'NL','Netherlands':'NL','阿姆斯特丹':'NL',
    '🇮🇹':'IT','意大利':'IT','Italy':'IT','米兰':'IT',
    '🇮🇳':'IN','印度':'IN','India':'IN','孟买':'IN','新德里':'IN',
    '🇹🇭':'TH','泰国':'TH','Thailand':'TH','曼谷':'TH',
    '🇲🇾':'MY','马来西亚':'MY','Malaysia':'MY','吉隆坡':'MY',
    '🇻🇳':'VN','越南':'VN','Vietnam':'VN','河内':'VN',
    '🇮🇩':'ID','印尼':'ID','Indonesia':'ID','雅加达':'ID',
    '🇵🇭':'PH','菲律宾':'PH','Philippines':'PH','马尼拉':'PH',
    '🇷🇺':'RU','俄罗斯':'RU','Russia':'RU','莫斯科':'RU',
    '🇧🇷':'BR','巴西':'BR','Brazil':'BR','圣保罗':'BR',
    '🇦🇪':'AE','阿联酋':'AE','UAE':'AE','迪拜':'AE',
    '🇹🇷':'TR','土耳其':'TR','Turkey':'TR','伊斯坦布尔':'TR',
    '🇨🇭':'CH','瑞士':'CH','Switzerland':'CH','苏黎世':'CH',
    '🇸🇪':'SE','瑞典':'SE','Sweden':'SE','斯德哥尔摩':'SE',
    '🇵🇱':'PL','波兰':'PL','Poland':'PL','华沙':'PL',
    '🇦🇹':'AT','奥地利':'AT','Austria':'AT','维也纳':'AT',
    '🇧🇪':'BE','比利时':'BE','Belgium':'BE','布鲁塞尔':'BE',
    '🇩🇰':'DK','丹麦':'DK','Denmark':'DK','哥本哈根':'DK',
    '🇫🇮':'FI','芬兰':'FI','Finland':'FI','赫尔辛基':'FI',
    '🇳🇴':'NO','挪威':'NO','Norway':'NO','奥斯陆':'NO',
    '🇵🇹':'PT','葡萄牙':'PT','Portugal':'PT','里斯本':'PT',
    '🇪🇸':'ES','西班牙':'ES','Spain':'ES','马德里':'ES','巴塞罗那':'ES',
    '🇮🇪':'IE','爱尔兰':'IE','Ireland':'IE','都柏林':'IE',
    '🇲🇴':'MO','澳门':'MO','Macao':'MO',
    '🇨🇳':'CN','中国':'CN','China':'CN','内地':'CN','大陆':'CN',
    '🇲🇽':'MX','墨西哥':'MX','Mexico':'MX','🇳🇿':'NZ','新西兰':'NZ','New Zealand':'NZ','奥克兰':'NZ',
    '🇨🇿':'CZ','捷克':'CZ','Czech':'CZ','布拉格':'CZ','🇬🇷':'GR','希腊':'GR','Greece':'GR','雅典':'GR',
    '🇮🇱':'IL','以色列':'IL','Israel':'IL','特拉维夫':'IL','🇸🇦':'SA','沙特':'SA','Saudi':'SA','利雅得':'SA',
    '🇪🇬':'EG','埃及':'EG','Egypt':'EG','开罗':'EG','🇨🇱':'CL','智利':'CL','Chile':'CL','圣地亚哥':'CL',
    '🇦🇷':'AR','阿根廷':'AR','Argentina':'AR','🇨🇴':'CO','哥伦比亚':'CO','Colombia':'CO','波哥大':'CO'
  };
  const used = new Set();

  return proxies.map(p => {
    let cc = 'XX';
    for (const [k, v] of Object.entries(map)) if (p.name.includes(k)) { cc = v; break; }
    
    const id = (p.name.match(/(\d{1,3})/)?.[1] || '00').padStart(2, '0');
    const m = p.name.match(/(\d+\.?\d*)[倍xX]/i)?.[1];
    
    let name = m ? `${SUB_NAME} ${cc} - ${id} - ${m}x` : `${SUB_NAME} ${cc} - ${id}`;
    
    if (used.has(name)) {
      let n = 2;
      while (used.has(`${name} #${n}`)) n++;
      name = `${name} #${n}`;
    }
    used.add(name);
    p.name = name;
    return p;
  });
}