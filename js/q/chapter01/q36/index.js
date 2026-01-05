function addCatAndInputText() {
    let s = prompt("단어를 입력해주세요 : ");
    s += "고양이";
    window.onload = function() {
        document.write(s);
    }
}

addCatAndInputText();