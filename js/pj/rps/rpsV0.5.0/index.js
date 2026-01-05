let list = ["가위", "바위", "보"];
let inputText, input, uidx = -1;
let imgList = ["sc", "ro", "pa"];

window.onload = function () {
    inputText = document.getElementById("input");
}

function run() {
    input = inputText.value;
    uidx = list.indexOf(input);
    if (uidx == -1) {
        alert("잘못된 입력입니다. 다시 입력해주세요.");
        return;
    }
    
    let cidx = Math.floor(Math.random() * 3);

    let s = "";

    let uimg = document.createElement("img");
    uimg.src="../img/rpc/" + imgList[uidx] + ".png";
    dw("user", uimg);
    
    let cimg = document.createElement("img");
    cimg.src="../img/rpc/" + imgList[cidx] + ".png";
    dw("computer", cimg);

    if (uidx === cidx) {
        s = "무승부입니다.";
    } else if ((uidx - cidx + 3) % 3 == 1) {
        s = "승리했습니다.";
    } else {
        s = "패배했습니다.";
    }

    document.getElementById("result").innerText = s;
}

function dw(id, tag) {
    document.getElementById(id).replaceChildren(tag);

}
