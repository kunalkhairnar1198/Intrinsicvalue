import {StyleSheet, View} from 'react-native';

import NseIndicesData from '../../assets/NiftyData/Data.json';
import FlatlistComponent from '../../components/List/FlatlistComponent';

const NseIndicesScreen = ({navigation}) => {
  // console.log('data', NseIndicesData);

  const {niftydata} = NseIndicesData;

  return (
    <View style={styles.container}>
      <FlatlistComponent data={niftydata} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default NseIndicesScreen;
