import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Rootnavigation from './src/navigations/Rootnaviation/Rootnavigation';
import FocusAwareStatusBar from './src/components/Statusbar/FocustAwareStatusBar';
import {COLORS} from './src/constants/theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const App = () => {
  console.log('APPPREDNER');
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <FocusAwareStatusBar
            barStyle="dark-content"
            backgroundColor={COLORS.white}
          />
          <Rootnavigation />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
