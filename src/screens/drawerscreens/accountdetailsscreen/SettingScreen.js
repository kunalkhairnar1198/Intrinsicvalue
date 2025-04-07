import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS} from '../../../constants/theme';

import PercentIcon from 'react-native-vector-icons/Feather';
import responsive from '../../../utils/responsive';
import FormInput from '../../../components/Forminput/FormInput';
import Button from '../../../components/Button/Button';
import CustomCard from '../../../components/UI/Card';
import CustomeHeader from '../../../components/Header/CustomeHeader';

const formFields = [
  {name: 'firstname', label: 'First Name', placeholder: 'First Name'},
  {name: 'lastname', label: 'Last Name', placeholder: 'Last Name'},
  {name: 'email', label: 'Email', placeholder: 'Email'},
  {name: 'phone', label: 'Phone No', placeholder: 'Mobile Number'},
];

const settingFormSchema = z.object({
  firstname: z
    .string()
    .min(2, {message: 'Firstname must be at least 2 characters long'})
    .max(50, {message: 'Firstname must be at most 50 characters'}),

  lastname: z
    .string()
    .min(2, {message: 'Lastname must be at least 2 characters long'})
    .max(50, {message: 'Lastname must be at most 50 characters'}),

  email: z
    .string()
    .email({message: 'Invalid email address'})
    .nonempty({message: 'Email is required'}),

  phone: z
    .string()
    .regex(/^\d{10}$/, {message: 'Phone number must be 10 digits'}),

  discountrate: z
    .number({invalid_type_error: 'Discount rate must be a number'})
    .positive({message: 'Discount rate must be positive'})
    .lte(100, {message: 'Discount rate cannot exceed 100%'})
    .or(
      z
        .string()
        .regex(/^\d+$/, {message: 'Enter a valid number'})
        .transform(Number),
    ),

  report: z
    .string()
    .nonempty({message: 'Report is required'})
    .max(500, {message: 'Report cannot exceed 500 characters'}),

  apikey: z
    .string()
    .min(8, {message: 'API Key must be at least 8 characters long'})
    .nonempty({message: 'API Key is required'}),

  apisecret: z
    .string()
    .min(8, {message: 'API Secret must be at least 8 characters long'})
    .nonempty({message: 'API Secret is required'}),
});

const SettingScreen = ({navigation, route}) => {
  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      discountrate: '',
      report: '',
      apikey: '',
      apisecret: '',
    },
    resolver: zodResolver(settingFormSchema),
  });

  const onSubmit = data => {
    // console.log('Form Data:', data);
  };

  return (
    <View style={styles.container}>
      <CustomeHeader
        navigation={navigation}
        title={route.name}
        goBack={'goBack'}
      />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true}
        extraScrollHeight={10}
        keyboardShouldPersistTaps="handled">
        <View style={styles.formContainer}>
          <CustomCard style={styles.cardStyle}>
            {formFields.map(field => (
              <View key={field.name} style={styles.fieldContainer}>
                <Text style={styles.textField}>{field.label}</Text>
                <FormInput
                  control={control}
                  name={field.name}
                  rules={{required: `${field.placeholder} is required`}}
                  placeholder={field.placeholder}
                  placeholderTextColor={'#9E9E9E'}
                  style={styles.input}
                  keyboardType={
                    field.name === 'phone' ? 'number-pad' : 'default'
                  }
                />
              </View>
            ))}

            <View style={styles.fieldContainer}>
              <Text style={styles.textField}>Discount Rate</Text>
              <View style={styles.inputWithIconWide}>
                <FormInput
                  control={control}
                  name="discountrate"
                  placeholder="Discount Rate"
                  style={[styles.input, styles.discountInput]}
                  keyboardType={'number-pad'}
                  placeholderTextColor={'#9E9E9E'}
                  rules={{required: 'Discount rate is required'}}
                />
                <View>
                  <PercentIcon
                    name="percent"
                    color="#8c8888"
                    size={30}
                    style={styles.icon}
                  />
                </View>
              </View>
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.textField}>Report</Text>
              <FormInput
                control={control}
                name="report"
                placeholder="Coming Soon"
                style={styles.input}
                placeholderTextColor={'#9E9E9E'}
                editable={false}
              />
            </View>
          </CustomCard>
        </View>

        <View style={[styles.formContainer, {marginBottom: -9}]}>
          <CustomCard style={styles.cardStyle}>
            <Text style={styles.titleField}>Zerodha Kite Connect</Text>

            <View style={styles.fieldContainer}>
              <Text style={styles.textField}>API Key</Text>
              <FormInput
                control={control}
                name="apikey"
                placeholder="API Key"
                style={styles.input}
                placeholderTextColor={'#9E9E9E'}
                rules={{required: 'API Key is required'}}
              />
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.textField}>API Secret</Text>
              <FormInput
                control={control}
                name="apisecret"
                placeholder="API Secret Key"
                style={styles.input}
                placeholderTextColor={'#9E9E9E'}
                rules={{required: 'API secret Key is required'}}
              />
            </View>

            <Button
              style={styles.buttonUpdate}
              onPress={handleSubmit(onSubmit)}>
              <Text style={styles.buttonsText}>Update</Text>
            </Button>
          </CustomCard>
        </View>

        <Button onPress={handleSubmit(onSubmit)} style={styles.buttonSave}>
          <Text style={styles.buttonsText}>Save</Text>
        </Button>
      </KeyboardAwareScrollView>
    </View>
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
  formContainer: {
    padding: responsive.padding(10),
  },
  cardStyle: {
    padding: responsive.padding(10),
  },
  fieldContainer: {
    margin: responsive.margin(2),
  },
  inputWithIconWide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    height: responsive.height(45),
    backgroundColor: COLORS.white,
    borderRadius: responsive.borderRadius(8),
    paddingHorizontal: responsive.padding(10),
    fontFamily: 'Inter',
    fontSize: responsive.fontSize(14),
    color: '#9E9E9E',
    fontWeight: '500',
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  discountInput: {
    width: responsive.width(270),
    alignSelf: 'flex-start',
    elevation: 2,
    borderRadius: responsive.borderRadius(20),
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  titleField: {
    alignSelf: 'flex-start',
    marginBottom: responsive.margin(10),
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: responsive.fontSize(16),
  },
  textField: {
    marginBottom: responsive.margin(5),
    fontWeight: 'bold',
    fontFamily: 'Inter',
    fontSize: responsive.fontSize(13),
  },
  icon: {
    marginLeft: responsive.margin(5),
  },
  buttonUpdate: {
    margin: responsive.margin(10),
    width: responsive.width(90),
    padding: responsive.padding(10),
    alignSelf: 'center',
  },
  buttonSave: {
    margin: responsive.margin(10),
    width: responsive.width(130),
    padding: responsive.padding(10),
    alignSelf: 'center',
  },
  buttonsText: {
    color: COLORS.white,
    fontFamily: 'inter',
    fontSize: responsive.fontSize(12),
  },
});

export default SettingScreen;
