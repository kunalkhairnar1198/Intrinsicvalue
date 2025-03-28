import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants/theme';

const CustomCheckBox = ({title, onValueChange}) => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);

  const handlePress = () => {
    setIsChecked(prev => !prev);
    if (onValueChange) onValueChange(!isChecked);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.checkboxContainer}>
        <View style={[styles.checkbox, isChecked && styles.checkedBackground]}>
          {isChecked && (
            <MaterialCommunityIcons name="check" size={20} color="#FFFFFF" />
          )}
        </View>
        <Text style={styles.checkboxTitle}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default CustomCheckBox;

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
    borderColor: '#bbb',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
