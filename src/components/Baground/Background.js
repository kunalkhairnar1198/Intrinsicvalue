import {StatusBar, StyleSheet, View} from 'react-native';

import Backgroundcircle from '../../assets/SVG/BgSvgs/Backgroundcircle';

import {useRoute} from '@react-navigation/native';

const Background = () => {
  const route = useRoute();
  const isLoginScreen =
    route.name === 'LoginScreen' || route.name === 'EmailVerificationScreen';

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <Backgroundcircle
        style={styles.topLeft}
        cx={isLoginScreen ? 400 : 50}
        cy={50}
        r={200}
      />

      <Backgroundcircle
        style={isLoginScreen ? styles.bottomLeft : styles.bottomRight}
        cx={200}
        cy={200}
        r={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    ...StyleSheet.absoluteFillObject,
  },
  topLeft: {
    top: 0,
    left: 0,
  },
  bottomRight: {
    position: 'absolute',
    bottom: -680,
    left: 180,
  },
  bottomLeft: {
    position: 'absolute',
    bottom: -690,
    right: 140,
  },
});

export default Background;
