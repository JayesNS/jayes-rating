import { NgjRoundPipe } from './ngj-round.pipe';

describe('NgjRoundPipe', () => {
  const pipe = new NgjRoundPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should give number with specific precision', () => {
    const value = pipe.transform(5.333332322121, 2);

    expect(value).toBe(5.33);
  });

  it('should round to the nearest whole number', () => {
    const value = pipe.transform(0.5);

    expect(value).toBe(1);
  });

  it('should round to the nearest whole number', () => {
    const value = pipe.transform(0.49);
    expect(value).toBe(0);

  });

  it('should round correctly to more decimal points', () => {
    const value = pipe.transform(0.58653843436, 10);
    expect(value).toBe(0.5865384344);
  });

  it('should handle negative precision', () => {
    const value = pipe.transform(0.333, -4);
    expect(value).toBe(0);
  });
});
