import {StyleSheet, View} from 'react-native';

import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setNseIndicesData} from '../../store/dashboard/dashboardslice';

import NseIndicesData from '../../assets/NiftyData/Data.json';
import FlatlistComponent from '../../components/List/FlatlistComponent';

const NseIndicesScreen = ({navigation}) => {
  const {niftydata} = NseIndicesData;

  // const [niftydatas, setNiftyData] = useState(niftydata);

  const niftyNseIndicesData = useSelector(state => state.dashboard.indicesData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNseIndicesData(niftydata));
  }, []);

  // console.log(niftyNseIndicesData);

  return (
    <View style={styles.container}>
      <FlatlistComponent data={niftyNseIndicesData} navigation={navigation} />
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
