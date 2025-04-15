import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomCard from '../UI/Card';
import responsive from '../../utils/responsive';

const GRADIENT_COLORS = [
  ['#F0A727', '#FFF1BA', '#F0A727'],
  ['#8A8A8A', '#E5E5E5', '#8A8A8A'],
  ['#C1623E', '#FFBFAD', '#C1623E'],
];

const LeaderboardCard = ({index, item, onOthersPress}) => {
  const mainUser = item.user[0]?.first_name || 'User';
  const others = item.user.slice(1);
  const showMedal = index < 3;

  return (
    <CustomCard style={styles.card}>
      <View style={styles.cardRow}>
        {showMedal ? (
          <LinearGradient
            colors={GRADIENT_COLORS[index]}
            style={styles.leftStrip}>
            <View style={styles.rankBox}>
              <Text style={styles.rankText}>{index + 1}</Text>
            </View>
          </LinearGradient>
        ) : (
          <View style={[styles.leftStrip, styles.defaultStrip]}>
            <View style={styles.rankBox}>
              <Text style={styles.rankText}>{index + 1}</Text>
            </View>
          </View>
        )}

        {/* Card Content */}
        <LinearGradient
          colors={['#FFFFFF', '#F0F4FF', '#F0F4FF']}
          start={{x: 1, y: 0.5}}
          end={{x: 0, y: 0.5}}
          style={styles.cardContent}>
          {/* <View style={styles.cardContent}> */}
          <View style={styles.infoContainer}>
            <Text style={styles.stockName}>{item.stock.name}</Text>
            <Text style={styles.userText}>
              {mainUser}
              {others.length > 0 && (
                <>
                  {' and '}
                  <Text
                    style={styles.link}
                    onPress={() => onOthersPress(others)}>
                    {others.length} other{others.length > 1 ? 's' : ''}
                  </Text>
                </>
              )}
            </Text>
          </View>
          <Text style={styles.percentText}>
            {item.absolute_return.toFixed(2)}%
          </Text>
          {/* </View> */}
        </LinearGradient>
      </View>
    </CustomCard>
  );
};

export default LeaderboardCard;

const styles = StyleSheet.create({
  card: {
    padding: 0,
    height: 80,
    marginVertical: 6,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  leftStrip: {
    width: 50,
    height: '100%',
  },
  defaultStrip: {
    backgroundColor: '#ABC0FF',
  },
  rankBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 12,
    height: 80,
    backgroundColor: '#F9FAFB',
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  stockName: {
    fontWeight: '600',
    fontSize: 15,
  },
  userText: {
    color: '#555',
  },
  link: {
    color: '#0077CC',
    textDecorationLine: 'underline',
  },
  percentText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#004080',
  },
});
