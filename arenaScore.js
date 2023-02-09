// Provesti 10000 boev na arene
a = [];
attackArena = (opponents, n) => {
  if (n > 10000) return;
  const oppUid = opponents[opponents.length - 1]._id;
  WebConnect.getInstance().gameConnect.request("game.pvpHandler.confirmPVPByArena", {
    token: InfoManager.instance.token,
    oppUid: oppUid
  }, function(r) {
    a.push(r);
    WebConnect.getInstance().gameConnect.request("game.pvpHandler.endPVPByArena", {
      token: InfoManager.instance.token,
      win: 1,
      opid: oppUid,
      usedTime: 300
    }, function(resp) {
      a.push(resp);
      setTimeout(() => {
        if (resp.code === 200) {
          InfoManager.instance.update(resp.user);
        }
        findOpponents(n + 1);
      }, 300);
      return;
    });
  });
}

findOpponents = (n = 1) => {
  WebConnect.getInstance().gameConnect.request("game.pvpHandler.startPVPByArena", {
    token: InfoManager.instance.token
  }, (res) => {
    const opponents = res.opponents;
    attackArena(opponents, n)
  });
};

findOpponents();
