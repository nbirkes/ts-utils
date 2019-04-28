import { expect } from 'chai';
import { single } from '../single';

describe('single', function() {
  it('returns true if 1 found', function() {
    const expected = { tenant: 'ncb' };
    let input = [
      { tenant: 'ncb' },
      { tenant: 'xyz' },
    ];
    const actual = single(input, it => it.tenant === 'ncb');
    expect(actual).to.deep.eq(expected);
  });
  it('throws if more than 1 found', function() {
    let input = [
      { tenant: 'ncb' },
      { tenant: 'ncb' },
      { tenant: 'xyz' },
    ];
    expect(() => {
      single(input, it => it.tenant === 'ncb');
    }).to.throw();
  });
  it('throws if none found', function() {
    let input = [
      { tenant: 'abc' },
      { tenant: 'xyz' },
    ];
    expect(() => {
      single(input, it => it.tenant === 'ncb');
    }).to.throw();
  });
});
