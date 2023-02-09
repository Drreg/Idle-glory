// Osvobodit raba
g = {}
WebConnect.instance.gameConnect.request("game.goldMineHandler.endRescue", {
  token: InfoManager.instance.token,
  slaveholderId: "RU85685749",
  slaveId: "RU8558117"
}, function() {
  WebConnect.instance.gameConnect.request("game.goldMineHandler.endRescue", {
    token: InfoManager.instance.token,
    win: 1,
    slaveholderId: "RU85685749",
    slaveId: "RU8558117"
  }, function(t) { g = t })
})
