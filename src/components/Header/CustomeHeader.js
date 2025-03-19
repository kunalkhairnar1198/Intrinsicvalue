import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import responsive from '../../utils/responsive';
import { COLORS } from '../../constants/theme';

import UserIcon from 'react-native-vector-icons/FontAwesome'

const CustomeHeader =  ({ navigation, title }) => {
  console.log(navigation.getState())
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.toggleBackground}>
        <Ionicons name="menu" size={35} color={COLORS.primary} />
      </TouchableOpacity>
      
      
      <Text style={styles.titleText}>{title}</Text>

      <View style={styles.profileSection}>
        <UserIcon name="user" size={35}  color={COLORS.primary}/>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
    padding: responsive.padding(10),
    backgroundColor: COLORS.white,
    elevation: 3, 
  },

  toggleBackground: {
    backgroundColor: "#ABC0FF",
    padding: responsive.padding(5), 
    borderRadius: responsive.borderRadius(8),
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    fontFamily: "Inter",
    fontSize: responsive.fontSize(19),
    fontWeight: "bold",
    color: COLORS.primary,
    flex: 1, 
    textAlign: "center", 
  },

  profileSection: {
    backgroundColor: "#ABC0FF",
    padding: responsive.padding(5),
    borderRadius: responsive.borderRadius(8),
    alignItems: "center",
    justifyContent: "center",
    width: responsive.width(40), 
    height: responsive.width(40), 
  },
});


export default CustomeHeader;
