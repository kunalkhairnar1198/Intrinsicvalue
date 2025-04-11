import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants/theme';
import ShieldIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import responsive from '../../utils/responsive';

const RankCard = ({title, rank, children}) => {
  const [fold, setFold] = useState(true);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => setFold(!fold)}
      style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.rankContainer}>
          <View style={styles.iconWrapper}>
            <ShieldIcon name="shield" color={COLORS.primary} size={36} />
            <Text style={styles.rankText}>{rank}</Text>
          </View>

          <Ionicons
            name={fold ? 'chevron-down' : 'chevron-up'}
            size={25}
            color={COLORS.primary}
            style={{marginLeft: 8}}
          />
        </View>
      </View>

      {/* Body Content (conditional) */}
      {!fold && <View>{children}</View>}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: responsive.borderRadius(8),
    padding: responsive.padding(10),
    marginBottom: responsive.margin(16),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsive.margin(4),
    alignItems: 'center',
  },
  title: {
    fontSize: responsive.fontSize(16),
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  rankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsive.borderRadius(8),
    paddingHorizontal: responsive.padding(8),
    justifyContent: 'center',
  },

  iconWrapper: {
    width: responsive.width(36),
    height: responsive.height(36),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  rankText: {
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsive.fontSize(14),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default RankCard;
