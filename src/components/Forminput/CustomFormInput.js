import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormInput from './FormInput';

const CustomFormInput = ({item, formFields, control}) => {
  return (
    <View key={item.name} style={styles.fieldContainer}>
      <Text style={styles.textField}>{item.label}</Text>
      <FormInput
        control={control}
        name={item.name}
        rules={{required: `${item.placeholder} is required`}}
        placeholder={item.placeholder}
        placeholderTextColor={'#9E9E9E'}
        style={styles.input}
        keyboardType={item.name === 'phone' ? 'number-pad' : 'default'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    margin: 5,
  },
  input: {
    width: '100%',
    height: responsive.height(45),
    backgroundColor: COLORS.white,
    borderRadius: responsive.borderRadius(30),
    paddingHorizontal: responsive.padding(10),
    elevation: 2,
    fontFamily: 'Inter',
    fontSize: responsive.fontSize(14),
    color: '#9E9E9E',
    fontWeight: '500',
  },
  textField: {
    marginBottom: responsive.margin(5),
    fontWeight: '600',
    fontFamily: 'Inter',
    fontSize: responsive.fontSize(13),
  },
});

export default CustomFormInput;
