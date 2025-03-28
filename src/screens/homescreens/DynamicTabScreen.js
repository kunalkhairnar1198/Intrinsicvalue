import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DynamicTabScreen = ({route}) => {
  const {item} = route.params || {};
  // console.log('DYNAMIC SCREEN', item);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dynamic Screen</Text>
      {item ? (
        <>
          <Text style={styles.content}>
            Tab indices_name: {item.indices_name}
          </Text>
          <Text style={styles.content}>Tab eps_growth: {item.eps_growth}</Text>
        </>
      ) : (
        <Text>No Data Received</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
    color: '#555',
  },
});

export default DynamicTabScreen;
