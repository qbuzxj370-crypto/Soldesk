class Unit {
    constructor(name, max_hp, attack) {
        this.name = name;
        this.max_hp = max_hp;
        this.hp = max_hp;
        this.attack = attack;
    }

    info() {
        document.write(`<br>[${this.name} (${this.hp}/${this.max_hp})]`);
    }

    damage(enermy) {
        let damage = Math.floor(Math.random() * this.attack) + 1;
        document.write("<br>" + this.name + "이(가) " + enermy + "에게 " + damage + "의 데미지를 입혔습니다.");
        return damage;
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

let orc = new Monster("오크1", 100, 15);

let elf = new Person("엘프1", 80, 25);

orc.info();
elf.info();

document.write("<hr>");
document.write("전투 시작");
document.write("<hr>");

orc.hp -= elf.damage(orc.name);
elf.hp -= orc.damage(elf.name);

orc.info();
elf.info();
