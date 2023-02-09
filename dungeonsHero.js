// Podzemelie heroev vse bossy i etaji

let isPitEnd = false;
const pitFight1 = (pit = 1, floor = 1) => {
  if (pit === 1 && floor === 1) isPitEnd = false;
  if (floor > 200) {
    isPitEnd = true;
    return;
  }  
  if (pit < 5 && floor > 50) {
    pitFight1(pit + 1);
    return;
  }  
  WebConnect.getInstance().gameConnect.request("game.pveHandler.dealFightPit", {
    token: InfoManager.instance.token,
    pitNo: pit,
    waveNos: [1]
  }, function(t) {
    if (t.code === 200) InfoManager.instance.update(t.user);
    setTimeout(() => {
      pitFight1(pit, floor + 1);
    }, 200);
  });
} 
const pitRecord1 = InfoManager.instance.playerInfo.pitDayRecord;
const idx1 = pitRecord1.indexOf(0) - 1;
let pit1 = 1, floor1 = 1;
if (pitRecord1[idx1] === 50) {
  pit1 = idx1 + 2;
  floor1 = 1;
} else {
  pit1 = idx1 + 1;
  floor1 = pitRecord1[idx1] + 1;
}
pitFight1(pit1, floor1);
