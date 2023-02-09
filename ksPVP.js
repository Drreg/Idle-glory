// ubiystvo protivnikov na KS besplatno

results = [];

attack = (id) => {
  WebConnect.instance.gameConnect.request("game.factionBattleHandler.startPlunder", {
    uid: id,
    token: InfoManager.instance.token
  }, function(n) {
    results.push(n);
    WebConnect.instance.gameConnect.request("game.factionBattleHandler.endPlunder", {
      uid: id,
      win: 1,
      token: InfoManager.instance.token,
      usedTime: InfoManager.instance.LastBattleUsedTime
    }, function(t) {
      if (t.code === 200) {
        BattlefieldInfo.updateBattlefieldInfo(t);
        UpDateUserMgr.newUpdateUser(t);
      }
      results.push(t);
    });
  })
};

setInterval(() => {
  attack("2845c8d0-c812-11ea-bf05-07c6d575cbc5");
  setTimeout(() => {
    attack("d832b580-9547-11ea-a12b-ef7f670ddd2e");
  }, 400);
  setTimeout(() => {
    attack("632eef00-a966-11ea-a0c5-8379fb50ac61");
  }, 800);
  setTimeout(() => {
    attack("fb9c23d0-c43b-11ea-bf05-07c6d575cbc5");
  }, 1200);
  setTimeout(() => {
    attack("e77dc9e0-e6ae-11ea-b478-5d3c3f77c586");
  }, 1600);
  setTimeout(() => {
    attack("2459b790-ab34-11ea-a7db-6fa167f9f137");
  }, 2000);
}, 3*1000);