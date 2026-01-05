let list = ["가위", "바위", "보"];
let input = prompt(`${list}를 입력해주세요: `);
let uidx = list.indexOf(input);
let cidx = Math.floor(Math.random() * 3);

let s = `사용자 : ${input} vs pc : ${list[cidx]} -> `;
if (uidx === cidx) {
    s += "무승부입니다.";
} else if ((uidx - cidx + 3) % 3 == 1) {
    s += "승리했습니다.";
} else {
    s += "패배했습니다.";
}

document.write(s);