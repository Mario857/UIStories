import { Platform } from 'react-native';

const appLink = {
  android: '',
  ios: '',
}[Platform.OS];

const common = {
  isDev: true,
  nodeEnv: '',
  appLink,
  apiEndpoint: 'http://127.0.0.1:8080/',
};

const staging = {
  isDev: false,
  nodeEnv: 'staging',
};

const production = {
  isDev: false,
  nodeEnv: 'production',
};

const environments = {
  staging,
  production,
};

const nodeEnv = process.env.ENVIRONMENT || '';

export default {
  ...common,
  ...environments[nodeEnv],
};
