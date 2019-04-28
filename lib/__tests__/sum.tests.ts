import { expect } from 'chai';
import { sum } from '../sum';

describe('sum', function() {
  it('returns 0', function() {
    const expected = 0;
    const input: number[] = [];
    const actual = sum(input);
    expect(actual).to.eq(expected);
  });
  it('returns 6', function() {
    const expected = 6;
    const input = [1, 2, 3];
    const actual = sum(input);
    expect(actual).to.eq(expected);
  });
  it('returns -6', function() {
    const expected = -6;
    const input = [-1, -2, -3];
    const actual = sum(input);
    expect(actual).to.eq(expected);
  });
});
