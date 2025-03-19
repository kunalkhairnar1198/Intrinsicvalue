import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import {COLORS} from '../../constants/theme';
import responsive from '../../utils/responsive';
import {
  AlgoTradeIcon,
  Homeicon,
  InsightIcon,
  PortfolioIcon,
  WatchlistIcon,
} from '../../assets/SVG/appiconsvg/LeaderBoardIcon';

const CustomBottomTabNavigation = ({state, descriptors, navigation}) => {
  const icons = {
    Home: Homeicon,
    Watchlist: WatchlistIcon,
    Algotrader: AlgoTradeIcon,
    Portfolio: PortfolioIcon,
    Insights: InsightIcon,
  };
  console.log(state, navigation, descriptors);

  return (
    <View style={styles.container}>
      {state.routes.map((tab, index) => {
        const isFocused = state.index === index;
        const IconComponent = icons[tab.name];
        const color = isFocused ? `${COLORS.primary}` : 'black';

        return (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tabItem, isFocused && styles.activeTab]}
            onPress={() => navigation.navigate(tab.name)}>
            <IconComponent width={24} height={24} fill={COLORS.primary} />
            <Text style={[styles.tabText, isFocused && styles.activeText]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: responsive.height(10),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    gap: 10,
    height: '100%',
    width: '20%',
    justifyContent: 'center',
  },
  activeTab: {
    borderTopWidth: 2,
    borderTopColor: COLORS.primary,
    // backgroundColor: '#f2f2f2',
  },
  tabText: {
    fontSize: responsive.fontSize(16),
    color: 'black',
  },
  activeText: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});

export default CustomBottomTabNavigation;
