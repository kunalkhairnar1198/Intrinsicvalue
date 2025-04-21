import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import NseTopGainers from '../../assets/NiftyData/NseTopGainerLooser.json';
import FlatlistComponent from '../../components/List/FlatlistComponent';
import {useDispatch, useSelector} from 'react-redux';
import {
  getTopGainerAndLooserAction,
  setTopLoosersData,
} from '../../store/dashboard/dashboardslice';

const NseTopLoserScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {topLoosersData} = useSelector(state => state.dashboard);
  const {token} = useSelector(state => state.auth);

  console.log(topLoosersData);

  useEffect(() => {
    dispatch(getTopGainerAndLooserAction(token, setIsLoading));
  }, [token, setIsLoading]);

  return (
    <View style={styles.container}>
      <FlatlistComponent
        data={topLoosersData}
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
