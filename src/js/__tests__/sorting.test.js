import sortByHealth from '../sorting';

describe('sortByHealth', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortByHealth(heroes);
    expect(result).toEqual(expected);
  });

  test('toEqual works for comparing arrays with objects, toBe does not', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortByHealth(heroes);

    // toEqual compares deep equality (values)
    expect(result).toEqual(expected);

    // toBe compares reference equality - will fail because result and expected are different objects
    expect(result).not.toBe(expected);
  });

  test('should handle already sorted array', () => {
    const heroes = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortByHealth(heroes);
    expect(result).toEqual(expected);
  });

  test('should handle single hero array', () => {
    const heroes = [{ name: 'воин', health: 50 }];
    const expected = [{ name: 'воин', health: 50 }];

    const result = sortByHealth(heroes);
    expect(result).toEqual(expected);
  });

  test('should handle empty array', () => {
    const heroes = [];
    const expected = [];

    const result = sortByHealth(heroes);
    expect(result).toEqual(expected);
  });

  test('should not mutate original array (immutability)', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const originalCopy = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    sortByHealth(heroes);

    // Original array should remain unchanged
    expect(heroes).toEqual(originalCopy);
  });

  test('should handle heroes with equal health', () => {
    const heroes = [
      { name: 'воин', health: 50 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 50 },
    ];

    const result = sortByHealth(heroes);

    // First hero should have health 100
    expect(result[0].health).toBe(100);
    // Next two should have health 50
    expect(result[1].health).toBe(50);
    expect(result[2].health).toBe(50);
  });
});
