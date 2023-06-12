it('remove it', () => {
  expect(true).toBe(true);
});
import { getNumberedArray, toStringArray, transformCustomers } from './1_base';

describe('all', () => {
  it('transformCustomers', () => {
    const customers = [
      { id: 1, name: 'John', age: 25, isSubscribed: true },
      { id: 2, name: 'Mary', age: 40, isSubscribed: false },
      { id: 3, name: 'Bob', age: 32, isSubscribed: true },
      { id: 4, name: 'Alice', age: 22, isSubscribed: true },
      { id: 5, name: 'David', age: 48, isSubscribed: false },
    ];

    expect(transformCustomers(customers)).toEqual({
      1: { name: 'John', age: 25, isSubscribed: true },
      2: { name: 'Mary', age: 40, isSubscribed: false },
      3: { name: 'Bob', age: 32, isSubscribed: true },
      4: { name: 'Alice', age: 22, isSubscribed: true },
      5: { name: 'David', age: 48, isSubscribed: false },
    });
  });

  it('getNumberedArray', () => {
    const values = [1, 2, 4, 5, 7];

    expect(getNumberedArray(values)).toEqual([
      { number: 0, value: 1 },
      { number: 1, value: 2 },
      { number: 2, value: 4 },
      { number: 3, value: 5 },
      { number: 4, value: 7 },
    ]);
  });

  it('toStringArray', () => {
    const values = [
      { number: 0, value: 1 },
      { number: 1, value: 2 },
      { number: 2, value: 4 },
      { number: 3, value: 5 },
      { number: 4, value: 7 },
    ];

    expect(toStringArray(values)).toEqual(['1_0', '2_1', '4_2', '5_3', '7_4']);
  });
});
