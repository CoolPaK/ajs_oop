import Character from './Character';

class Swordsman extends Character {
    constructor(name) {
        const attack = 40; // Define specific attack value
        const defence = 10; // Define specific defence value
        super(name, 'Swordsman', attack, defence);
    }
}

export default Swordsman;