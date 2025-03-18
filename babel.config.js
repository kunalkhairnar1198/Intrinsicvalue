module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin'], // Keep this at the end
  
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
