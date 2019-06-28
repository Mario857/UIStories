
module.exports = (api) => {
  api.cache(true);

  const presets = ['module:metro-react-native-babel-preset'];
  const plugins = [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          actions: './src/actions',
          assets: './src/assets',
          components: './src/components',
          modules: './src/modules',
          reducers: './src/reducers',
          services: './src/services',
          utils: './src/utils',
          views: './src/views',
          store: './src/store',
        },
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    '@babel/plugin-proposal-unicode-property-regex',
    'transform-inline-environment-variables',
  ];

  return {
    presets,
    plugins,
  };
};
