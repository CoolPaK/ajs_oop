import Character from '../js/Character';

test('Создание персонажа с некорректным именем', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('name должен быть строкой от 2 до 10 символов');
});

test('Создание персонажа с некорректным типом', () => {
    expect(() => new Character('Robin', 'Warrior')).toThrow('Некорректный тип персонажа');
});

test('Создание персонажа Bowerman', () => {
    const character = new Character('Robin', 'Bowman');
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
});