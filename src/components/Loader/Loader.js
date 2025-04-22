import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {COLORS} from '../../constants/theme';

const Loader = ({size}) => {
  // if (isLoading) {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={size} color={COLORS.primary} />
    </View>
  );
  // }
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
});

export default Loader;
