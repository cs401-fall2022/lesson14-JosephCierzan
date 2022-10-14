import {describe, expect, test} from '@jest/globals';
import {hello} from '../main';

describe('sum module', () => {
  test('returns the string hello', () => {
    expect(hello()).toBe('Hello World');
  });
});
