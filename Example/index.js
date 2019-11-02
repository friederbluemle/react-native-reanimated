/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// TODO(Bacon): When `expo` has removed Updates, replace this with using the `expo` entry for better error handling
if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root');
  AppRegistry.runApplication('ReanimatedExample', { rootTag });
}
