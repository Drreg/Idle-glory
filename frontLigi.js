frontLigi = (n = 0) => {
  if (n > 7) return;
  WebConnect.getInstance().gameConnect.request("game.RatedBattleHandler.matchOpponent", {
    token: InfoManager.instance.token,
  }, function() {
    WebConnect.getInstance().gameConnect.request("game.RatedBattleHandler.endRateFight", {
      token: InfoManager.instance.token,
      win: 1
    }, function() {
      setTimeout(() => {
        frontLigi(n+1);
      }, 1000)
    });
  });
}

frontLigi();
