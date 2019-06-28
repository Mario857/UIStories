/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AppNavigator from 'views/AppNavigator';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
