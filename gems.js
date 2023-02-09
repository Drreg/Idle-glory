// Exchange all gems to red;
// gems0 = [1,3,4,5];
// gems1 = [6,8,9,10];
// gems2 = [16,18,19,20];
// gems3 = [26,28,29,30];
// gems4 = [36,38,39,40];
// gems5 = [46,48,49,50];
WebConnect.getInstance().gameConnect.request("game.gameHandler.mergeGems", {
  token: InfoManager.instance.token,
  gemIds: [1,3,4,5,6,8,9,10,16,18,19,20,26,28,29,30,36,38,39,40,46,48,49,50],
  diamondCost: 0,
  targetGemType: 2,
  targetGemLev:6
}, function(t) {
  InfoManager.instance.update(t.user);
});
