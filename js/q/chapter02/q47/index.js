function Cat() {
    this.name = "";  // 이름
    this.age = 0;    // 나이
    this.weight = 0; // 몸무게
    this.family = "";    // 묘종
    this.color = "";     // 털색
}

let kitty = new Cat();
kitty.name = "야옹이";
kitty.age = 3;
kitty.weight = 4.5;
kitty.family = "코리안숏헤어";
kitty.color = "회색";

document.write("이름 : " + kitty.name);
document.write("<br>나이 : " + kitty.age);
document.write("<br>몸무게 : " + kitty.weight);
document.write("<br>묘종 : " + kitty.family);
document.write("<br>털색 : " + kitty.color);