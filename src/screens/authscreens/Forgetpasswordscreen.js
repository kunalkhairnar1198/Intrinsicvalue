import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Shadow} from 'react-native-shadow-2';
import {COLORS} from '../../constants/theme';

import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Background from '../../components/Baground/Background';
import responsive from '../../utils/responsive';
import IntrinsicIcon from '../../assets/SVG/appiconsvg/IntrinsicIcon';
import FormInput from '../../components/Forminput/FormInput';
import Button from '../../components/Button/Button';

const schema = z.object({
  email: z.string().email('Please enter a valid email'),
});

const Forgotpasswordscreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Background />

      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true}
        extraScrollHeight={25}
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

        <View style={styles.titleSection}>
          <Text style={styles.title}>Reset Password</Text>
        </View>

        <View style={styles.formSection}>
          <FormInput
            control={control}
            name="email"
            placeholder="Email"
          />

          <Button style={styles.buttonReset} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonText}>Forget password</Text>
          </Button>
        </View>

        <View style={styles.bottomTextContainer}>
          <Text style={styles.alredyText}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Registerscreen')}>
            <Text style={styles.linkText}>Register for here.</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollContainer: {
    flexGrow: 2,
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
  titleSection: {
    marginVertical: responsive.height(35),
  },
  title: {
    color: COLORS.primary,
    fontSize: responsive.fontSize(26),
    fontWeight: 'bold',
    fontFamily: 'Inter',
    textAlign: 'center',
  },
  formSection: {
    width: responsive.width(350),
    padding: responsive.padding(30),
  },
  buttonReset: {
    marginTop: responsive.margin(20),
    width: responsive.width(150),
    height: responsive.height(40),
    padding: responsive.padding(10),
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: responsive.fontSize(16),
    fontWeight: '500',
    textAlign: 'center',
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

export default Forgotpasswordscreen;
