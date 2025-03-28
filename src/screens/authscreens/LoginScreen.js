import React from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';

import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Text} from 'react-native-paper';
import {COLORS} from '../../constants/theme';
import {Shadow} from 'react-native-shadow-2';

import GoogleIcon from '../../assets/SVG/GoogleIcon';
import IntrinsicIcon from '../../assets/SVG/appiconsvg/IntrinsicIcon';
import LoginIcon from 'react-native-vector-icons/Entypo';

import responsive from '../../utils/responsive';
import Background from '../../components/Baground/Background';
import FormInput from '../../components/Forminput/FormInput';
import Button from '../../components/Button/Button';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters'),
});

const LoginScreen = () => {
  const navigation = useNavigation();

  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = data => {
    const Obj = {
      ...data,
      otp: Math.floor(100000 + Math.random() * 900000),
    };

    // navigation.navigate('EmailVerificationScreen', {Obj});
    navigation.navigate('Drawernavigation');
    // console.log('Form Data:', data);

    reset();
  };

  return (
    <View style={styles.container}>
      <Background />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true}
        extraScrollHeight={20}
        keyboardShouldPersistTaps="handled">
        <View style={styles.logoContainer}>
          <Shadow
            distance={10}
            startColor="rgba(0, 0, 0, 0.1)"
            endColor="rgba(0, 0, 0, 0)"
            offset={[1, 1]}>
            <View style={styles.logoWrapper}>
              <IntrinsicIcon />
            </View>
          </Shadow>
        </View>

        <View style={styles.formContainer}>
          <FormInput control={control} name="email" placeholder="Email" />
          <FormInput
            control={control}
            name="password"
            placeholder="Password"
            secureTextEntry={true}
          />
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPasswordScreen')}>
              <Text style={styles.forgetLink}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          <Button style={styles.loginButton} onPress={handleSubmit(onSubmit)}>
            <LoginIcon name="login" size={19} color="white" />

            <Text style={styles.loginText}>Login</Text>
          </Button>

          <View style={styles.googleSection}>
            <Text style={styles.googleText}>or continue with</Text>
            <View style={styles.googleIcon}>
              <Pressable
                onPress={() => navigation.navigate('Drawernavigation')}>
                <GoogleIcon />
              </Pressable>
            </View>
            <View style={styles.bottomTextContainer}>
              <Text style={styles.alredyText}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={styles.linkText}>Register for here.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 2,
    justifyContent: 'center',
  },
  logoContainer: {
    marginTop: responsive.height(130),
    marginBottom: responsive.height(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrapper: {
    backgroundColor: COLORS.white,
    padding: responsive.padding(15),
    borderTopLeftRadius: responsive.borderRadius(30),
    borderBottomRightRadius: responsive.borderRadius(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    marginTop: responsive.height(10),
    width: responsive.width(350),
    padding: responsive.padding(30),
    justifyContent: 'flex-start',
  },
  forgetLink: {
    color: COLORS.primary,
    fontFamily: 'Inter-bold',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: responsive.fontSize(12),
  },
  loginButton: {
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'center',
    marginVertical: responsive.height(15),
    justifyContent: 'center',
    width: responsive.width(200),
    height: responsive.height(40),
  },
  loginText: {
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: responsive.fontSize(17),
  },
  googleSection: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  googleText: {
    marginVertical: responsive.height(25),
    color: COLORS.primary,
    fontFamily: 'Inter-bold',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: responsive.fontSize(13),
  },
  googleIcon: {
    backgroundColor: COLORS.white,
    borderRadius: responsive.borderRadius(10),
    padding: responsive.padding(2),

    shadowColor: 'black',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 10,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsive.height(60),
  },
  alredyText: {
    fontSize: responsive.fontSize(12),
    fontWeight: '500',
    fontFamily: 'Inter-bold',
  },
  linkText: {
    fontSize: responsive.fontSize(12),
    fontWeight: '700',
    color: '#0707b0',
    textDecorationLine: 'none',
    marginLeft: 3,
  },
});

export default LoginScreen;
