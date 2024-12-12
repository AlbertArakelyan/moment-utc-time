import { convertTimeToUtc, convertUtcToTime } from './converters';

describe('convertTimeToUtc', () => {
  it('should return null for empty input', () => {
    expect(convertTimeToUtc('')).toBeNull();
  });

  it('should convert local time to UTC with +4 offset', () => {
    const localTime = '12:30:00';
    const expectedUtcTime = '08:30:00';
    expect(convertTimeToUtc(localTime)).toBe(expectedUtcTime);
  });

  it('should handle invalid input', () => {
    const invalidInput = 'abc';
    expect(convertTimeToUtc(invalidInput)).toBeNull();
  });

  it('should handle time with minutes and seconds', () => {
    const localTime = '12:30:45';
    const expectedUtcTime = '08:30:45';
    expect(convertTimeToUtc(localTime)).toBe(expectedUtcTime);
  });

  it('should handle edge case where local time is 23:59:59', () => {
    const localTime = '23:59:59';
    const expectedUtcTime = '19:59:59';
    expect(convertTimeToUtc(localTime)).toBe(expectedUtcTime);
  });
});

describe('convertUtcToTime', () => {
  it('should return null for empty input', () => {
    expect(convertUtcToTime('')).toBeNull();
  });

  it('should convert UTC time to local time with -4 offset', () => {
    const utcTime = '12:30:00';
    const expectedLocalTime = '16:30:00';
    expect(convertUtcToTime(utcTime)).toBe(expectedLocalTime);
  });

  it('should handle invalid input', () => {
    const invalidInput = 'abc';
    expect(convertUtcToTime(invalidInput)).toBeNull();
  });

  it('should handle time with minutes and seconds', () => {
    const utcTime = '12:30:45';
    const expectedLocalTime = '16:30:45';
    expect(convertUtcToTime(utcTime)).toBe(expectedLocalTime);
  });

  it('should handle edge case where UTC time is 23:59:59', () => {
    const utcTime = '23:59:59';
    const expectedLocalTime = '03:59:59';
    expect(convertUtcToTime(utcTime)).toBe(expectedLocalTime);
  });
});
