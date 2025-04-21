import React, {useEffect, useMemo, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {COLORS} from '../../constants/theme';

import SegmentControl from '../../components/FinancialComponents/SegmentControl/SegmentControl';
import responsive from '../../utils/responsive';
import FinancialTabs from '../../components/FinancialComponents/FinancialTabs/FinancialTabs';
import DateSelector from '../../components/FinancialComponents/DateSelector/DateSelector';
import CustomCard from '../../components/UI/Card';
import FinancialTable from '../../components/FinancialComponents/Tables/FinancialTable';

// data
import quaterlyResult from '../../assets/NiftyData/quaterlydata.json';

const months = [
  {number: 1, name: 'Jan'},
  {number: 2, name: 'Feb'},
  {number: 3, name: 'Mar'},
  {number: 4, name: 'Apr'},
  {number: 5, name: 'May'},
  {number: 6, name: 'Jun'},
  {number: 7, name: 'Jul'},
  {number: 8, name: 'Aug'},
  {number: 9, name: 'Sept'},
  {number: 10, name: 'Oct'},
  {number: 11, name: 'Nov'},
  {number: 12, name: 'Dec'},
];

const FinancialsScreen = () => {
  const [activeTab, setActiveTab] = useState('Quarterly Results');

  const [activeSegment, setActiveSegment] = useState('Standalone');

  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [financialDatas, setFinancialDatas] = useState({});

  const [dateContext, setDateContext] = useState({
    // selectedDate: null,
    previousYearSameMonth: null,
    nextYearSameMonth: null,
  });

  // console.log(financialDatas);
  const tabs = [
    'Quarterly Results',
    'Annual Results',
    'Balance Sheet',
    'Cash Flow',
    'Financial Ratio',
  ];

  useEffect(() => {
    if (!quaterlyResult?.results) return;

    let filteredData = [];

    switch (activeTab) {
      case 'Quarterly Results':
        filteredData = quaterlyResult.results.filter(
          item => item.Type === (activeSegment === 'Standalone' ? 'S' : 'C'),
        );
        break;

      case 'Annual Results':
        filteredData = quaterlyResult.annual_results || [];
        break;

      case 'Balance Sheet':
        filteredData = quaterlyResult.balance_sheet || [];
        break;

      case 'Cash Flow':
        filteredData = quaterlyResult.cash_flow || [];
        break;

      case 'Financial Ratio':
        filteredData = quaterlyResult.financial_ratio || [];
        break;

      default:
        filteredData = [];
    }

    setFinancialDatas(prev => ({
      ...prev,
      [activeTab]: filteredData,
    }));
  }, [quaterlyResult, activeTab, activeSegment]);
  // console.log(financialDatas);

  //Convert to array of {year, month}
  const quarterlyYearMonth = useMemo(() => {
    return quaterlyResult?.results
      ?.map(item => {
        const dateStr = item.Date_End?.toString();
        const year = parseInt(dateStr.slice(0, 4), 10);
        const month = parseInt(dateStr.slice(4, 6), 10);
        if (!isNaN(year) && !isNaN(month)) {
          return {year, month};
        }
        return null;
      })
      .filter(Boolean);
  }, [quaterlyResult]);

  useEffect(() => {
    if (quarterlyYearMonth?.length > 0 && selectedDateIndex >= 0) {
      const currentDate = quarterlyYearMonth[selectedDateIndex];
      const currentMonth = currentDate.month;

      const previousYearSameMonth = quarterlyYearMonth.find(
        date =>
          date.month === currentMonth && date.year === currentDate.year - 1,
      );

      const nextYearSameMonth = quarterlyYearMonth.find(
        date =>
          date.month === currentMonth && date.year === currentDate.year + 1,
      );

      setDateContext({
        previousYearSameMonth: currentDate,
        nextYearSameMonth,
      });
    }
  }, [quarterlyYearMonth, selectedDateIndex]);

  // console.log('Date CONTEXT', dateContext);
  // console.log(quarterlyYearMonth);
  // console.log(selectedDate);
  const handlePrevDate = () => {
    if (selectedDateIndex > 0) {
      setSelectedDateIndex(prev => prev - 1);
    }
  };

  const handleNextDate = () => {
    if (selectedDateIndex < quarterlyYearMonth.length - 1) {
      setSelectedDateIndex(prev => prev + 1);
    }
  };

  const getMonthName = monthNum =>
    months.find(m => m.number === monthNum)?.name || 'Invalid';

  //Toggle control Consolidated and Standalone data
  const handleControlData = selectedSegment => {
    setActiveSegment(selectedSegment);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        {/* Segment Control */}
        <View style={styles.segmentControl}>
          <SegmentControl
            // Pass value and handler if needed
            value={activeSegment}
            onChange={handleControlData}
          />
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <FinancialTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </View>

        {/* Date Selector */}
        <View style={styles.dateContainer}>
          <DateSelector
            dates={dateContext}
            onhandleNextDate={handleNextDate}
            onhandlePrevDate={handlePrevDate}
            selectedDateIndex={selectedDateIndex}
            getMonthName={getMonthName}
            totalDates={quarterlyYearMonth.length}
          />
        </View>

        {/* Financial Table */}
        <View style={styles.tableContainer}>
          <CustomCard>
            <FinancialTable
              data={financialDatas[activeTab]}
              dates={dateContext}
              getMonthName={getMonthName}
              selectedDateIndex={selectedDateIndex}
            />
          </CustomCard>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainContainer: {
    flex: 1,
  },
  segmentControl: {
    margin: responsive.margin(10),
  },
  tabsContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  dateContainer: {
    paddingTop: 5,
  },
  tableContainer: {
    margin: 10,
  },
});

export default FinancialsScreen;
