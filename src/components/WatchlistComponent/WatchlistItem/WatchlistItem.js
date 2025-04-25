import {Text} from 'react-native-paper';
import {Pressable, StyleSheet, View} from 'react-native';

import responsive from '../../../utils/responsive';
import {COLORS} from '../../../constants/theme';
import CustomCard from '../../UI/Card';
import LinearGradient from 'react-native-linear-gradient';
import CustomCheckBox from '../../CheckBox/CustomCheckBox';

// import {useDispatch, useSelector} from 'react-redux';

// import {toggleSelection} from '../../store/watchlist/watchlistslice';

const WatchlistItem = ({
  item,
  symbolData,
  patternData,
  technicalrankdata,
  listKey,
}) => {
  // const dispatch = useDispatch();
  // // console.log(item, listKey);

  // const {selectedWatchlistData, watchList1, watchList2, watchList3} =
  //   useSelector(state => state.mywatchlist);

  // // console.log(selectedWatchlistData);

  // const handleCheckboxPress = (item, listKey) => {
  //   // console.log(item);
  //   const deletedObject = {
  //     ...item,
  //     listKey,
  //     id: item.symbol || `${item.name}-${item.NSE_UPD_TIME}`,
  //   };
  //   // console.log(deletedObject);
  //   dispatch(toggleSelection(deletedObject));
  // };

  // const handeSelectedItemDelete = () => {};
  //   console.log(item, symbolData, patternData, technicalrankdata, listKey);
  return (
    <>
      <CustomCard style={styles.cardContainer}>
        <Pressable>
          <LinearGradient
            colors={['#FFFFFF', '#F0F4FF', '#F0F4FF']}
            start={{x: 1, y: 0.5}}
            end={{x: 0, y: 0.5}}
            style={styles.gradientContainer}>
            <View style={styles.container}>
              <View style={styles.checkBox}>
                <CustomCheckBox
                //   isChecked={selectedWatchlistData.some(
                //     selected => selected.symbol === item.symbol,
                //   )}
                //   onPress={() => handleCheckboxPress(item, listKey)}
                />
              </View>

              <View style={styles.contentRow}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text style={styles.title}>{symbolData?.name}</Text>
                  <Text style={styles.description}>{symbolData?.symbol}</Text>
                </View>

                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.closeText}>₹ {symbolData?.NSE_LTP}</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: symbolData?.NSE_CHANGE < 0 ? 'red' : 'green',
                    }}>
                    {symbolData?.NSE_CHANGE < 0
                      ? `${symbolData?.NSE_CHANGE}%`
                      : `${symbolData?.NSE_CHANGE}%`}
                  </Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </Pressable>
      </CustomCard>
    </>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    paddingVertical: responsive.padding(4),
    paddingHorizontal: responsive.padding(15),
    borderRadius: responsive.borderRadius(10),
    height: responsive.height(85),
  },
  cardContainer: {
    marginVertical: responsive.margin(4),
    height: responsive.height(85),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-arround',
    flex: 1,
    paddingHorizontal: responsive.padding(5),
  },
  checkBox: {
    marginVertical: responsive.margin(20),
  },
  title: {
    fontSize: responsive.fontSize(16),
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  description: {
    fontSize: responsive.fontSize(13),
    color: COLORS.primary,
    marginTop: responsive.margin(1),
  },
  closeText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.black,
  },
});

export default WatchlistItem;
