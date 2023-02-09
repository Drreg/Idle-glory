// ubiystvo vseh mirovih bossov
const bossesIds = [2066, 2067, 2068, 2069, 2070, 7234,7235, 7236, 7237, 7238, 7239, 7240, 7241, 7242, 7243, 7244, 7245, 7246, 7247, 7248, 10548, 10549, 10550, 10551, 10552, 10553, 10554, 10555, 10556, 10557];

// const bossesIds = [10548, 10549, 10550, 10551, 10552, 10553, 10554, 10555, 10556, 10557]

// const bossesIds = [7234, 7235, 7236, 7237, 7238, 7239, 7240, 7241, 7242, 7243];

let state = '';
states = [];

const worldBosses = (n, index = 0) => {
  if (index >= bossesIds.length) {
    state = `End wave ${n}`;
    states.push(state);
    return;
  }  
  const bossId = bossesIds[index];
  WebConnect.instance.gameConnect.request("game.summonBossHandler.startFightBoss", {
    bossId: bossId.toString(),
    token: InfoManager.instance.token
  }, function(res) {
    if (res.code !== 200) {
      states.push(res.codecode);
      setTimeout(() => { worldBosses(n, index + 1); }, 100);
      return;
    }
    setTimeout(() => {
      WebConnect.instance.gameConnect.request("game.summonBossHandler.fightBoss", {
        bossId: bossId.toString(),
        hp: "20000000000000",
        token: InfoManager.instance.token
      }, function(resp) {
        if (resp.code !== 200) {
          states.push(resp.code);
          setTimeout(() => { worldBosses(n, index + 1); }, 100);
          return;
        }
        WebConnect.instance.gameConnect.request("game.summonBossHandler.getDropBag", {
          bossId: bossId.toString(),
          token: InfoManager.instance.token
        }, function() {
          setTimeout(() => { 
            states.push(200);
            state = `End boss ${bossId}`;
            worldBosses(n, index + 1);
          }, 100);
        });
      })  
    }, 1000*7);
  });
}

iterator = (n = 0) => {
  worldBosses(n);
  const interval = setInterval(() => {  
    n = n + 1;
    if (n > 10) {
      state ='END';
      clearInterval(interval);
      return;
    }
    worldBosses(n);
  }, 1000*60*3);
}         

iterator();
