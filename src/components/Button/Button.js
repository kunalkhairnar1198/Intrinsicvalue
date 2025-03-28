import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
import responsive from '../../utils/responsive';

const Button = ({children, onPress, style}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [styles.button, style, pressed && styles.pressed]}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 11,
    paddingHorizontal: 20,
    borderRadius: responsive.borderRadius(8),
    alignItems: 'center',
    justifyContent: 'center',

    // iOS Shadow
    shadowColor: COLORS.shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,

    // Android Shadow
    elevation: 10,
  },
  pressed: {
    opacity: 0.7,
  },
});

export default Button;
