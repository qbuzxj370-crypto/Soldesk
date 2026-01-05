
var r = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
let src;
switch(r){
    case 1:
        src = "dice_1"
        break;
    case 2:
        src = "dice_2"
        break;
    case 3:
        src = "dice_3"
        break;
    case 4:
        src = "dice_4"
        break;
    case 5:
        src = "dice_5"
        break;
    case 6:
        src = "dice_6"
        break;
}
document.write("<img src=\"../img/dice/" + src +".png\">");