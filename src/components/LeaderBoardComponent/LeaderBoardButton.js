import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

const PERIODS = ['1 Week', '1 Month', '1 Year'];

const LeaderBoardButton = ({selected, onSelect}) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonGroup}>
        {PERIODS.map(label => {
          const isActive = selected === label;
          return (
            <TouchableOpacity
              key={label}
              style={[styles.button, isActive && styles.buttonActive]}
              onPress={() => onSelect(label)}>
              <Text style={[styles.text, isActive && styles.textActive]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    // padding: 4,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonActive: {
    backgroundColor: '#B0C4FF',
  },
  text: {
    color: '#888',
  },
  textActive: {
    color: '#003366',
    fontWeight: 'bold',
  },
});

export default LeaderBoardButton;
