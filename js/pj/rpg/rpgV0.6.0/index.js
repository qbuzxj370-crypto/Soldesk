window.onload = function() {
    let orc = new Monster("오크1", 100, 15);

    let elf = new Person("엘프1", 80, 25);

    let characters = new Characters();
    characters.addCharacter(orc);
    characters.addCharacter(elf);

    characters.printCharacters();

    characters.battle();

    characters.printCharacters();
}