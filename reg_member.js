var ipId;
var ipPw;
var ipPw_re;
var ipUser_name;
var ipEmail;
var ipBirth_y;
var ipBirth_m;
var ipBirth_d;
var ipSexes;    // 주의
var ipTel_1;
var ipTel_2;
var ipTel_3;

var sexes;
var sex;

window.onload = function(){
    ipId=document.getElementById("id");
    ipPw=document.getElementById("pw");
    ipPw_re=document.getElementById("pw_re");
    ipUser_name=document.getElementById("user_name");
    ipEmail=document.getElementById("email");
    ipBirth_y=document.getElementById("birth_y");
    ipBirth_m=document.getElementById("birth_m");
    ipBirth_d=document.getElementById("birth_d");
    ipTel_1=document.getElementById("tel_1");
    ipTel_2=document.getElementById("tel_2");
    ipTel_3=document.getElementById("tel_3");

    ipSexes=document.getElementsByName("sex");
}
function check() {
    for (var i = 0; i < ipSexes.length; i++) {
        if (ipSexes[i].checked == true) {
            sex = ipSexes[i].value; // 해당 라디오 버튼의 값을 변수에 저장
            console.log('ok');
            break;
        }
    }
    alert(sex);
    if (ipId.value.length < 6 || ipId.value.length > 12) {
        alert("아이디는 6자리 이상 12자리 이하로 입력해주세요.");
    }
    else {
        alert("회원가입 성공");
    }
}