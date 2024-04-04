import {TimeFormatPipe} from "./time-format.pipe";

describe('pipe.transform', () => {
  let pipe: TimeFormatPipe;

  beforeAll(() => {
    pipe = new TimeFormatPipe();
  });

  it('should pipe.transform time string correctly', () => {
    const inputTime = '2h30m';
    const expectedOutput = '2h 30min';
    expect(pipe.transform(inputTime)).toBe(expectedOutput);
  });

  it('should handle time string without minutes', () => {
    const inputTime = '3h';
    const expectedOutput = '3h';
    expect(pipe.transform(inputTime)).toBe(expectedOutput);
  });

  it('should handle time string without hours', () => {
    const inputTime = '45m';
    const expectedOutput = '45min';
    expect(pipe.transform(inputTime)).toBe(expectedOutput);
  });

  it('should handle time string with minutes only', () => {
    const inputTime = '15m';
    const expectedOutput = '15min';
    expect(pipe.transform(inputTime)).toBe(expectedOutput);
  });

  it('should return empty string for invalid input', () => {
    const inputTime = 'invalid';
    const expectedOutput = '';
    expect(pipe.transform(inputTime)).toBe(expectedOutput);
  });
});
