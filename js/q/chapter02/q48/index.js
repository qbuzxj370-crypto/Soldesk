function Cat() {
    this.name = "";  // 이름
    this.age = 0;    // 나이
    this.weight = 0; // 몸무게
    this.family = "";    // 묘종
    this.color = "";     // 털색
    this.printInfo = function() {
        document.write("<br>이름 : " + this.name);
        document.write("<br>나이 : " + this.age);
        document.write("<br>몸무게 : " + this.weight);
        document.write("<br>묘종 : " + this.family);
        document.write("<br>털색 : " + this.color);
    }
}

let kitty = new Cat();
kitty.name = "키티";
kitty.age = 3;
kitty.weight = 4.5;
kitty.family = "코리안숏헤어";
kitty.color = "회색";

kitty.printInfo();

let yaongi = new Cat();
yaongi.name = "야옹이";
yaongi.age = Math.floor(Math.random() * 5) + 1;
yaongi.weight = 5;
yaongi.family = "샴고양이";
yaongi.color = "갈색";

yaongi.printInfo();

if(kitty.age == yaongi.age) {
    document.write("<br><br>둘은 친구입니다.");
}
else {
    let order = "형님 고양이: ";
    let younger = "동생 고양이: ";
    if(kitty.age < yaongi.age) {
        order += "야옹이";
        younger += "키티";
    }
    else {
        order += "키티";
        younger += "야옹이";
    }
    document.write("<br><br>" + order + "<br>" + younger);
}