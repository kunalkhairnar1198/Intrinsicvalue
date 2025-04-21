import React, {use, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import NseTopGainers from '../../assets/NiftyData/NseTopGainerLooser.json';
import FlatlistComponent from '../../components/List/FlatlistComponent';
import {useDispatch, useSelector} from 'react-redux';
import {
  getTopGainerAndLooserAction,
  // setTopGainersData,
} from '../../store/dashboard/dashboardslice';

const NseTopGainerScreen = ({navigation}) => {
  // const {gainer} = NseTopGainers;

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const {topGainersData} = useSelector(state => state.dashboard);
  const {token} = useSelector(state => state.auth);

  console.log(topGainersData);

  useEffect(() => {
    dispatch(getTopGainerAndLooserAction(token, setIsLoading));
  }, [token, setIsLoading]);

  return (
    <View style={styles.container}>
      <FlatlistComponent
        data={topGainersData}
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
