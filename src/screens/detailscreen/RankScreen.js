import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {overlay, Text, TextInput} from 'react-native-paper';
import RankCard from '../../components/UI/RankCard';
import {COLORS} from '../../constants/theme';
import Button from '../../components/Button/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import responsive from '../../utils/responsive';
import {Dropdown} from 'react-native-element-dropdown';
import CustomCard from '../../components/UI/Card';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  {label: 'Option 1', value: 'opt1'},
  {label: 'Option 2', value: 'opt2'},
  {label: 'Option 3', value: 'opt3'},
  {label: 'Option 4', value: 'opt4'},
];

const RankScreen = () => {
  // console.log('RANK CARD');

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [epsGrowth, setEpsGrowth] = useState('');
  const [confidentialRate, setConfidentialRate] = useState('');

  const handleAdd = () => {
    // console.log('EPS Growth:', epsGrowth);
    // console.log('Confidential Rate:', confidentialRate);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{padding: 16}}>
        {/* Fundamental Rank */}

        <RankCard title="Fundamental Rank" rank="9">
          <View style={styles.divider} />

          <View>
            {/* Inputs */}
            <View style={styles.inputRow}>
              <Text style={styles.label}>EPS Growth %</Text>

              <TextInput
                style={styles.input}
                placeholder="0"
                placeholderTextColor="#ccc"
                keyboardType="numeric"
                value={epsGrowth}
                onChangeText={setEpsGrowth}
                outlineColor={COLORS.primary}
                mode="outlined"
              />
              <Text style={styles.label}>Confidential Rate %</Text>

              <TextInput
                style={styles.input}
                placeholder="0"
                placeholderTextColor="#ccc"
                keyboardType="numeric"
                value={confidentialRate}
                onChangeText={setConfidentialRate}
                outlineColor={COLORS.primary}
                mode="outlined"
              />
            </View>

            {/* Add Button */}
            <Button style={styles.button} onPress={handleAdd}>
              <Ionicons
                name="arrow-forward"
                size={25}
                color={COLORS.primary}
                style={{marginLeft: 4}}
              />
            </Button>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text>EPS Growth (Last 5 years):</Text>
            <Text style={{fontWeight: 'bold'}}>13.17%</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.link}>Intrinsic Value:</Text>
            <Text style={styles.boldText}> ₹17,394.04</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.link}>Margin of Safety: </Text>
            <Text style={styles.boldText}>45.00%</Text>
          </View>

          <View style={styles.divider} />
          <Text style={styles.timestamp}>
            Last Updated at 06-05-2024 05:14 PM
          </Text>
        </RankCard>

        {/* Technical Rank */}
        <RankCard title="Technical Rank" rank="1">
          <View style={styles.divider} />

          <View style={styles.dropDownContainer}>
            <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: '#6200ea'}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              data={data}
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder={isFocus && 'Select option'}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />

            <Button style={styles.addButton}>
              <Text style={styles.textButton}>Add indicator</Text>
            </Button>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={[styles.indicatorCircle, {backgroundColor: '#008E30'}]}
              />
              <Text style={styles.indicators}>Positive:</Text>
            </View>
            <Button style={styles.indicatorBtn}>
              <Text style={styles.indicatorText}>6 Indicators</Text>
            </Button>
          </View>

          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={[styles.indicatorCircle, {backgroundColor: '#F4AA15'}]}
              />
              <Text style={styles.indicators}>Neutral: </Text>
            </View>
            <Button style={styles.indicatorBtn}>
              <Text style={styles.indicatorText}>5 Indicators</Text>
            </Button>
          </View>

          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={[styles.indicatorCircle, {backgroundColor: 'red'}]}
              />
              <Text style={styles.indicators}>Negative: </Text>
            </View>
            <Button style={styles.indicatorBtn}>
              <Text style={styles.indicatorText}>3 Indicators</Text>
            </Button>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={[
                styles.indicatorCircle,
                {backgroundColor: ` ${COLORS.primary}`},
              ]}
            />
            <Text style={styles.link}>Total Score: 40</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.timestamp}>
            Last Updated at 07-05-2024 02:13 PM
          </Text>
        </RankCard>

        {/* Sentimental Rank */}
        <RankCard title="Sentimental Rank" rank="12">
          <View style={styles.divider} />

          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={[styles.indicatorCircle, {backgroundColor: '#008E30'}]}
              />
              <Text style={styles.indicators}>Positive: </Text>
            </View>
            <Text style={styles.boldText}>10.00%</Text>
          </View>

          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={[styles.indicatorCircle, {backgroundColor: '#F4AA15'}]}
              />
              <Text style={styles.indicators}>Neutral: </Text>
            </View>
            <Text style={styles.boldText}>90.00%</Text>
          </View>

          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={[styles.indicatorCircle, {backgroundColor: 'red'}]}
              />
              <Text style={styles.indicators}>Negative: </Text>
            </View>
            <Text style={styles.boldText}>0%</Text>
          </View>

          <View style={styles.divider} />

          <CustomCard style={styles.sentimentCard}>
            <LinearGradient
              colors={['#FFFFFF', '#F0F4FF', '#F0F4FF']}
              start={{x: 1, y: 0.5}}
              end={{x: 0, y: 0.5}}
              style={styles.gradientContainer}>
              <Text style={styles.link}>
                TVS' Realty Arm to Acquire Balance Stake...
              </Text>
            </LinearGradient>
          </CustomCard>

          <Pressable>
            <CustomCard style={styles.sentimentCard}>
              <LinearGradient
                colors={['#FFFFFF', '#F0F4FF', '#F0F4FF']}
                start={{x: 1, y: 0.5}}
                end={{x: 0, y: 0.5}}
                style={styles.gradientContainer}>
                <Text style={styles.link}>
                  Sundaram-Clayton Board Declares Dividend...
                </Text>
              </LinearGradient>
            </CustomCard>
          </Pressable>
        </RankCard>

        {/* Mutual Fund Rank */}
        <RankCard title="Mutual Fund Rank" rank="5">
          <View style={styles.divider} />

          <Text>
            Total holding of 1.47m shares with a market value of Rs. 1,614.10 cr
            by 27 Mutual Fund schemes.
          </Text>
          <Text>Net investment of 625.7k shares last month.</Text>
          <View style={styles.divider} />

          <Text style={styles.link}>
            The net investment value is Rs. 0.64 crore, which is equivalent to
            0.003272454% of the current market capitalization.
          </Text>
          <View style={styles.divider} />

          <Text style={styles.timestamp}>
            Last Updated at 06-05-2024 05:14 PM
          </Text>
        </RankCard>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  divider: {
    height: responsive.height(1),
    backgroundColor: '#9a989844',
    marginVertical: responsive.margin(10),
    width: '100%',
  },
  // inputcss
  label: {
    alignSelf: 'center',
    fontSize: responsive.fontSize(12),
    color: '#000000',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsive.margin(12),
  },
  input: {
    backgroundColor: '#fff',
    width: responsive.width(50),
    height: responsive.height(30),
    borderRadius: responsive.borderRadius(8),
    textAlign: 'center',
    color: '#000',
  },
  button: {
    flexDirection: 'row',
    marginVertical: responsive.margin(10),
    alignSelf: 'center',
    backgroundColor: '#d9e0f6',
    paddingVertical: responsive.padding(6),
    paddingHorizontal: responsive.padding(12),
    borderRadius: responsive.borderRadius(5),
    alignItems: 'center',
  },

  //dropdown
  dropDownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: responsive.padding(5),
  },
  dropdown: {
    margin: responsive.margin(10),
    height: responsive.height(34),
    width: responsive.width(150),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: responsive.borderRadius(8),
    paddingHorizontal: responsive.padding(8),
  },
  placeholderStyle: {
    alignItems: 'center',
    fontSize: responsive.fontSize(16),
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: responsive.fontSize(12),
    alignSelf: 'center',
    fontWeight: '400',
    color: '#000',
  },
  inputSearchStyle: {
    height: responsive.height(40),
    fontSize: responsive.fontSize(16),
  },
  indicators: {
    margin: responsive.margin(2),
    alignSelf: 'center',
    fontWeight: '500',
  },
  indicatorCircle: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: 'red',
    marginRight: 5,
    alignSelf: 'center',
  },
  addButton: {
    alignSelf: 'center',
    paddingVertical: responsive.padding(7),
    paddingHorizontal: responsive.padding(15),
    borderRadius: responsive.borderRadius(8),
    alignItems: 'center',
  },
  textButton: {
    color: COLORS.white,
    fontSize: responsive.fontSize(14),
    fontWeight: 'bold',
  },

  indicatorBtn: {
    alignSelf: 'center',
    paddingVertical: responsive.padding(7),
    paddingHorizontal: responsive.padding(15),
    borderRadius: responsive.borderRadius(8),
    alignItems: 'center',
  },
  indicatorText: {
    color: COLORS.white,
    fontSize: responsive.fontSize(11),
    fontWeight: 'bold',
  },
  sentimentCard: {
    margin: responsive.margin(2),
  },

  gradientContainer: {
    padding: responsive.padding(10),
    borderRadius: responsive.borderRadius(10),
  },

  //diffrent css
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsive.margin(4),
  },
  boldText: {
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  link: {
    color: COLORS.primary,
    marginTop: responsive.margin(2),
    marginBottom: responsive.margin(4),
    fontWeight: 'bold',
  },
  timestamp: {
    fontSize: responsive.fontSize(12),
    color: '#888',
    marginTop: responsive.margin(8),
  },
});

export default RankScreen;
