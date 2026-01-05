class Unit {
    constructor(name, max_hp, attack) {
        this.name = name;
        this.max_hp = max_hp;
        this.hp = max_hp;
        this.attack = attack;
        this.board = document.getElementById("gameboard");
    }

    info() {
        this.addValue(`[${this.name} (${this.hp}/${this.max_hp})]`);
    }

    damage(enermy) {
        let damage = Math.floor(Math.random() * this.attack) + 1;
        this.addValue(`${this.name}이(가) ${enermy}에게 ${damage}의 데미지를 입혔습니다.`);
        return damage;
    }

    addValue(str) {
        let div = document.createElement("div");
        div.className = this.name;
        div.innerHTML = `<p>${str}</p>`;
        this.board.appendChild(div);
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
        this.characterArray = [];
    }

    addCharacter(Character) {
        if (!(Character instanceof Unit)) {
            throw new Error("Character는 Unit을 상속받은 객체여야 합니다.");
        }

        this.characterArray.push(Character);
    }

    printCharacters() {
        for (let i = 0; i < this.characterArray.length; i++) {
            this.characterArray[i].info();
        }
    }
}
