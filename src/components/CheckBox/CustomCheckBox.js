import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants/theme';

const CustomCheckBox = ({isChecked, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.checkboxContainer}>
        <View style={[styles.checkbox, isChecked && styles.checkedBackground]}>
          {isChecked && (
            <MaterialCommunityIcons name="check" size={20} color="#FFFFFF" />
          )}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkbox: {
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: '#cfd8f4',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e9ff',
    marginRight: 10,
  },
  checkedBackground: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  checkboxTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});

export default CustomCheckBox;
