class Unit{
    constructor(name, hp,  attack) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
    }

    info() {
        document.write("<br>이름: " + this.name);
        document.write("<br>체력: " + this.hp);
        document.write("<br>공격력: " + this.attack);
    }
}

class Monster extends Unit {
    constructor(name, hp, attack) {
        super(name, hp, attack);
    }  
}

class Person extends Unit {
    constructor(name, hp, attack) {
        super(name, hp, attack);
    }
}

let orc = new Monster("오크", 100, 15);

let elf = new Person("엘프", 80, 25);

orc.info();
elf.info();

document.write("<hr>");
document.write("전투 시작");
document.write("<hr>");
orc.hp -= elf.attack;
elf.hp -= orc.attack;

orc.info();
elf.info();
