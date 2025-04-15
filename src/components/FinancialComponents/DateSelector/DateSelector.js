import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DateSelector = ({
  dates,
  onhandleNextDate,
  onhandlePrevDate,
  selectedDateIndex,
  getMonthName,
}) => {
  console.log('Datest', dates);
  return (
    <View style={styles.dateSelector}>
      <TouchableOpacity onPress={onhandlePrevDate} style={styles.arrowButton}>
        <Ionicons name="chevron-back" size={20} color="#003366" />
      </TouchableOpacity>
      <Text style={styles.dateText}>
        {dates.previousYearSameMonth &&
          `${getMonthName(dates.previousYearSameMonth.month)} ${
            dates.previousYearSameMonth.year
          }`}
        {dates.nextYearSameMonth &&
          `${getMonthName(dates.nextYearSameMonth.month)} ${
            dates.nextYearSameMonth.year
          }`}
      </Text>
      <TouchableOpacity onPress={onhandleNextDate} style={styles.arrowButton}>
        <Ionicons name="chevron-forward" size={20} color="#003366" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dateSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  dateText: {
    marginHorizontal: 12,
    fontWeight: 'bold',
    color: '#003366',
  },
  arrowButton: {
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

export default DateSelector;
