import { getDataAmount } from './2_repair';
// eslint-disable-next-line import/no-unresolved
import { Data } from 'src/homeworks/ts1/2_repair';

describe('all', () => {
  it('getDataAmount', () => {
    // const data = {
    //   type: 'Money',
    //   value: { currency: 'RUR', amount: 55 },
    // };
    expect(
      getDataAmount({
        type: 'Money',
        value: { currency: 'RUR', amount: 55 },
      })
    ).toEqual(55);
  });
});
