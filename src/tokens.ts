import { useResponsive } from './useResponsive';

export const useTokens = () => {
  const { scale, fontScale, deviceType } = useResponsive();

  const scaleByDevice = (value: number) => {
    if (deviceType === 'tv') return scale(value * 1.5);
    if (deviceType === 'tablet') return scale(value * 1.2);
    return scale(value);
  };

  const fontSizeByDevice = (value: number) => {
    if (deviceType === 'tv') return fontScale(value * 1.6);
    if (deviceType === 'tablet') return fontScale(value * 1.2);
    return fontScale(value);
  };

  return {
    spacing: {
      xs: scaleByDevice(4),
      sm: scaleByDevice(8),
      md: scaleByDevice(16),
      lg: scaleByDevice(24),
      xl: scaleByDevice(32),
    },
    radius: {
      sm: scaleByDevice(4),
      md: scaleByDevice(8),
      lg: scaleByDevice(12),
      xl: scaleByDevice(16),
      round: 999,
    },
    fontSize: {
      xs: fontSizeByDevice(10),
      sm: fontSizeByDevice(12),
      md: fontSizeByDevice(14),
      lg: fontSizeByDevice(18),
      xl: fontSizeByDevice(24),
      xxl: fontSizeByDevice(32),
    },
    iconSize: {
      sm: scaleByDevice(16),
      md: scaleByDevice(24),
      lg: scaleByDevice(32),
    },
  };
};
