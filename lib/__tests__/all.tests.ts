import { expect } from 'chai';
import { all } from '../all';

interface Person {
  name: string;
}

describe('all', function() {
  it('returns true for empty array', function() {
    const expected = true;
    const input: string[] = [];
    const actual = all(input);
    expect(actual).to.equal(expected);
  });
  it('returns true for single item array', function() {
    const expected = true;
    const input: string[] = ['a'];
    const actual = all(input);
    expect(actual).to.equal(expected);
  });
  it('returns true when all match', function() {
    const expected = true;
    const input: string[] = ['a', 'a', 'a'];
    const actual = all(input);
    expect(actual).to.equal(expected);
  });
  it('returns true when all match, w/ preficate', function() {
    const expected = true;
    const people: Person[] = [
      { name: 'Nathan' },
      { name: 'Nathan' },
      { name: 'Nathan' },
    ];
    const actual = all(people, it => it.name);
    expect(actual).to.equal(expected);
  });
  it('returns false when all match', function() {
    const expected = false;
    const input: string[] = ['a', 'b', 'c'];
    const actual = all(input);
    expect(actual).to.equal(expected);
  });
  it('returns false when all match, w/ preficate', function() {
    const expected = false;
    const people: Person[] = [
      { name: 'Nathan' },
      { name: 'Courtney' },
      { name: 'Dylan' },
      { name: 'Hayden' },
    ];
    const actual = all(people, it => it.name);
    expect(actual).to.equal(expected);
  });
});
