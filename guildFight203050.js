// ubiystvo vseh protivnikov na klassike

g1 = {};
battleType = 20; // 20, 30, 50
fight = (opUid) => {
  WebConnect.getInstance().gameConnect.request("game.guildBattleHandler.startGuildFight", {
    token: InfoManager.instance.token,
    battleType: battleType, 
    opUid: opUid,
    addFightBuff: false
  }, function(t){
    WebConnect.getInstance().gameConnect.request("game.guildBattleHandler.endGuildFight", {
      token: InfoManager.instance.token,
      battleType: battleType,
      opUid: opUid,
      addFightBuff: 0,
      result: 1
    }, function(t){ g1 = t });
  });
};

WebConnect.getInstance().gameConnect.request("game.guildBattleHandler.getFightersInfo", {
  token: InfoManager.instance.token,
  battleType: battleType,
  getOps: 1
}, (t1) => {
  const opFighters = t1.opFighters;
  opFighters.forEach(op => {
    fight(op.uid) 
  });
});
