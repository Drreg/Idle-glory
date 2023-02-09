// Momentalnoe ubiystvo gwardov na BZ
sfbr = [];
oneMlnScore = 10*1000*1000*1000;
dmg = 1000*oneMlnScore;
gid = "RU10223";
WebConnect.getInstance().gameConnect.request("game.territoryHandler.startFigthBoss", {
  token: InfoManager.instance.token,
  gid: gid,
  guard: 1
}, function(t1){
  sfbr.push(t1);
  WebConnect.getInstance().gameConnect.request("game.territoryHandler.minusBossHp", {
    token: InfoManager.instance.token,
    gid: gid,
    guard: 1,
    hp: dmg,
    myGuards: [1,2]
  }, function(t2){    
    sfbr.push(t2);
    WebConnect.getInstance().gameConnect.request("game.territoryHandler.startFigthBoss", {
      token: InfoManager.instance.token,
      gid: gid,
      guard: 2
    }, function(t3){
      sfbr.push(t3);
      WebConnect.getInstance().gameConnect.request("game.territoryHandler.minusBossHp", {
        token: InfoManager.instance.token,
        gid: gid,
        guard: 2,
        hp: dmg,
        myGuards: [1,2]
      }, function(t4){
        sfbr.push(t4);
        if (t4.code === 200) InfoManager.instance.update(t4.user)
      });
    });
    WebConnect.getInstance().gameConnect.request("game.territoryHandler.startFigthBoss", {
      token: InfoManager.instance.token,
      gid: gid,
      guard: 2
    }, function(t3){
      sfbr.push(t3);
      WebConnect.getInstance().gameConnect.request("game.territoryHandler.minusBossHp", {
        token: InfoManager.instance.token,
        gid: gid,
        guard: 2,
        hp: dmg,
        myGuards: [2]
      }, function(t4){
        sfbr.push(t4);
        if (t4.code === 200) InfoManager.instance.update(t4.user)
      });
    });
  });
});
