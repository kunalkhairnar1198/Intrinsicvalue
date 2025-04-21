import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';

import {COLORS} from '../../../constants/theme';
import responsive from '../../../utils/responsive';

import CustomCard from '../../../components/UI/Card';
import Button from '../../../components/Button/Button';
import CustomeHeader from '../../../components/Header/CustomeHeader';
import CustomCircleCheckbox from '../../../components/CheckBox/CustomCircleCheckbox';
import OcilatorsMovingAverageList from '../../../components/TechnicalStrategy/Indicators/OcilatorsMovingAverageList';
import AddIndicatorCrossover from '../../../components/TechnicalStrategy/IndicatorCrossover/AddIndicatorCrossover';

const frameOptionData = [
  {label: '1 Day', value: '1Day'},
  {label: '1 Week', value: '1Week'},
  {label: '1 Year', value: '1Year'},
];

const oscilators = [
  {
    id: 1,
    indicator_name: 'RSI',
    alternate_indicator_name: 'RSI',
    indicator_full_name: 'Relative Strength Index',
    indicator_type: 'Oscillators',
  },
  {
    id: 2,
    indicator_name: 'STOCK.K',
    alternate_indicator_name: 'Stoch.K',
    indicator_full_name: 'Stochastic Oscillator %K',
    indicator_type: 'Oscillators',
  },
  {
    id: 3,
    indicator_name: 'CCI',
    alternate_indicator_name: 'CCI20',
    indicator_full_name: 'Commodity Channel Index',
    indicator_type: 'Oscillators',
  },
  {
    id: 4,
    indicator_name: 'ADX',
    alternate_indicator_name: 'ADX',
    indicator_full_name: 'Average Directional Index',
    indicator_type: 'Oscillators',
  },
  {
    id: 5,
    indicator_name: 'AO',
    alternate_indicator_name: 'AO',
    indicator_full_name: 'Awesome Oscillator',
    indicator_type: 'Oscillators',
  },
  {
    id: 6,
    indicator_name: 'Mom',
    alternate_indicator_name: 'Mom',
    indicator_full_name: 'Momentum oscillator',
    indicator_type: 'Oscillators',
  },
  {
    id: 7,
    indicator_name: 'MACD',
    alternate_indicator_name: 'MACD.macd',
    indicator_full_name: 'Moving Average Convergence Divergence',
    indicator_type: 'Oscillators',
  },
  {
    id: 8,
    indicator_name: 'Stoch.RSI',
    alternate_indicator_name: 'Rec.Stoch.RSI',
    indicator_full_name: 'Stochastic RSI',
    indicator_type: 'Oscillators',
  },
  {
    id: 9,
    indicator_name: 'W%R',
    alternate_indicator_name: 'Rec.WR',
    indicator_full_name: 'Williams Percent Range',
    indicator_type: 'Oscillators',
  },
  {
    id: 10,
    indicator_name: 'BBP',
    alternate_indicator_name: 'Rec.BBPower',
    indicator_full_name: 'Bull Bear Power',
    indicator_type: 'Oscillators',
  },
  {
    id: 11,
    indicator_name: 'UO',
    alternate_indicator_name: 'UO',
    indicator_full_name: 'Ultimate Oscillator',
    indicator_type: 'Oscillators',
  },
];
const movingAverage = [
  {
    id: 12,
    indicator_name: 'EMA10',
    alternate_indicator_name: 'EMA10',
    indicator_full_name: 'Exponential Moving Average 10',
    indicator_type: 'Moving Averages',
  },
  {
    id: 13,
    indicator_name: 'SMA10',
    alternate_indicator_name: 'SMA10',
    indicator_full_name: 'Simple Moving Average 10',
    indicator_type: 'Moving Averages',
  },
  {
    id: 14,
    indicator_name: 'EMA20',
    alternate_indicator_name: 'EMA20',
    indicator_full_name: 'Exponential Moving Average 20',
    indicator_type: 'Moving Averages',
  },
  {
    id: 15,
    indicator_name: 'SMA20',
    alternate_indicator_name: 'SMA20',
    indicator_full_name: 'Simple Moving Average 20',
    indicator_type: 'Moving Averages',
  },
  {
    id: 16,
    indicator_name: 'EMA30',
    alternate_indicator_name: 'EMA30',
    indicator_full_name: 'Exponential Moving Average 30',
    indicator_type: 'Moving Averages',
  },
  {
    id: 17,
    indicator_name: 'SMA30',
    alternate_indicator_name: 'SMA30',
    indicator_full_name: 'Simple Moving Average 30',
    indicator_type: 'Moving Averages',
  },
  {
    id: 18,
    indicator_name: 'EMA50',
    alternate_indicator_name: 'EMA50',
    indicator_full_name: 'Exponential Moving Average 50',
    indicator_type: 'Moving Averages',
  },
  {
    id: 19,
    indicator_name: 'SMA50',
    alternate_indicator_name: 'SMA50',
    indicator_full_name: 'Simple Moving Average 50',
    indicator_type: 'Moving Averages',
  },
  {
    id: 20,
    indicator_name: 'EMA100',
    alternate_indicator_name: 'EMA100',
    indicator_full_name: 'Exponential Moving Average 100',
    indicator_type: 'Moving Averages',
  },
  {
    id: 21,
    indicator_name: 'SMA100',
    alternate_indicator_name: 'SMA100',
    indicator_full_name: 'Simple Moving Average 100',
    indicator_type: 'Moving Averages',
  },
  {
    id: 22,
    indicator_name: 'EMA200',
    alternate_indicator_name: 'EMA200',
    indicator_full_name: 'Exponential Moving Average 200',
    indicator_type: 'Moving Averages',
  },
  {
    id: 23,
    indicator_name: 'SMA200',
    alternate_indicator_name: 'SMA200',
    indicator_full_name: 'Simple Moving Average 200',
    indicator_type: 'Moving Averages',
  },
  {
    id: 24,
    indicator_name: 'Ichimoku',
    alternate_indicator_name: 'Rec.Ichimoku',
    indicator_full_name: 'Ichimoku Kinko Hyo',
    indicator_type: 'Moving Averages',
  },
  {
    id: 25,
    indicator_name: 'VWMA',
    alternate_indicator_name: 'VWMA',
    indicator_full_name: 'Volume Weighted Moving Average',
    indicator_type: 'Moving Averages',
  },
  {
    id: 26,
    indicator_name: 'HullMA',
    alternate_indicator_name: 'HullMA9',
    indicator_full_name: 'Hull Moving Average',
    indicator_type: 'Moving Averages',
  },
];

const AddTechnicalStrategyscreen = ({navigation}) => {
  const [strategyName, setStrategyName] = useState('');
  const [indicatorValuesChecked, setIndicatorValuesChecked] = useState(null);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(null);
  const [selectedOscillators, setSelectedOscillators] = useState([]);
  const [selectedMovingAverages, setSelectedMovingAverages] = useState([]);

  const toggleOscillator = name => {
    // console.log(name);
    setSelectedOscillators(prev =>
      prev.includes(name)
        ? prev.filter(indicators => indicators !== name)
        : [...prev, name],
    );
  };

  const toggleMovingAverage = name => {
    // console.log(name);
    setSelectedMovingAverages(prev =>
      prev.includes(name)
        ? prev.filter(indicators => indicators !== name)
        : [...prev, name],
    );
  };

  const handleSave = crossoverdata => {
    // console.log('Crossover Data:', crossoverdata);

    const strategyData = {
      strategy_name: strategyName,
      timeFrame: selectedTimeFrame,
      indicators: crossoverdata
        ? crossoverdata
        : {
            oscillators: selectedOscillators,
            movingAverages: selectedMovingAverages,
          },
      indicatorValuesChecked,
    };

    // console.log('Saved Strategy:', strategyData);

    // Reset state
    setSelectedOscillators([]);
    setSelectedMovingAverages([]);
    setStrategyName('');
    setSelectedTimeFrame(null);
  };

  return (
    <View style={styles.container}>
      <CustomeHeader
        navigation={navigation}
        title="Add Technical Strategy"
        goBack="goBack"
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchText}>Technical Strategy Name:</Text>
          <TextInput
            value={strategyName}
            onChangeText={setStrategyName}
            placeholder="Enter technical strategy name"
            placeholderTextColor="#646262a7"
            mode="outlined"
            style={styles.searchInput}
            outlineStyle={styles.outlineStyle}
          />
        </View>

        <View style={styles.checkBoxSection}>
          <CustomCircleCheckbox
            title="Technical Indicator values"
            checked={indicatorValuesChecked === 'Technical Indicator values'}
            onPress={() =>
              setIndicatorValuesChecked('Technical Indicator values')
            }
            activeColor={COLORS.primary}
          />

          <CustomCircleCheckbox
            title="Technical Indicator crossover"
            checked={indicatorValuesChecked === 'Technical Indicator crossover'}
            onPress={() =>
              setIndicatorValuesChecked('Technical Indicator crossover')
            }
            activeColor={COLORS.primary}
          />
        </View>

        <View style={styles.dropDownSection}>
          <Dropdown
            data={frameOptionData}
            labelField="label"
            valueField="value"
            placeholder="Select Time Frame"
            value={selectedTimeFrame}
            onChange={item => setSelectedTimeFrame(item.value)}
            style={styles.dropdown}
            containerStyle={styles.dropdownContainer}
          />
        </View>
        {indicatorValuesChecked === 'Technical Indicator values' && (
          <>
            <View style={styles.cardContainer}>
              <CustomCard>
                <OcilatorsMovingAverageList
                  indicators={oscilators}
                  title={'Oscillators'}
                  onToggleOscillator={toggleOscillator}
                  selectedOscillators={selectedOscillators}
                />
              </CustomCard>
            </View>

            <View>
              <CustomCard>
                <OcilatorsMovingAverageList
                  indicators={movingAverage}
                  title={'Moving Averages'}
                  onToggleMovingAverage={toggleMovingAverage}
                  selectedMovingAverages={selectedMovingAverages}
                />
              </CustomCard>
            </View>
          </>
        )}

        {indicatorValuesChecked === 'Technical Indicator crossover' && (
          <AddIndicatorCrossover
            indicators={[...oscilators, ...movingAverage]}
            onHandleSave={handleSave}
          />
        )}

        {indicatorValuesChecked === 'Technical Indicator values' && (
          <Button style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Technical Strategy</Text>
          </Button>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: responsive.padding(15),
  },
  searchContainer: {
    marginBottom: responsive.margin(10),
  },
  searchText: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: responsive.fontSize(13),
    marginBottom: 8,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: responsive.borderRadius(8),
    height: responsive.height(35),
    justifyContent: 'center',
  },
  outlineStyle: {
    borderRadius: responsive.borderRadius(8),
    borderColor: COLORS.primary,
  },
  checkBoxSection: {
    marginVertical: responsive.margin(10),
  },
  dropDownSection: {
    alignItems: 'center',
    marginVertical: responsive.margin(20),
  },
  dropdown: {
    width: responsive.width(200),
    height: responsive.height(35),
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: responsive.borderRadius(8),
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  cardContainer: {
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: responsive.padding(10),
    borderRadius: responsive.borderRadius(8),
    marginTop: responsive.margin(20),
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: responsive.fontSize(14),
  },
});

export default AddTechnicalStrategyscreen;
