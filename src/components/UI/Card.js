import React from 'react';
import {StyleSheet, View} from 'react-native';
import responsive from '../../utils/responsive';
import {Card} from 'react-native-paper';

const CustomCard = ({children, style}) => {
  return <Card style={[styles.card, style]}>{children}</Card>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: responsive.borderRadius(8),
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    marginVertical: 5,
  },
});

export default CustomCard;
