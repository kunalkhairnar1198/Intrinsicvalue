import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useRef, useState, useEffect} from 'react';
import {Shadow} from 'react-native-shadow-2';
import {OtpInput} from 'react-native-otp-entry';
import {COLORS} from '../../constants/theme';

import IntrinsicIcon from '../../assets/SVG/appiconsvg/IntrinsicIcon';
import Background from '../../components/Baground/Background';
import Button from '../../components/Button/Button';
import responsive from '../../utils/responsive';
import {useNavigation} from '@react-navigation/native';
import toastService from '../../utils/ToastService/toastService';
import {useDispatch} from 'react-redux';
import {
  sendOtpAction,
  verifyEmailAction,
} from '../../store/authSlice/auth-slice';

const EmailVerificationScreen = ({route}) => {
  const navigation = useNavigation();
  // const route = useRoute();
  const dispatch = useDispatch();

  const otpRef = useRef();
  const [enteredOtp, setEnteredOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const email = route.params?.email;

  useEffect(() => {
    if (timer === 0) {
      setResendDisabled(false);
      return;
    }

    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleSubmit = otp => {
    if (otp.length !== 6) {
      toastService.showWarning(
        'Invalid OTP',
        'Please enter a valid 6-digit OTP.',
      );
      return;
    }

    dispatch(
      verifyEmailAction({
        data: {email, otp},
        setIsLoading,
        onSuccess: () => {
          navigation.navigate('Drawernavigation');
        },
      }),
    );

    otpRef?.current?.clear();
    setEnteredOtp('');
  };

  const handleResendOTP = () => {
    dispatch(
      sendOtpAction({
        emailId: email,
        resetTimer: () => {
          setResendDisabled(true);
          setTimer(30);
        },
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Background cx={400} cy={50} r={200} />

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

      <View style={styles.titleSection}>
        <Text style={styles.title}>Verify Your Email</Text>
        <Text style={styles.subTitle}>
          We emailed you the six-digit code to{' '}
          <Text style={{fontWeight: '700'}}>{`${email}`}</Text>. Enter the code
          below to confirm your email address.
        </Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.otpContainer}>
          <OtpInput
            ref={otpRef}
            numberOfDigits={6}
            focusColor={COLORS.primary}
            autoFocus={false}
            blurOnFilled={true}
            onTextChange={text => setEnteredOtp(text)}
            onFilled={handleSubmit}
            textInputProps={{
              accessibilityLabel: 'One-Time Password',
            }}
            theme={{
              pinCodeContainerStyle: styles.pinContainer,
              pinCodeTextStyle: styles.pinText,
            }}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.textResend}>If you didn’t receive a code!</Text>
        <TouchableOpacity
          onPress={handleResendOTP}
          disabled={resendDisabled}
          style={styles.resendContainer}>
          <Text
            style={[styles.resendText, resendDisabled && styles.disabledText]}>
            {resendDisabled ? `Resend OTP in ${timer}s` : 'Resend OTP'}
          </Text>
        </TouchableOpacity>
      </View>

      <Button
        onPress={() => handleSubmit(enteredOtp)}
        style={styles.buttonVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: responsive.padding(20),
  },
  pinContainer: {
    backgroundColor: '#F1F4FF',
    width: responsive.width(45),
    height: responsive.height(57),
    borderRadius: responsive.borderRadius(10),
    borderWidth: 1,
    borderColor: '#ccc',
  },
  pinText: {
    fontSize: responsive.fontSize(20),
    fontWeight: '600',
    fontFamily: 'inter',
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
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleSection: {
    textAlign: 'center',
    marginVertical: responsive.margin(10),
  },
  title: {
    fontSize: responsive.fontSize(26),
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'inter',
    color: COLORS.primary,
  },
  subTitle: {
    fontSize: responsive.fontSize(12),
    textAlign: 'center',
    fontFamily: 'inter',
    marginTop: responsive.margin(5),
    color: COLORS.darkGray,
  },
  formContainer: {
    width: '100%',
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: responsive.height(10),
  },
  textResend: {
    fontSize: responsive.fontSize(13),
    color: '#666',
    fontWeight: '500',
  },
  resendContainer: {
    padding: responsive.padding(5),
  },
  resendText: {
    fontSize: responsive.fontSize(13),
    fontWeight: '600',
    color: COLORS.primary,
  },
  disabledText: {
    color: '#999',
  },
  buttonVerify: {
    marginTop: responsive.margin(20),
    width: responsive.width(200),
    height: responsive.height(40),
    padding: responsive.padding(10),
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: responsive.fontSize(16),
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default EmailVerificationScreen;
