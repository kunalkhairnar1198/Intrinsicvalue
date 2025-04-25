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
import {persistor, Store} from './src/store/Store';
import {PersistGate} from 'redux-persist/integration/react';

const Application = () => (
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <MaterialTopTabContextProvider>
        <PaperProvider>
          <App />
        </PaperProvider>
      </MaterialTopTabContextProvider>
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Application);
