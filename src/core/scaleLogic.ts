export type DeviceType = 'phone' | 'tablet' | 'tv';

export const getDeviceType = (width: number, height: number): DeviceType => {
  const aspectRatio = height / width;
  if (width >= 600 && aspectRatio <= 1.6) return 'tablet';
  if (Math.min(width, height) >= 720 && Math.max(width, height) >= 1280 && aspectRatio > 1.6) return 'tv';
  return 'phone';
};

export const getScalingFactor = (deviceType: DeviceType): number => {
  if (deviceType === 'tv') return 1.5;
  if (deviceType === 'tablet') return 1.2;
  return 1;
};
