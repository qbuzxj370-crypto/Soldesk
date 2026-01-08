window.onload = function(){
    timer = document.getElementById("timer");
}
interval = setInterval(secondMinus, 1000);  // 타이머 시작

function secondMinus(){
    var now = new Date();
    timer.innerHTML = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초 ${now.getMilliseconds()} 밀리초`;
}
