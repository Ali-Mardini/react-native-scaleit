import { getDeviceType, getScalingFactor } from '../src/core/scaleLogic';

describe('getDeviceType()', () => {
  it('returns phone', () => {
    expect(getDeviceType(375, 812)).toBe('phone');
  });

  it('returns tablet', () => {
    expect(getDeviceType(800, 1200)).toBe('tablet');
  });

  it('returns tv', () => {
    expect(getDeviceType(1080, 1920)).toBe('tv');
  });
});

describe('getScalingFactor()', () => {
  it('returns 1 for phone', () => {
    expect(getScalingFactor('phone')).toBe(1);
  });

  it('returns 1.2 for tablet', () => {
    expect(getScalingFactor('tablet')).toBe(1.2);
  });

  it('returns 1.5 for tv', () => {
    expect(getScalingFactor('tv')).toBe(1.5);
  });
});
