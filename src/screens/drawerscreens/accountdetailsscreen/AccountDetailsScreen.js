import React from 'react';
import {FlatList, Linking, Pressable, StyleSheet, View} from 'react-native';

import {Text} from 'react-native-paper';
import {COLORS} from '../../../constants/theme';
import {screenRoutes} from '../../../navigations/ScreenRoutes';

import Card from '../../../components/UI/Card';
import responsive from '../../../utils/responsive';
import LinearGradient from 'react-native-linear-gradient';
import {SingleLineIcon} from '../../../assets/SVG/appiconsvg/Icons';

const AccountDetailsScreen = ({navigation}) => {
  const handleLinkPress = () => {
    Linking.openURL('https://intrinsicvalue.ai');
  };
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <LinearGradient
          colors={['#FFFFFF', '#F0F4FF', '#F0F4FF']}
          start={{x: 1, y: 0.5}}
          end={{x: 0, y: 0.5}}
          style={styles.gradientContainer}>
          <View style={styles.profileSection}>
            <Text style={styles.userText}>Sharma Ajay</Text>
            <Text style={styles.userEmail}>SharmaAjay@gmail.com</Text>
          </View>
        </LinearGradient>
      </Card>

      <View>
        <FlatList
          data={screenRoutes}
          renderItem={({item}) => (
            <Pressable onPress={() => navigation.navigate(item.route)}>
              <View style={styles.flatlistItem}>
                {item.icon && typeof item.icon === 'function' ? (
                  item.icon(true)
                ) : (
                  <Text>dta</Text>
                )}
                <Text style={styles.optionText}>{item.screenName}</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                {!item.length && <SingleLineIcon />}
              </View>
            </Pressable>
          )}
          keyExtractor={item => Math.random().toString()}
        />
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.paragraphSection}>
          <Text>
            <Text onPress={handleLinkPress} style={styles.linkText}>
              IntrinsicValue.ai
            </Text>{' '}
            does not serve as a Financial Advisory or Recommendation Service.
            Investing or trading in stocks involves market risks, and there is
            no certainty of earning returns – including both the original
            investment (principal) and any potential profit (appreciation).
            Neither EC Infosolutions nor{' '}
            <Text onPress={handleLinkPress} style={styles.linkText}>
              IntrinsicValue.ai
            </Text>{' '}
            will be responsible or liable for any profits or losses incurred
            from your investments. It is advisable to consult your financial
            planner before making investment decisions.
          </Text>
        </Text>
        <Text style={{textAlign: 'right', marginVertical: 10}}>
          © 2024 Intrinsic Value. All rights reserved.{' '}
          <Text style={styles.linkText}>Terms and Condition</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: responsive.padding(10),
    flexDirection: 'column',
  },
  cardContainer: {
    marginVertical: 15,
  },
  gradientContainer: {
    width: '100%',
    paddingVertical: 5,
    padding: responsive.padding(15),
    borderRadius: responsive.borderRadius(10),
  },
  profileSection: {
    padding: responsive.padding(5),
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-arround',
  },
  userText: {
    marginVertical: 13,
    fontSize: responsive.fontSize(19),
    fontFamily: 'inter',
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  userEmail: {
    marginVertical: 4,
    fontSize: responsive.fontSize(14),
    fontFamily: 'inter',
    fontWeight: '700',
    color: COLORS.primary,
  },
  flatlistItem: {
    flexDirection: 'row',
    padding: responsive.padding(15),
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-arround',
  },
  optionText: {
    fontWeight: '500',
    fontFamily: 'inter',
    fontSize: responsive.fontSize(17),
    padding: 5,
  },
  footerContainer: {
    marginVertical: responsive.margin(140),
  },
  paragraphSection: {
    fontFamily: 'inter',
    fontWeight: '600',
    textAlign: 'justify',
    lineHeight: 19,
  },
  linkText: {
    fontFamily: 'inter',
    color: COLORS.primary,
    textDecorationLine: 'underline',
  },
});

export default AccountDetailsScreen;
