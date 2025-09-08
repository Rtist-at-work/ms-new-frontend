import { useWindowDimensions } from 'react-native';

export default function useScreenWidth() {
  const { width,height } = useWindowDimensions();

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  return { isMobile, isTablet, isDesktop, width,height };
}
