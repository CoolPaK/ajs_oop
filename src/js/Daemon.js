import Character from './Character';

class Daemon extends Character {
    constructor(name) {
        const attack = 10; // Define specific attack value
        const defence = 40; // Define specific defence value
        super(name, 'Daemon', attack, defence);
    }
}

export default Daemon;