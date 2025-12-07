import healthStatus from '../health';

describe('healthStatus', () => {
  test('should return "healthy" when health is greater than 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(healthStatus(character)).toBe('healthy');
  });

  test('should return "healthy" when health is 100 (maximum)', () => {
    const character = { name: 'Воин', health: 100 };
    expect(healthStatus(character)).toBe('healthy');
  });

  test('should return "healthy" when health is 51 (boundary)', () => {
    const character = { name: 'Лучник', health: 51 };
    expect(healthStatus(character)).toBe('healthy');
  });

  test('should return "wounded" when health is 50 (boundary)', () => {
    const character = { name: 'Маг', health: 50 };
    expect(healthStatus(character)).toBe('wounded');
  });

  test('should return "wounded" when health is between 15 and 50', () => {
    const character = { name: 'Рыцарь', health: 30 };
    expect(healthStatus(character)).toBe('wounded');
  });

  test('should return "wounded" when health is 16 (boundary)', () => {
    const character = { name: 'Монах', health: 16 };
    expect(healthStatus(character)).toBe('wounded');
  });

  test('should return "critical" when health is 15 (boundary)', () => {
    const character = { name: 'Убийца', health: 15 };
    expect(healthStatus(character)).toBe('critical');
  });

  test('should return "critical" when health is less than 15', () => {
    const character = { name: 'Мечник', health: 10 };
    expect(healthStatus(character)).toBe('critical');
  });

  test('should return "critical" when health is 0 (minimum)', () => {
    const character = { name: 'Призрак', health: 0 };
    expect(healthStatus(character)).toBe('critical');
  });
});
