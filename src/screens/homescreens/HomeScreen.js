import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import CustomeHeader from '../../components/Header/CustomeHeader';

const HomeScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <CustomeHeader navigation={navigation} title={route.name} />
      <View style={{flex: 1}}>
        <Text>Home data</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default HomeScreen;
