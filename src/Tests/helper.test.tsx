import { expect, test } from 'vitest';
import { ACodeToName } from '../helper/ConvertCodeToName';
import { NumberPop } from '../helper/NumberPopulation';

test("Converti l'alph3codes du pays en son nom", () => {
  expect(ACodeToName('FRA')).toBe('France');
  expect(ACodeToName('CAF')).toBe('Central African Republic');
  expect(ACodeToName('CHN')).toBe('China');
});

test('Le nombre est séparer par des virgules pour faire une distinction à partir de 10000', () => {
  expect(NumberPop(10000)).toBe('10,000');
  expect(NumberPop(46575436)).toBe('46,575,436');
  expect(NumberPop(1284499349)).toBe('1,284,499,349');
  expect(NumberPop(543)).toBe(543);
  expect(NumberPop(3432)).toBe(3432);
});
