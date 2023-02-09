// Momentalnoe ubiystvo na BA

fightGuardRes = [];
oneMlnScore = 10*1000*1000*1000;
dmg = 70*oneMlnScore;
WebConnect.getInstance().gameConnect.request("game.treasureHandler.minusBossHp", {
  token: InfoManager.instance.token,
  hp: dmg,
  gid: "RU10223"
}, function(t){ fightGuardRes.push(t) });
WebConnect.getInstance().gameConnect.request("game.treasureHandler.startFigthBoss", {
  token: InfoManager.instance.token,
  gid: "RU10223"
}, function(t){
  WebConnect.getInstance().gameConnect.request("game.treasureHandler.minusBossHp", {
    token: InfoManager.instance.token,
    hp: dmg,
    gid: "RU10223"
  }, function(t){ fightGuardRes.push(t) });
});

fightGuard = (gid) => {
  WebConnect.getInstance().gameConnect.request("game.treasureHandler.startFigthBoss", {
    token: InfoManager.instance.token,
    gid: gid
  }, function(t){
    WebConnect.getInstance().gameConnect.request("game.treasureHandler.minusBossHp", {
      token: InfoManager.instance.token,
      hp: "200000000000",
      gid: gid
    }, function(t){ fightGuardRes.push(t) });
  });
};

r = [];
WebConnect.instance.gameConnect.request("game.treasureHandler.getGuildBtlInfo", {
  token: InfoManager.instance.token
}, function(i) { 
  const gids = i.guildBtls.map(g => g.gid);
  WebConnect.instance.gameConnect.request("game.treasureHandler.getBossInfo", {
    token: InfoManager.instance.token,
    gid: gids[1]
  }, function(t) { r.push(t) })
  WebConnect.instance.gameConnect.request("game.treasureHandler.getBossInfo", {
    token: InfoManager.instance.token,
    gid: gids[3]
  }, function(t) { r.push(t) })
  WebConnect.instance.gameConnect.request("game.treasureHandler.getBossInfo", {
    token: InfoManager.instance.token,
    gid: gids[4]
  }, function(t) { r.push(t) })
  fightGuard(gids[1]);
  fightGuard(gids[3]);
});