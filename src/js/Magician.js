import Character from './Character';

class Magician extends Character {
    constructor(name) {
        const attack = 10; // Define specific attack value
        const defence = 40; // Define specific defence value
        super(name, 'Magician', attack, defence);
    }
}

export default Magician;