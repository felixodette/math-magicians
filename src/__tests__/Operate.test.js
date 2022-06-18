import operate from '../logic/operate';

describe('Operate tests', () => {
  test('Addition', () => {
    expect(operate(1, 4, '+')).toBe('5');
  });
  test('Division', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });
  test('Multiplication', () => {
    expect(operate(4, 2, 'x')).toBe('8');
  });
  test('Subtraction', () => {
    expect(operate(4, 2, '-')).toBe('2');
  });
});
