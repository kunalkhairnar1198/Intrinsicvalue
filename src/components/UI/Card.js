import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card} from 'react-native-paper';
import responsive from '../../utils/responsive';

const CustomCard = ({children, style}) => {
  return (
    <Card style={[styles.card, style]}>
      <View>{children}</View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: responsive.borderRadius(8),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
    marginVertical: responsive.margin(10),
  },
});

export default CustomCard;
