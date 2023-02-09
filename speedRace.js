// Speed race na motocikle beskonechno
times = 0;
exchange = () => {
  WebConnect.getInstance().gameConnect.request("game.welfareHandler.newExchangeGift", {
    token: InfoManager.instance.token,
    key: "RACEMOTOR-12-17",
    id: 8205
  }, function(t){ 
    times = times + 1;
  });
}

endRace = (n = 0) => {
  if (n > 4) return;
  WebConnect.getInstance().gameConnect.request("game.raceMotorHandler.endRace", {
    token: InfoManager.instance.token,
    actIns: "RACEMOTOR-11-12",
    distance: 1200,
    coin: 110
  }, function(t){ 
    setTimeout(() => {
      endRace(n + 1);
    }, 500)
  });
}

endRace();

