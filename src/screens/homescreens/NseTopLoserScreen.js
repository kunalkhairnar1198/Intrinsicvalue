import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NseTopGainers from '../../assets/NiftyData/NseTopGainerLooser.json';
import FlatlistComponent from '../../components/List/FlatlistComponent';
import {useDispatch, useSelector} from 'react-redux';
import {setTopLoosersData} from '../../store/dashboard/sortSlice/dashboardslice';

const NseTopLoserScreen = ({navigation}) => {
  const {looser} = NseTopGainers;
  const dispatch = useDispatch();
  const nseTopLoosersData = useSelector(
    state => state.dashboard.topLoosersData,
  );

  useEffect(() => {
    dispatch(setTopLoosersData(looser));
  }, []);

  // console.log(NseTopGainers);
  return (
    <View style={styles.container}>
      <FlatlistComponent
        data={nseTopLoosersData}
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

export default NseTopLoserScreen;
