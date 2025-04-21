import {StyleSheet, View} from 'react-native';

import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getIndicesDataAction,
  setNseIndicesData,
} from '../../store/dashboard/dashboardslice';

// import NseIndicesData from '../../assets/NiftyData/Data.json';
import FlatlistComponent from '../../components/List/FlatlistComponent';

const NseIndicesScreen = ({navigation}) => {
  const [isLoading, setIsLaoding] = useState(false);
  const {token} = useSelector(state => state.auth);
  const {indicesData} = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  console.log(indicesData);
  console.log(token);

  useEffect(() => {
    // dispatch(setNseIndicesData(niftydata));
    dispatch(getIndicesDataAction(token, setIsLaoding));
  }, [token, setIsLaoding]);

  // console.log(niftyNseIndicesData);

  return (
    <View style={styles.container}>
      <FlatlistComponent data={indicesData} navigation={navigation} />
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
