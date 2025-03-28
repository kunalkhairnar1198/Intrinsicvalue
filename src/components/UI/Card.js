import React from 'react';
import {StyleSheet, View} from 'react-native';
import responsive from '../../utils/responsive';

const CustomCard = ({children, style}) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: responsive.borderRadius(8),
    shadowColor: '#00000088',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
});

export default CustomCard;
