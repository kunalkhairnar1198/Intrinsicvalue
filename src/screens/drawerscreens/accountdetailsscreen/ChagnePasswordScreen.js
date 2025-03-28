import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {COLORS} from '../../../constants/theme';

import CustomCard from '../../../components/UI/Card';
import CustomeHeader from '../../../components/Header/CustomeHeader';
import Button from '../../../components/Button/Button';
import FormInput from '../../../components/Forminput/FormInput';
import responsive from '../../../utils/responsive';

const formFields = [
  {
    name: 'currentpassword',
    label: 'Current Password',
    placeholder: '***************',
  },
  {
    name: 'newpassword',
    label: 'New Password',
    placeholder: '***************',
  },
  {
    name: 'confirmpassword',
    label: 'Confirm Password',
    placeholder: '***************',
  },
];

const passwordFormSchema = z
  .object({
    currentpassword: z
      .string()
      .min(8, {message: 'Current password must be at least 8 characters long'})
      .nonempty({message: 'Current password is required'}),
    newpassword: z
      .string()
      .min(8, {message: 'New password must be at least 8 characters long'})
      .regex(/[A-Z]/, {
        message: 'New password must contain at least one uppercase letter',
      })
      .regex(/[a-z]/, {
        message: 'New password must contain at least one lowercase letter',
      })
      .regex(/[0-9]/, {
        message: 'New password must contain at least one number',
      })
      .regex(/[@$!%*?&]/, {
        message: 'New password must contain at least one special character',
      })
      .nonempty({message: 'New password is required'}),
    confirmpassword: z
      .string()
      .nonempty({message: 'Confirm password is required'}),
  })
  .superRefine(({confirmpassword, newpassword}, ctx) => {
    if (confirmpassword !== newpassword) {
      ctx.addIssue({
        path: ['confirmpassword'],
        message: 'Passwords do not match',
        code: z.ZodIssueCode.custom,
      });
    }
  });

const ChangePasswordScreen = ({navigation}) => {
  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      currentpassword: '',
      newpassword: '',
      confirmpassword: '',
    },
    resolver: zodResolver(passwordFormSchema),
  });

  const onSubmit = data => {
    console.log('Password Change Data:', data);
    reset();
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomeHeader
        navigation={navigation}
        title={'Change Password'}
        goBack={'goBack'}
      />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true}
        extraScrollHeight={10}
        keyboardShouldPersistTaps="handled">
        <CustomCard style={styles.cardContainer}>
          <View style={styles.formContainer}>
            {formFields.map((field, index) => (
              <View key={index} style={styles.fieldContainer}>
                <Text style={styles.textField}>{field.label}</Text>
                <FormInput
                  control={control}
                  name={field.name}
                  placeholder={field.placeholder}
                  secureTextEntry={true}
                  style={styles.input}
                  placeholderTextColor={'#9E9E9E'}
                />
              </View>
            ))}
          </View>
        </CustomCard>
        <Button style={styles.buttonSave} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonsText}>Save</Text>
        </Button>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    justifyContent: 'center',
  },
  cardContainer: {
    padding: responsive.padding(15),
    margin: responsive.margin(10),
  },
  formContainer: {
    paddingVertical: responsive.padding(10),
  },
  fieldContainer: {
    marginBottom: responsive.margin(15),
  },
  input: {
    width: '100%',
    height: responsive.height(45),
    backgroundColor: '#fff',
    borderRadius: 40,
    paddingHorizontal: responsive.padding(10),
    fontSize: responsive.fontSize(16),
    fontWeight: '500',
    fontFamily: 'Inter',
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  textField: {
    fontSize: responsive.fontSize(13),
    marginBottom: responsive.margin(5),
  },

  buttonSave: {
    margin: responsive.margin(10),
    width: responsive.width(130),
    padding: responsive.padding(10),
    alignSelf: 'center',
  },
  buttonsText: {
    color: COLORS.white,
    fontFamily: 'Inter',
    fontSize: responsive.fontSize(14),
  },
});

export default ChangePasswordScreen;
