import {Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';

import {useContext, useEffect} from 'react';
import {TabContext} from '../../context-api/MaterialTopTabContext';

import {SingleLineIcon, SortIcons} from '../../assets/SVG/appiconsvg/Icons';
import {COLORS} from '../../constants/theme';
import responsive from '../../utils/responsive';

import CustomeHeader from '../../components/Header/CustomeHeader';
import CustomCheckBox from '../../components/CheckBox/CustomCheckBox';
import MaterialToptabnavigation from '../../navigations/TopTabBarNavigation/MaterialToptabnavigation';

import NseIndicesData from '../../assets/NiftyData/Data.json';
import IndicesList from '../../components/List/IndicesItem';

const HomeScreen = ({navigation, route}) => {
  const {niftydata} = NseIndicesData;
  const {isLoading} = useContext(TabContext);

  const filteredData = niftydata.filter(item =>
    ['NIFTY BANK', 'NIFTY NEXT 50', 'NIFTY 50'].includes(item.indices_name),
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomeHeader navigation={navigation} title={route.name} />
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}
      <View style={styles.contentContainer}>
        <View style={styles.cardContainer}>
          <IndicesList data={filteredData} navigation={navigation} />
        </View>

        <View style={{alignItems: 'center'}}>
          <SingleLineIcon size={300} />
        </View>

        <View style={styles.checkboxContainer}>
          <CustomCheckBox />
          <Text>Updated: 26 Apr 2024, 12:24 PM</Text>

          <Pressable
            onPress={() => console.log('Button Pressed')}
            style={styles.sortBtn}>
            <SortIcons size={25} color={COLORS.white} />
          </Pressable>
        </View>

        <MaterialToptabnavigation />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 2,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: responsive.padding(10),
    margin: responsive.margin(4),
  },
  sortBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: responsive.padding(5),
    borderRadius: responsive.borderRadius(5),
    width: responsive.width(30),
    height: responsive.height(30),
    backgroundColor: COLORS.primary,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    zIndex: 1,
  },
});

export default HomeScreen;
