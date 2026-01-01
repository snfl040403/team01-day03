const blacksmith = {};

blacksmith.name = "드워프";
blacksmith.stamina = 100;
blacksmith.skill = 15;
blacksmith.repair = function (wepon) {
    this.stamina -= 5
    wepon.durability += this.skill
    if(wepon.durability >= 100){
        wepon.durability = 100;
        wepon.isBroken = false;
    }
}

const sword = {};

sword.name = "엑스칼리버";
sword.durability = 60;
sword.isBroken = true;

for (let i = 0; i < 3; i++) {
    blacksmith.repair(sword);
    console.log((i + 1) + "번째 수리 완료!"); // 진행 상황 보려고 추가함
}

console.log(blacksmith);
console.log(sword);




