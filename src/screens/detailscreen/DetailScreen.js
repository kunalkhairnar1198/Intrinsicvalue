import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import DetailsHeader from '../../components/Header/DetailsHeader';
import DetailsToptabNavigation from '../../navigations/TopTabBarNavigation/DetailsToptabNavigation';

const DetailScreen = ({navigation, route}) => {
  const {item} = route?.params;
  // console.log(item);
  return (
    <View style={styles.container}>
      <DetailsHeader navigation={navigation} item={item} goBack={'goBack'} />
      {/* detail screen material top tab bar */}
      <DetailsToptabNavigation />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetailScreen;
