import React from 'react';
import {StyleSheet, View} from 'react-native';
import responsive from '../../utils/responsive';

const Card = ({children, style}) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    // padding: responsive.padding(16),
    borderRadius: responsive.borderRadius(10),
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    // marginVertical: 10,
  },
});

export default Card;
