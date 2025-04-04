import React, {use, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NseTopGainers from '../../assets/NiftyData/NseTopGainerLooser.json';
import FlatlistComponent from '../../components/List/FlatlistComponent';
import {useDispatch, useSelector} from 'react-redux';
import {setTopGainersData} from '../../store/dashboard/sortSlice/dashboardslice';

const NseTopGainerScreen = ({navigation}) => {
  const {gainer} = NseTopGainers;
  const dispatch = useDispatch();
  const nseTopGainerData = useSelector(state => state.dashboard.topGainersData);
  console.log(nseTopGainerData);
  // console.log(NseTopGainers);

  useEffect(() => {
    dispatch(setTopGainersData(gainer));
  }, []);

  return (
    <View style={styles.container}>
      <FlatlistComponent
        data={nseTopGainerData}
        navigation={navigation}
        table={'isTable'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default NseTopGainerScreen;
