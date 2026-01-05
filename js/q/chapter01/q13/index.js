
while (true) {
    let num = prompt("정수를 입력하십시오(100을 입력하면 종료): ")
    if (num > 100) {
        alert("100보다 큽니다.")
    } else if (num < 100) {
        alert("100보다 작습니다.")
    } else {
        alert("100입니다.")
        break;
    }
}