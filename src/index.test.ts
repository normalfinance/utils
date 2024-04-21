import { STABLECOINS } from '.';

describe('Test', () => {
  it('stablecoins', () => {
    expect(STABLECOINS).toHaveLength(10);
  });
});
