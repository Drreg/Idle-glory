// Start catching spies
let isSpiesCatching = false;
const spies = (index = 0) => {
  if (index === 0) isSpiesCatching = false;
  if (index > 29) {
    isSpiesCatching = true;
    return;
  }  
  WebConnect.getInstance().gameConnect.request("game.gameHandler.getAwardFromPumpkin", {
    token: InfoManager.instance.token
  }, function(t) {
    InfoManager.instance.update(t.result)
    setTimeout(() => {
      spies(index + 1);
    }, 200)
  });
};
// END catching spies
spies();
