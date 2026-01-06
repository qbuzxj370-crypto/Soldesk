function printText(str, classStr) {
    let div = document.createElement("div");
    div.className = classStr;
    div.innerHTML = `<p>${str}</p>`;
    document.getElementById("gameboard").appendChild(div);
}

class Unit {
    constructor(name, max_hp, attack) {
        this.name = name;
        this.max_hp = max_hp;
        this.hp = max_hp;
        this.attack = attack;
    }

    returnHP() {
        return `(${this.hp}/${this.max_hp})`;
    }

    info() {
        printText(`[${this.name} (${this.returnHP()})]`, this.name);
    }

    damage(enermy) {
        let damage = Math.floor(Math.random() * this.attack) + 1;
        enermy.hp -= damage;
        printText(`${this.name}이(가) ${enermy.name}에게 ${damage}의 데미지를 입혔습니다. ${enermy.name}의 HP: ${enermy.returnHP()}`, this.name);
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

class Characters {
    constructor() {
        this.arr = [];
    }

    addCharacter(Character) {
        if (!(Character instanceof Unit)) {
            throw new Error("Character는 Unit을 상속받은 객체여야 합니다.");
        }

        this.arr.push(Character);
    }

    printCharacters() {
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i].info();
        }
    }

    battle() {
        if(this.arr.length < 2) {
            throw new Error("전투를 위해서는 최소 2명의 캐릭터가 필요합니다.");
        }
        printText("<hr>전투 시작<hr>");
        while(this.arr[0].hp > 0 && this.arr[1].hp > 0) {
            this.arr[1].damage(this.arr[0]);
            this.arr[0].damage(this.arr[1]);
        }
        if(this.arr[0].hp <= 0) {
            printText(`${this.arr[0].name}이(가) 패배했습니다.`, 'battleResult');
        }
        if(this.arr[1].hp <= 0) {
            printText(`${this.arr[1].name}이(가) 패배했습니다.`, 'battleResult');
        }
    }
}
