import Character from './Character';

class Bowerman extends Character {
    constructor(name) {
        const attack = 25; // Define specific attack value
        const defence = 25; // Define specific defence value
        super(name, 'Bowman', attack, defence);
    }
}

export default Bowerman;