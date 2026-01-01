// [문제: 전설의 대장장이]

// 상황: 대장장이가 망가진 무기를 수리합니다.
// 수리할 때마다 대장장이의 체력이 깎이고, 무기의 내구도가 회복됩니다.

// 1. blacksmith (대장장이) 객체를 정의하세요.
//    - name: "드워프"
//    - stamina: 100 (체력)
//    - skill: 15 (수리 능력)
//    - repair: function (weapon) 메서드
//      [기능]
//      1. 대장장이의 stamina가 5 감소합니다.
//      2. 전달받은 weapon의 durability(내구도)를 대장장이의 skill만큼 증가시킵니다.
//      3. 만약 수리 후 weapon의 durability가 100 이상이 된다면:
//         - durability를 100으로 고정합니다. (최대 내구도 제한)
//         - weapon의 isBroken 상태를 false로 변경합니다.

const blacksmith = {
    name: "드워프",
    stamina: 100,
    skill: 15,
    repair: function (weapon) {
        this.stamina -= 5;
        weapon.durabillity += this.skill;
        if (weapon.durabillity >= 100) {
            weapon.durabillity = 100;
            weapon.isBroken = false;
        }
    },
};

// 여기에 코드를 작성하세요.

// 2. sword (검) 객체를 정의하세요.
//    - name: "엑스칼리버"
//    - durability: 60 (현재 내구도)
//    - isBroken: true (파손 여부)

const sword = {
    name: "엑스칼리버",
    durabillity: 60,
    isBroken: true,
};

// 여기에 코드를 작성하세요.

// 3. 실행 및 결과 확인
//    - 대장장이가 검을 수리하도록 repair 메서드를 3번 호출하세요. (반복문 말고 그냥 3줄 쓰셔도 됩니다)
//    - 수리가 끝난 후 blacksmith와 sword 객체의 상태를 console.log로 출력하세요.

// 실행 코드 작성

blacksmith.repair(sword);
blacksmith.repair(sword);
blacksmith.repair(sword);

console.log(sword);
console.log(blacksmith);
