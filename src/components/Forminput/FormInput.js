import React from 'react';
import {Controller} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {COLORS} from '../../constants/theme';
import responsive from '../../utils/responsive';

const FormInput = ({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry = false,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <View style={styles.container}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={styles.placeholderTextColor}
            mode="outlined"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            secureTextEntry={secureTextEntry}
            error={!!error}
            style={[rest.style ? rest.style : styles.input]}
            outlineColor={!error ? '#f3f3f3' : '#ff0808'}
            activeOutlineColor={COLORS.primary}
            keyboardType={rest.keyboardType}
            {...rest}
          />
          {error && <Text style={{color: '#ff0808'}}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: responsive.height(9),
  },
  input: {
    width: '100%',
    height: responsive.height(30),
    backgroundColor: '#F1F4FF',
    borderRadius: 40,
    padding: responsive.height(10),
    marginBottom: 10,
    elevation: 2,
    textAlign: 'justify',
    fontFamily: 'Inter',
    fontSize: responsive.fontSize(16),
    color: '#9E9E9E',
    fontWeight: '500',
  },
});

export default FormInput;
