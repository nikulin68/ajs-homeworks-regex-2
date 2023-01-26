import convertingNumber from '../app';

test.each([
  [
    '+7 (960) 000-00-00',
    '+79600000000',
  ],
  [
    '+86 000 000 0000',
    '+860000000000',
  ],
])('Удаление символов', (received, expected) => {
  expect(convertingNumber(received)).toBe(expected);
});

test('Замена 8 для номеров РФ', () => {
  const received = '8 (927) 000-00-00';
  const expected = '+79270000000';

  expect(convertingNumber(received)).toBe(expected);
});
