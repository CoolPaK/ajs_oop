import Swordsman from './__test__/Swordsman';

describe('Тесты для Swordsman', () => {

    test('Создание персонажа Swordsman', () => {
        const swordsman = new Swordsman('Arthur');
        expect(swordsman.name).toBe('Arthur');
        expect(swordsman.type).toBe('Swordsman');
        expect(swordsman.health).toBe(100);
        expect(swordsman.level).toBe(1);
        expect(swordsman.attack).toBe(40);
        expect(swordsman.defence).toBe(10);
    });

    test('Тестирование некорректного имени у Swordsman', () => {
        expect(() => new Swordsman('A')).toThrow('name должен быть строкой от 2 до 10 символов');
        expect(() => new Swordsman('')).toThrow('name должен быть строкой от 2 до 10 символов');
        expect(() => new Swordsman(123)).toThrow('name должен быть строкой от 2 до 10 символов');
    });

    test('Тестирование некорректного типа у Swordsman', () => {
        expect(() => new Swordsman('Arthur', 'Warrior')).toThrow('Некорректный тип персонажа');
    });

});