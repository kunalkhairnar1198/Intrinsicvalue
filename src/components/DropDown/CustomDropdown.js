import React from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const CustomDropdown = ({
  data = [],
  labelField = 'label',
  valueField = 'value',
  placeholder = 'Select...',
  value,
  onChange,
  dropdownStyle = {},
  containerStyle = {},
  disable,
  ...rest
}) => {
  return (
    <Dropdown
      data={data}
      labelField={labelField}
      valueField={valueField}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disable={disable}
      style={[styles.dropdown, dropdownStyle]}
      containerStyle={[styles.dropdownContainer, containerStyle]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  dropdownContainer: {
    borderRadius: 8,
  },
});

export default CustomDropdown;
