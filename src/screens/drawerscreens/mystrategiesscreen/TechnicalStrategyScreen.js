import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import Button from '../../../components/Button/Button';
import responsive from '../../../utils/responsive';
import AddIcon from 'react-native-vector-icons/Entypo';

const TechnicalStrategyScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Addstrategies')}>
          <AddIcon name="plus" size={25} color="white" />
          <Text style={styles.buttonText}> Technical Strategy</Text>
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    flexDirection: 'row',
    borderRadius: 8,
    margin: responsive.margin(10),
    width: responsive.width(140),
    ...responsive.padding(10),

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 5,
  },

  buttonText: {
    fontSize: responsive.fontSize(12),
    color: 'white',
  },
});

export default TechnicalStrategyScreen;
