import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import responsive from '../../../utils/responsive';

const FinancialTabs = ({tabs, activeTab, onTabChange}) => {
  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabsContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => onTabChange(tab)}
            style={[
              styles.tabButton,
              activeTab === tab && styles.activeTabButton,
            ]}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    marginRight: 10,
    paddingBottom: 4,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#003366',
  },
  tabText: {
    color: '#888',
  },
  activeTabText: {
    color: '#003366',
    fontWeight: 'bold',
  },
  divider: {
    height: responsive.height(3),
    backgroundColor: '#9a989844',
    // marginVertical: responsive.margin(1),
    width: '100%',
  },
});

export default FinancialTabs;
