import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

const SegmentControl = ({value, onChange}) => {
  console.log(value);
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>
        {value === 'C'
          ? 'Consolidated figures in Rs. crores'
          : 'Standalone figures in Rs. crores'}
      </Text>
      <View style={styles.segmentContainer}>
        {['Standalone', 'Consolidated'].map(segment => (
          <TouchableOpacity
            key={segment}
            onPress={() => onChange(segment)}
            style={[
              styles.segmentButton,
              value === segment && styles.activeSegmentButton,
            ]}>
            <Text
              style={[
                styles.segmentText,
                value === segment && styles.activeSegmentText,
              ]}>
              {segment}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    marginVertical: 9,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  segmentContainer: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  segmentButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  activeSegmentButton: {
    backgroundColor: '#dce0fc',
  },
  segmentText: {
    color: '#888',
  },
  activeSegmentText: {
    color: '#003366',
    fontWeight: 'bold',
  },
});

export default SegmentControl;
