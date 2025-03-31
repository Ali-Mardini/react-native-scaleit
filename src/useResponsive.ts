import { useMemo } from 'react';
import { Dimensions, PixelRatio, Platform } from 'react-native';
import { getDeviceType, getScalingFactor } from './core/scaleLogic';

const { width, height } = Dimensions.get('window');
const deviceType = getDeviceType(width, height);
const scalingFactor = getScalingFactor(deviceType);

export const useResponsive = () => {
  const scale = (size: number) => ((width / 375) * size) * scalingFactor;
  const verticalScale = (size: number) => ((height / 812) * size) * scalingFactor;
  const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;
  const fontScale = (size: number) => PixelRatio.roundToNearestPixel(moderateScale(size));

  const platformSelect = <T,>(ios: T, android: T): T =>
    Platform.OS === 'ios' ? ios : android;

  return useMemo(
    () => ({
      scale,
      verticalScale,
      moderateScale,
      fontScale,
      screen: {
        width,
        height,
      },
      platformSelect,
      deviceType,
    }),
    []
  );
};
