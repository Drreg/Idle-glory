// Pobedit stoyashego vishe na arene

a = [];
attackArena = (opponents, n, index = 0) => {
  if (n > 10) return;
  if (index > opponents.length - 1) {
    findOpponents(n + 1);
    return;
  }  
  const oppUid = opponents[index]._id;
  WebConnect.getInstance().gameConnect.request("game.pvpHandler.confirmPVPByArena", {
    token: InfoManager.instance.token,
    oppUid: oppUid
  }, function(r) {
    a.push(r);
    WebConnect.getInstance().gameConnect.request("game.pvpHandler.endPVPByArena", {
      token: InfoManager.instance.token,
      win: 1,
      opid: oppUid,
      usedTime: 1500
    }, function(resp) {
      a.push(resp);
      if (resp.code !== 200) {
        setTimeout(() => {
          attackArena(opponents, n, index + 1);
        }, 10000);
      } else {
        InfoManager.instance.update(resp.user);
        findOpponents(n + 1);
      }
      return;
    });
  });
}

const findOpponents = (n = 1) => {
  WebConnect.getInstance().gameConnect.request("game.pvpHandler.startPVPByArena", {
    token: InfoManager.instance.token
  }, (res) => {
    const opponents = res.opponents;
    attackArena(opponents, n)
  });
};

findOpponents();
