import Character from './Character';

class Zombie extends Character {
    constructor(name) {
        const attack = 40; // Define specific attack value
        const defence = 10; // Define specific defence value
        super(name, 'Zombie', attack, defence);
    }
}

export default Zombie;