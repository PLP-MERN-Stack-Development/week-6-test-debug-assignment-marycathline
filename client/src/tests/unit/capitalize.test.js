import { capitalize } from '../../utils/capitalize';

describe('capitalize', () => {
  it('capitalizes the first letter of a word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('returns empty string if input is falsy', () => {
    expect(capitalize()).toBe('');
    expect(capitalize(null)).toBe('');
  });

  it('returns string unchanged if already capitalized', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });
});
