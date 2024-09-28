import Bowerman from '../js/Bowerman';
import Character from '../js/Character';

test('Создание персонажа с некорректным именем', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('name должен быть строкой от 2 до 10 символов');
});

test('Создание персонажа с некорректным типом', () => {
    expect(() => new Character('Robin', 'Warrior')).toThrow('Некорректный тип персонажа');
});

test('Создание персонажа Bowerman', () => {
    const character = new Bowerman('Robin'); // Создаем персонажа Bowerman
    expect(character.attack).toBe(25); // Проверяем значение атаки
    expect(character.defence).toBe(25); // Проверяем значение защиты
});