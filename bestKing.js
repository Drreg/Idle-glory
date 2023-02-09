// Sobitie chempiona 1 mesto vsegda
// Темные
// Воин - 7, 0.835
// Жрец - 9, 0.737
// Чернокнижница - 10, 0.619
// Шаман - 8, 0.639
// Охотник - 6, 0.712
// Разбойник - 12, 0.43
// Колдунья - 18, 0.75
// Мастер ужаса - 40, 0.72
// Лунная - 56, 0.7
// Упокоитель - 30, 0.585
// Меч - 46, 0.75
// Регина - 14, 0.75

// Светлые
// Воин - 1, 0.786
// Маг - 2, 0.786
// Жрец - 3, 0.727
// Разбойник - 4, 0.43
// Друид - 5, 0.742
// Охотник - 11, 0.712
// Чародейка - 17, 0.75
// Копейщик - 29, 0.585
// Пушка - 45, 0.75
// Морфей - 39, 0.72
// Эос - 55, 0.7
// Регина - 13, 0.75
// Белка - 25, 0.7


g = {};
a = {};
b = {};
heroId = 9;
//6 sign K = 10 sign
//5 sign K = 9 sign 
WebConnect.getInstance().gameConnect.request("game.newBestHeroHandler.getBestHeroData", {
  token: InfoManager.instance.token,
  actIns: "BESTKING-02-12"
}, function(t) {
  g = t;
  WebConnect.getInstance().gameConnect.request("game.newBestHeroHandler.startFight", {
    token: InfoManager.instance.token,
    actIns: "BESTKING-02-12",
    heroId: heroId
  }, function(t1) {
    a = t1;
    WebConnect.getInstance().gameConnect.request("game.newBestHeroHandler.endFight", {
      token: InfoManager.instance.token,
      actIns: "BESTKING-02-12",
      heroId: heroId,
      hp: 1234567890*100,
      fightTime: 90006
    }, function(t2) {
      b = t2;
    });
  });
});