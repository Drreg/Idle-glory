// ubiystvo bossa solo

killGuildBoss = () => {
  g = {};
  a = {};
  b = {};
  bossHp = 0;
  WebConnect.getInstance().gameConnect.request("game.guildBossHandler.getBoss", {
    token: InfoManager.instance.token,
    bossId: 7233,
  }, function(t) {
    g = t;
    bossHP = t.boss.remainHp;
    WebConnect.getInstance().gameConnect.request("game.guildBossHandler.startFightBoss", {
      token: InfoManager.instance.token,
      bossId: 7233,
      buy: 0
    }, function(t1) {
      a = t1;
      WebConnect.getInstance().gameConnect.request("game.guildBossHandler.endFightBoss", {
        token: InfoManager.instance.token,
        gid: InfoManager.instance.playerInfo.guild.gid,
        bossId: 7233,
        hp: bossHP
      }, function(t2) {
        b = t2;
      });
    });
  });
}

killGuildBoss();
