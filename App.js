import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Rootnavigation from './src/navigations/Rootnaviation/Rootnavigation';
import FocusAwareStatusBar from './src/components/Statusbar/FocustAwareStatusBar';
import {COLORS} from './src/constants/theme';

const App = () => {
  console.log('APPPREDNER');
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <FocusAwareStatusBar
          barStyle="dark-content"
          backgroundColor={COLORS.white}
        />
        <Rootnavigation />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
