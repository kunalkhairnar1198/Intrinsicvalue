/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {MaterialTopTabContextProvider} from './src/context-api/MaterialTopTabContext';
import {Provider} from 'react-redux';
import {Store} from './src/store/Store';

const Application = () => (
  <Provider store={Store}>
    <PaperProvider>
      <MaterialTopTabContextProvider>
        <App />
      </MaterialTopTabContextProvider>
    </PaperProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Application);
