import { describe, it, expect } from '@jest/globals';
import { superComputer, callback } from '../src/superComputer';

describe('Test SuperComputer', () => {
  it('Addition', () => {
    expect(superComputer(1, '+', 1, callback)).toBe(2);
  });

  it('Division', () => {
    expect(superComputer(100, '/', 2, callback)).toBe(50);
  });
});
