import { getLevel } from '../level';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('getLevel', () => {
  test('should return level message when status is ok', () => {
    const mockResponse = {
      status: 'ok',
      level: 42,
    };

    fetchData.mockReturnValue(mockResponse);

    const result = getLevel(123);

    expect(result).toBe('Ваш текущий уровень: 42');
    expect(fetchData).toHaveBeenCalledWith('https://server/user/123');
  });

  test('should return unavailable message when status is not ok', () => {
    const mockResponse = {
      status: 'error',
    };

    fetchData.mockReturnValue(mockResponse);

    const result = getLevel(456);

    expect(result).toBe('Информация об уровне временно недоступна');
    expect(fetchData).toHaveBeenCalledWith('https://server/user/456');
  });

  test('should return unavailable message when status is missing', () => {
    const mockResponse = {};

    fetchData.mockReturnValue(mockResponse);

    const result = getLevel(789);

    expect(result).toBe('Информация об уровне временно недоступна');
    expect(fetchData).toHaveBeenCalledWith('https://server/user/789');
  });

  test('should call fetchData with correct URL for different userIds', () => {
    fetchData.mockReturnValue({ status: 'ok', level: 10 });

    getLevel(1);
    expect(fetchData).toHaveBeenCalledWith('https://server/user/1');

    getLevel(999);
    expect(fetchData).toHaveBeenCalledWith('https://server/user/999');
  });

  test('should handle different level values', () => {
    fetchData.mockReturnValue({ status: 'ok', level: 1 });
    expect(getLevel(100)).toBe('Ваш текущий уровень: 1');

    fetchData.mockReturnValue({ status: 'ok', level: 100 });
    expect(getLevel(200)).toBe('Ваш текущий уровень: 100');
  });
});
