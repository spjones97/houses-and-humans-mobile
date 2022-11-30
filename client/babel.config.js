module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    production: {
      plugins: ['react-native-paper/babel'],
    },
  };
};
