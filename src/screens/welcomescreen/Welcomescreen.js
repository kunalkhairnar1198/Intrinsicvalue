import {Alert, StyleSheet, Text, View, SafeAreaView} from 'react-native';

import responsive from '../../utils/responsive';
import {COLORS} from '../../constants/theme';
import AppIconSvg from '../../assets/SVG/appiconsvg/AppIconSvg';

import Button from '../../components/Button/Button';
import Background from '../../components/Baground/Background';

const WelcomeScreen = ({navigation}) => {
  console.log('welcomes');
  return (
    <SafeAreaView style={styles.container}>
      
      <Background />

      <View style={styles.welcomeContainer}>
        <View style={styles.centeredContent}>
          <Text style={styles.welcomeText}>Welcome To</Text>
          <View style={styles.welcomeIcon}>
            <AppIconSvg />
            <Text style={styles.iconText}>
              Value Investing Meets Artificial Intelligence
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          
          <Button
            onPress={() => {
              navigation.navigate('Registerscreen');
            }}
            style={styles.createButton}>
            <View>
              <Text style={styles.createText}> Create Account</Text>
            </View>
          </Button>

          <Button
              onPress={() => {
                navigation.navigate('Loginscreen');
              }}
            style={styles.loginButton}>
            <View>
              <Text style={styles.loginText}> Login </Text>
            </View>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeContainer: {
    // position: 'absolute',
    width: responsive.width(350),
    height: responsive.height(600),
    padding: responsive.padding(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredContent: {
    flex: 1,
    marginVertical: responsive.height(150),
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    textAlign: 'center',
    color: COLORS.primary,
    fontSize: responsive.fontSize(30),
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
  },
  welcomeIcon: {
    alignItems: 'center',
    marginTop: responsive.height(15),
  },
  iconText: {
    marginVertical: responsive.height(5),
    fontSize: responsive.fontSize(12),
    fontWeight: '500',
    fontFamily: 'Inter-regular',
    color: COLORS.black,
    textAlign: 'center',
  },
  buttonContainer: {
    width: responsive.width(200),
    marginBottom: responsive.height(-80),
  },
  createButton: {
    backgroundColor: COLORS.primary,
    borderWidth: 1,
  },
  loginButton: {
    marginTop: responsive.height(20),
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  createText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
