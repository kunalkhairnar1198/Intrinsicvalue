import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Base dimensions (Reference: iPhone X - 375x812)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

// Scaling functions
const scaleSize = size => (width / BASE_WIDTH) * size;
const verticalScaleSize = size => (height / BASE_HEIGHT) * size;

// Platform-specific adjustments
const platformFactor = Platform.select({
  ios: 1, // No scaling change for iOS
  android: 1.1, // Slightly increase size for Android due to different DPI scales
  default: 1,
});

const responsiveFontSize = size => {
  const scaleFactor = Math.min(width / BASE_WIDTH, height / BASE_HEIGHT) * platformFactor;
  return Math.round(size * scaleFactor);  
};

// Exported responsive object
const responsive = {
  width: size => scaleSize(size) * platformFactor,
  height: size => verticalScaleSize(size) * platformFactor,
  fontSize: size => responsiveFontSize(size),
  margin: size => scaleSize(size) * platformFactor,
  padding: size => scaleSize(size) * platformFactor,
  borderRadius: size => scaleSize(size) * platformFactor,
};

export default responsive;
