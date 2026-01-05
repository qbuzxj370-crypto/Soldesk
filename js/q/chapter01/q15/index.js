window.onload = function() {
    let a = document.getElementById("a");

    let num = 0;
    
    while(true){
        num = prompt("값을 입력하세요 :");
        if(num==100) {
            break;
        } else {
            a.innerHTML = "마지막 입력값: "+num+"<br>";
        }
    }

}