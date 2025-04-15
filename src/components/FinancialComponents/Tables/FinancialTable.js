import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import responsive from '../../../utils/responsive';
import QuaterlyTable from './QuaterlyTable';

export default function FinancialTable({data, dates, getMonthName}) {
  return (
    <View style={styles.tableContainer}>
      <QuaterlyTable data={data} dates={dates} getMonthName={getMonthName} />
    </View>
  );
}

const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 9,
    overflow: 'hidden',
  },
});
