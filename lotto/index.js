let random;
let numbers = [];
let bonusNumber = 0;
while(numbers.length < 6) {
    random = Math.floor(Math.random() * 45) + 1;
    if(!numbers.includes(random)) {
        numbers.push(random);
    }
}
// numbers=[1, 2, 3, 4, 5, 6]; // 테스트용 고정값
while(true) {
    random = Math.floor(Math.random() * 45) + 1;
    if(!numbers.includes(random)) {
        bonusNumber = random;
        break;
    }
}
// bonusNumber=7; // 테스트용 고정값

let users = [];
while(users.length < 6) {
    input = Math.floor(Math.random() * 45) + 1;
    users.push(input);
}
// users=[7, 8, 3, 4, 5, 6]; // 테스트용 고정값

document.write("복권 : " + numbers);
document.write("<br>보너스 번호 : " + bonusNumber);
document.write("<br>추첨용지 : " + users);

let cnt = 0;
let bonus = false;
for(let i = 0; i < users.length; i++) {
    if(numbers.includes(users[i])) {
        cnt++;
    }
}
if(users.includes(bonusNumber)) {
    bonus = true;
}
let rank = "";
switch(cnt) {
    case 6:
        rank = "1등";
        break;
    case 5:
        rank = bonus ? "3등" : "2등";
        break;
    case 4:
        rank = "4등";
        break;
    case 3:
        rank = "5등";
        break;
    default:
        rank = "꽝";
        break;
}
document.write("<br>" + rank + " 입니다.");

