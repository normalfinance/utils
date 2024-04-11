import { STABLECOINS } from './exchange';

describe('Test', () => {
  it('sTABLECOINS', () => {
    expect(STABLECOINS).toHaveLength(10);
  });
});
