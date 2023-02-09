// ubiystvo mobov na KS
const kspvefight = (monsters, index = 0) => {
  if (index >= monsters.length) return;
  const monsterId = monsters[index].MonsterID;
  WebConnect.instance.gameConnect.request("game.factionBattleHandler.pvm", {
    monsterId: monsterId,
    win: 1,
    token: InfoManager.instance.token
  }, function(t) {
    if (t.code === 200) {
      UpDateUserMgr.newUpdateUser(t);
      BattlefieldMgr.updateBufferNpcs(t.monster.monsterId, t.monster.nextTime);
      BattlefieldInfo.updateBattlefieldInfo(t);
    }
    setTimeout(() => {
      kspvefight(monsters, index + 1);
    }, 1500);
  });
}

const kspve = () => {
  WebConnect.instance.gameConnect.request("game.factionBattleHandler.getMonsters", {
    token: InfoManager.instance.token
  }, function(i) {
    const monsters = i.monsters;
    if (monsters.length > 0) kspvefight(monsters);
  });
};

kspve();
