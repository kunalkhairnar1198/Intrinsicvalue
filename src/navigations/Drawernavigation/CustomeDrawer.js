import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';

import {COLORS} from '../../constants/theme';
import {routes} from '../ScreenRoutes';

import LinearGradient from 'react-native-linear-gradient';

import LoginIcon from 'react-native-vector-icons/Entypo';
import DrawerBgSvg from '../../assets/SVG/BgSvgs/DrawerBgSvg';
import responsive from '../../utils/responsive';

const CustomDrawer = props => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, {paddingTop: insets.top}]}>
      <LinearGradient
        colors={['#FFFFFF', '#F0F4FF']}
        start={{x: 1, y: 0.5}}
        end={{x: 0, y: 0.5}}
        style={styles.gradient}
      />

      <View style={styles.backgroundSvg}>
        <DrawerBgSvg />
      </View>

      <View style={styles.menuContainer}>
        {routes
          .filter(route => route.showInDrawer)
          .map((item, index) => (
            <View key={index.toString()}>
              <LinearGradient
                colors={['#FFFFFF', '#F0F4FF']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.itemContainer}>
                <Pressable
                  onPress={() => props.navigation.navigate(item.name)}
                  style={({pressed}) => [
                    styles.menuItem,
                    pressed && styles.pressedItem,
                  ]}>
                  <View style={styles.innerShadow} />
                  {/* <item.icon color={COLORS.primary} size={item.size} /> */}
                  {item.icon && typeof item.icon === 'function'
                    ? item.icon(true)
                    : ''}
                  <Text style={styles.menuText}>{item.title}</Text>
                </Pressable>
              </LinearGradient>
            </View>
          ))}
      </View>

      <View style={styles.bottomText}>
        <Text style={styles.text}>
          © 2024 Intrinsic Value. All rights reserved.{' '}
          <Text style={styles.link}>Terms of Service</Text>
        </Text>
      </View>

      <View style={styles.breakLine} />

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => console.log('Logout Pressed')}>
        <LoginIcon name="log-out" size={25} color={COLORS.primary} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: responsive.padding(10),
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  backgroundSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  innerShadow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: responsive.borderRadius(20),
    backgroundColor: 'transparent',
    shadowColor: '#E0E8FD',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: responsive.height(50),
    paddingHorizontal: responsive.padding(10),
    borderRadius: responsive.borderRadius(10),
  },
  pressedItem: {
    backgroundColor: '#E0E8FD',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: responsive.width(200),
    height: responsive.height(45),
    borderRadius: responsive.borderRadius(10),
    marginBottom: responsive.margin(10),
    overflow: 'hidden',
  },
  menuText: {
    fontFamily: 'Inter',
    fontSize: responsive.fontSize(14),
    marginLeft: responsive.margin(10),
    color: COLORS.black,
  },
  bottomText: {
    alignItems: 'center',
    padding: responsive.padding(10),
  },
  text: {
    fontSize: responsive.fontSize(7),
    color: '#000000',
  },
  link: {
    color: COLORS.primary,
  },
  breakLine: {
    height: 1,
    marginBottom: 20,
    backgroundColor: '#ABC0FF',
    width: 280,
  },
  logoutButton: {
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginHorizontal: responsive.height(10),
  },
  logoutText: {
    fontFamily: 'Inter',
    color: COLORS.primary,
    fontSize: responsive.fontSize(16),
    fontWeight: 'bold',
  },
});

export default CustomDrawer;
