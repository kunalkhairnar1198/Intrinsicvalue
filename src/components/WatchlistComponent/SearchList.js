import React from 'react';
import CustomCard from '../UI/Card';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native-paper';
import responsive from '../../utils/responsive';
import {COLORS} from '../../constants/theme';

const SearchList = ({searchData, handleItemClick}) => {
  const renderItem = ({item}) => (
    <Pressable onPress={() => handleItemClick(item.name)}>
      <CustomCard style={styles.cardContainer}>
        <LinearGradient
          colors={['#FFFFFF', '#F0F4FF', '#F0F4FF']}
          start={{x: 1, y: 0.5}}
          end={{x: 0, y: 0.5}}
          style={styles.gradientContainer}>
          <View style={styles.container}>
            <View style={styles.contentRow}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.description}>{item.symbol}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </CustomCard>
    </Pressable>
  );

  return (
    <FlatList
      data={searchData}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.symbol || index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    paddingVertical: responsive.padding(10),
    paddingHorizontal: responsive.padding(15),
    borderRadius: responsive.borderRadius(10),
  },
  cardContainer: {
    margin: responsive.margin(5),
    marginVertical: responsive.margin(5),
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: responsive.padding(5),
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
});

export default SearchList;
