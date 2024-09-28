import Character from './Character';

class Undead extends Character {
    constructor(name) {
        const attack = 25; // Define specific attack value
        const defence = 25; // Define specific defence value
        super(name, 'Undead', attack, defence);
    }
}

export default Undead;