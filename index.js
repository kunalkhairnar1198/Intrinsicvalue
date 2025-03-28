/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {MaterialTopTabContextProvider} from './src/context-api/MaterialTopTabContext';

const Application = () => (
  <PaperProvider>
    <MaterialTopTabContextProvider>
      <App />
    </MaterialTopTabContextProvider>
  </PaperProvider>
);

AppRegistry.registerComponent(appName, () => Application);
