import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {Checkbox} from 'react-native-paper';
import {COLORS} from '../../constants/theme';

import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import responsive from '../../utils/responsive';
import FormInput from '../../components/Forminput/FormInput';
import Background from '../../components/Baground/Background';
import Button from '../../components/Button/Button';
import toastService from '../../utils/ToastService/toastService';
import {useDispatch} from 'react-redux';
import {registerAction} from '../../store/authSlice/auth-slice';

const formFields = [
  {
    name: 'firstname',
    placeholder: 'First Name',
  },
  {
    name: 'lastname',
    placeholder: 'Last Name',
  },
  {name: 'email', placeholder: 'Email'},
  {
    name: 'number',
    placeholder: 'Phone Number',
  },
  {
    name: 'password',
    placeholder: 'Create Password',
    secureTextEntry: true,
  },
  {
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    secureTextEntry: true,
  },
];

const formSchema = z
  .object({
    firstname: z.string().min(2, 'Please enter a valid first name'),
    lastname: z.string().min(2, 'Please enter a valid last name'),
    email: z.string().email('Please enter a valid email'),
    number: z
      .string()
      .regex(/^\d{10}$/, 'Please enter a valid 10-digit phone number'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must be at most 20 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Confirm Password must be at least 6 characters')
      .max(20, 'Confirm Password must be at most 20 characters'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

const RegisterScreen = () => {
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      number: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = data => {
    if (!checked) {
      toastService.showWarning('Please accept the Terms & Conditions');
      return;
    }

    const userData = {
      email: data?.email,
      first_name: data?.firstname,
      last_name: data?.lastname,
      password: data?.password,
      user_mobileno: data?.number,
    };
    // console.log(userData);

    dispatch(
      registerAction({
        userData,
        setIsLoading,
        onEmailVerify: () => {
          // console.log('NAVIGATE email verification screen');
          navigation.navigate('EmailVerificationScreen', {email: data.email});
          reset();
        },
      }),
    );

    // console.log('Form Data:', data);
    // navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Background />

      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true}
        extraScrollHeight={25}
        keyboardShouldPersistTaps="handled">
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>Create An Account</Text>

          {formFields.map((field, index) => (
            <FormInput
              key={index}
              control={control}
              name={field.name}
              rules={field.rules}
              placeholder={field.placeholder}
              secureTextEntry={field.secureTextEntry || false}
              keyboardType={field.name === 'number' ? 'number-pad' : 'default'}
            />
          ))}

          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(!checked)}
              color={COLORS.primary}
              uncheckedColor="#000000"
            />
            <Text style={styles.checkboxText}>
              Creating your account means accepting{' '}
            </Text>
            <TouchableOpacity onPress={() => console.log('open')}>
              <Text style={styles.linkText}>Terms & Conditions.</Text>
            </TouchableOpacity>
          </View>

          <Button
            onPress={handleSubmit(onSubmit)}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Create Account</Text>
          </Button>

          <View style={styles.bottomTextContainer}>
            <Text style={styles.alreadyText}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.linkText}>Sign in here.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 2,
    justifyContent: 'center',
  },
  formContainer: {
    width: responsive.width(350),
    padding: responsive.padding(30),
    alignSelf: 'center',
  },
  titleText: {
    textAlign: 'center',
    color: COLORS.primary,
    fontSize: responsive.fontSize(30),
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
    marginBottom: responsive.height(20),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginVertical: responsive.height(10),
  },
  checkboxText: {
    fontSize: 13,
    fontWeight: '500',
  },
  linkText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
    textDecorationLine: 'none',
    marginLeft: 3,
  },
  buttonContainer: {
    width: responsive.width(250),
    height: responsive.height(45),
    padding: responsive.height(10),
    alignSelf: 'center',
    elevation: 2,
  },
  buttonText: {
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: responsive.fontSize(17),
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsive.height(60),
  },
  alreadyText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Inter-bold',
  },
});

export default RegisterScreen;
