const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { wrapWithReanimatedMetroConfig } = require("react-native-reanimated/metro-config");

// Get the default Metro config
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

// Define custom Metro configuration
const customConfig = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"), // Remove SVG from assetExts
    sourceExts: [...sourceExts, "svg"], // Add SVG to sourceExts
  },
};

// Merge custom config with default config
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Wrap the final config with Reanimated's Metro config
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
