import React from 'react';
import {StyleSheet, View} from 'react-native';

import CustomeHeader from '../../../components/Header/CustomeHeader';
import CustomTopTabs from '../../../navigations/TopTabBarNavigation/CustomTopTabs';

import TechnicalStrategyScreen from './TechnicalStrategyScreen';
import FtsmTradingStrategyscreen from './FtsmTradingStrategyscreen';

const routes = [
  {
    name: 'Technicalstrategies',
    component: TechnicalStrategyScreen,
    title: 'Technical Strategy',
  },

  {
    name: 'Ftsmtradingstrategies',
    component: FtsmTradingStrategyscreen,
    title: 'FTSM Trading Strategy',
  },
];

const MyStrategiesScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <CustomeHeader navigation={navigation} title={route.name} />
      <CustomTopTabs routes={routes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MyStrategiesScreen;
