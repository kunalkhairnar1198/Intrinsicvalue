import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

import responsive from '../../utils/responsive';

import Ionicons from 'react-native-vector-icons/Ionicons';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import {SingleLineIcon} from '../../assets/SVG/appiconsvg/Icons';
import {COLORS} from '../../constants/theme';
import {screens} from '../../navigations/ScreenRoutes';

const CustomeHeader = ({navigation, title, goBack}) => {
  const handleBackPress = () => {
    if (goBack) {
      navigation.goBack();
    } else {
      navigation.openDrawer();
    }
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handleBackPress}
          style={styles.toggleBackground}>
          <Ionicons
            name={goBack === 'goBack' ? 'arrow-back' : 'menu'}
            size={30}
            color={COLORS.primary}
          />
        </TouchableOpacity>

        <Text style={styles.titleText}>{title}</Text>

        <Pressable
          onPress={() => navigation.navigate(screens.AccountDetailsNavigator)}>
          <View style={styles.profileSection}>
            <UserIcon name="user" size={29} color={COLORS.primary} />
          </View>
        </Pressable>
      </View>
      <View style={{alignItems: 'center'}}>
        <SingleLineIcon />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: responsive.padding(10),
    backgroundColor: COLORS.white,
    elevation: 3,
  },

  toggleBackground: {
    backgroundColor: '#ABC0FF',
    padding: responsive.padding(5),
    borderRadius: responsive.borderRadius(8),
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    fontFamily: 'Inter',
    fontSize: responsive.fontSize(19),
    fontWeight: 'bold',
    color: COLORS.primary,
    flex: 1,
    textAlign: 'center',
  },

  profileSection: {
    backgroundColor: '#ABC0FF',
    padding: responsive.padding(4),
    borderRadius: responsive.borderRadius(8),
    alignItems: 'center',
    justifyContent: 'center',
    width: responsive.width(39),
    height: responsive.width(39),
  },
});

export default CustomeHeader;
