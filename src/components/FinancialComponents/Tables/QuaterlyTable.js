import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import responsive from '../../../utils/responsive';

const QuaterlyTable = ({data, dates, getMonthName}) => {
  if (!data || data.length === 0) {
    return <Text style={styles.noDataText}>No data available</Text>;
  }

  const previousDateNumber =
    dates?.previousYearSameMonth?.year * 100 +
    dates?.previousYearSameMonth?.month;

  const nextDateNumber =
    dates?.nextYearSameMonth?.year * 100 + dates?.nextYearSameMonth?.month;

  const prevData = data.find(item => item.Date_End === previousDateNumber);
  const nextData = data.find(item => item.Date_End === nextDateNumber);

  if (!prevData && !nextData) {
    return <Text style={styles.noDataText}>No data for selected date</Text>;
  }

  const formatNumberToIndianStandard = num => {
    const number = parseFloat(num);
    if (isNaN(number)) return '—';
    return number.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  };

  const financialKeys = [
    {key: 'NET_SALES', label: 'Net Sales'},
    {key: 'EXPENDITURE', label: 'Expenses'},
    {key: 'EBITDA', label: 'EBITDA'},
    {key: 'EBIDTM', label: 'EBIDTM'},
    {key: 'OTHER_INCOME', label: 'Other Income'},
    {key: 'INTEREST', label: 'Interest'},
    {key: 'DEPRECIATION', label: 'Depreciation'},
    {key: 'PBT', label: 'PBT'},
    {key: 'TAX', label: 'TAX'},
    {key: 'PAT', label: 'PAT'},
    {key: 'PATM', label: 'PATM'},
    {key: 'EPSABS', label: 'EPS'},
  ];

  const renderItem = ({item}) => {
    const {key, label} = item;
    const previous = prevData?.[key];
    const next = nextData?.[key];

    const variation =
      previous && next
        ? (((next - previous) / previous) * 100).toFixed(2) + '%'
        : formatNumberToIndianStandard(next || previous);
    console.log(label);
    return (
      <View style={styles.tableRow}>
        <Text style={[styles.cell, {flex: 2}]}>{label}</Text>
        <Text style={styles.cell}>
          {formatNumberToIndianStandard(previous)}
        </Text>
        <Text style={styles.cell}>{formatNumberToIndianStandard(next)}</Text>
        <View style={styles.lastcellView}>
          <Text style={[styles.lastcell, {backgroundColor: '#dce0fc'}]}>
            {variation}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.tableContainer}>
      {/* Header */}
      <View style={styles.tableHeader}>
        <Text style={[styles.cell, {flex: 2, fontWeight: 'bold'}]}>
          Description
        </Text>
        <Text style={[styles.cell, {fontWeight: 'bold'}]}>
          {dates.previousYearSameMonth
            ? `${getMonthName(dates.previousYearSameMonth.month)} ${
                dates.previousYearSameMonth.year
              }`
            : '—'}
        </Text>

        <Text style={[styles.cell, {fontWeight: 'bold'}]}>
          {dates.nextYearSameMonth
            ? `${getMonthName(dates.nextYearSameMonth.month)} ${
                dates.nextYearSameMonth.year
              }`
            : '-'}
        </Text>
        <View style={styles.lastcellView}>
          <Text
            style={[
              styles.lastcell,
              {fontWeight: 'bold', backgroundColor: '#dce0fc'},
            ]}>
            Var%
          </Text>
        </View>
      </View>

      {/* Rows */}
      <FlatList
        data={financialKeys}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.key + index}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: responsive.width(1),
    borderColor: '#ccc',
    borderRadius: responsive.borderRadius(9),
    overflow: 'hidden',
    // marginBottom: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    // backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#414141',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.9,
    borderBottomColor: '#eee',
  },
  cell: {
    flex: 1,
    padding: responsive.padding(5),
    margin: responsive.margin(2),
    textAlign: 'center',
    fontSize: responsive.fontSize(10),
  },
  lastcell: {
    flex: 1,
    padding: responsive.padding(5),
    textAlign: 'center',
    fontSize: responsive.fontSize(12),
  },
  lastcellView: {
    width: responsive.width(90),
    justifyContent: 'center',
  },
  noDataText: {
    textAlign: 'center',
    padding: responsive.padding(15),
    color: '#999',
    fontSize: responsive.fontSize(14),
  },
});

export default QuaterlyTable;
