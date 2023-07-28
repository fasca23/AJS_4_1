// eslint-disable-next-line import/extensions
import healthColorIndicator from '../app';

// eslint-disable-next-line no-undef
test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Лучник', health: 45 }, 'wounded'],
  [{ name: 'Танк', health: 5 }, 'critical'],
  [{ name: 'Черный маг', health: 50 }, 'wounded'],
  [{ name: 'Леший', health: 15 }, 'critical'],
])('проверка цветовой индикации здоровья', (object, expected) => {
  const result = healthColorIndicator(object);
  expect(result).toBe(expected);
});
