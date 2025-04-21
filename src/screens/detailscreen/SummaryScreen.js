import React from 'react';
import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import {COLORS} from '../../constants/theme';
import CustomCard from '../../components/UI/Card';
import ShieldIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import responsive from '../../utils/responsive';
import LinearGradient from 'react-native-linear-gradient';

const infoData = [
  {label: 'Previous Close', value: '₹9,011.75'},
  {label: 'Open', value: '₹9,598.95'},
  {label: "Day's Range", value: '₹9,550.00 - ₹10,159.65'},
  {label: '52 Week Range', value: '₹3,359.75 - ₹10,159.65'},
  {label: 'Volume', value: '69,068.00'},
  {label: 'Market Cap', value: '₹19,466.40 Cr'},
  {label: 'PE Ratio (TTM)', value: '26.89'},
  {label: 'EPS (TTM)', value: '₹356.87'},
];

const rankingData = [
  {label: 'Fundamental rating', rank: '2'},
  {label: 'Technical rating', rank: '1'},
  {label: 'Sentimental rating', rank: '3'},
  {label: 'Mutual Fund rating', rank: '4'},
];

const SummaryScreen = () => {
  // console.log(rankingData);
  const renderInfoItem = ({item}) => (
    <View style={styles.dataInfo}>
      <Text style={styles.infoLabel}>{item.label}</Text>
      <Text style={styles.infoValue}>{item.value}</Text>
    </View>
  );

  const renderRankingItem = ({item}) => (
    <View style={styles.dataInfo}>
      <Text style={styles.infoLabel}>{item.label}</Text>
      <View style={styles.rankContainer}>
        <ShieldIcon name="shield" color={COLORS.primary} size={36} />
        <Text style={styles.rankText}>{item.rank}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}>
        <View style={styles.cardContainer}>
          <Text style={styles.sectionTitle}>Graph Section</Text>

          <CustomCard style={styles.description}>
            <LinearGradient
              colors={['#FFFFFF', '#F0F4FF', '#F0F4FF']}
              start={{x: 1, y: 0.5}}
              end={{x: 0, y: 0.5}}
              style={styles.gradientContainer}>
              <Text style={styles.descriptionText}>
                TVS Holdings Ltd. is a diversified holding company that operates
                in various industries, including automotive, financial services,
                electronics, and more. The company owns subsidiaries such as TVS
                Motor Company, one of the largest two-wheeler manufacturers in
                India...
              </Text>
            </LinearGradient>
          </CustomCard>

          <CustomCard style={styles.dataCard}>
            <FlatList
              data={infoData}
              renderItem={renderInfoItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </CustomCard>

          <CustomCard style={styles.rankingCard}>
            <Text style={styles.rankingTitle}>FTSM Ranking</Text>
            <FlatList
              data={rankingData}
              renderItem={renderRankingItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </CustomCard>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  cardContainer: {
    padding: responsive.padding(10),
  },
  scrollContent: {
    paddingBottom: responsive.padding(30),
  },
  sectionTitle: {
    fontSize: responsive.fontSize(16),
    fontWeight: 'bold',
    marginBottom: responsive.margin(8),
    color: COLORS.primary,
  },
  description: {
    margin: responsive.margin(5),
  },
  descriptionText: {
    fontSize: responsive.fontSize(13),
    color: '#555',
    lineHeight: responsive.height(20),
    textAlign: 'justify',
  },
  gradientContainer: {
    padding: responsive.padding(10),
    borderRadius: responsive.borderRadius(10),
  },
  dataCard: {
    backgroundColor: '#f9f9f9',
    padding: responsive.padding(10),
    margin: responsive.margin(5),
  },
  dataInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: responsive.padding(8),
    borderBottomWidth: responsive.borderRadius(1),
    borderStyle: 'dashed',
    borderColor: '#ccc',
  },
  infoLabel: {
    fontSize: responsive.fontSize(13),
    color: '#333',
    flex: 1,
  },
  infoValue: {
    fontSize: responsive.fontSize(13),
    fontWeight: 'bold',
    textAlign: 'right',
    flex: 1,
  },
  rankingCard: {
    padding: responsive.padding(10),
  },
  rankingTitle: {
    padding: responsive.padding(5),
    fontSize: responsive.fontSize(16),
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  rankContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: responsive.width(36),
    height: responsive.height(36),
  },
  rankText: {
    position: 'absolute',
    fontSize: responsive.fontSize(14),
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SummaryScreen;
