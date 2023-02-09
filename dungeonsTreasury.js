// Podzemelie kazny vse bossy

dungeonsTreasury = (bossIndex = 0) => {
  if (bossIndex > 15) return;
  WebConnect.instance.gameConnect.request("game.factionBattleHandler.startWintergraspCopy", {
    bossIndex: bossIndex,
    token: InfoManager.instance.token
  }, function(){
    WebConnect.instance.gameConnect.request("game.factionBattleHandler.endWintergraspCopy", {
      bossIndex: bossIndex,
      token: InfoManager.instance.token
    }, function(e) {
      InfoManager.instance.update(e.user);
      VaultInfo.updateVaultInfo(e.user);
      setTimeout(() => {
        dungeonsTreasury(bossIndex + 1);
      }, 1000*10);
    });  
  });
}

dungeonsTreasury();
