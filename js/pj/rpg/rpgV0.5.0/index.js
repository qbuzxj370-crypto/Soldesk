window.onload = function() {
    let orc = new Monster("오크1", 100, 15);

    let elf = new Person("엘프1", 80, 25);

    let characters = new Characters();
    characters.addCharacter(orc);
    characters.addCharacter(elf);

    characters.printCharacters();

    let board = document.getElementById("gameboard");
    let div = document.createElement("div");
    div.innerHTML = "<hr>전투 시작<hr>";
    board.appendChild(div);

    orc.hp -= elf.damage(orc.name);
    elf.hp -= orc.damage(elf.name);

    characters.printCharacters();
}