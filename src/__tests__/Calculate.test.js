import Calculate from '../logic/calculate';

describe('Tests for calculate.js', () => {
  test('1st operand', () => {
    const testObj = {
      next: null,
      operation: null,
      total: 0,
    };
    const calc = Calculate(testObj, '5');
    expect(calc.next).toEqual('5');
  });

  test('Operation testing', () => {
    const testObj = {
      next: '5',
      operation: null,
      total: 0,
    };
    const calc = Calculate(testObj, 'x');
    expect(calc.operation).toEqual('x');
  });

  test('2nd operand', () => {
    const testObj = {
      next: null,
      operation: 'x',
      total: '5',
    };
    const calc = Calculate(testObj, '2');
    expect(calc.total).toEqual('5');
    expect(calc.next).toEqual('2');
    expect(calc.operation).toEqual('x');
  });

  test('Total', () => {
    const testObj = {
      next: '2',
      operation: 'x',
      total: '5',
    };
    const calc = Calculate(testObj, '=');
    expect(calc.total).toEqual('10');
  });
});
