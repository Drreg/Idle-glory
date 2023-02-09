g = {}
WebConnect.instance.gameConnect.request("game.goldMineHandler.getMyGoldMineData", {
  token: InfoManager.instance.token
}, (t) => {
  if (t.code !== 200) return;
  const slaveholder = t.user.myGoldMine.slaveholder;
  WebConnect.instance.gameConnect.request("game.goldMineHandler.gainstSlaveholder", {
    token: InfoManager.instance.token,
    slaveholderId: slaveholder
  }, (t1) => {
    WebConnect.instance.gameConnect.request("game.goldMineHandler.endGainstSlaveholder", {
      token: InfoManager.instance.token,
      win: 1,
      slaveholderId: slaveholder
    }, (t2) => { g = t2 });
  })
})