import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LeaderboardScreen from '../../screens/drawerscreens/leaderboardscreen/LeaderboardScreen';
import FocusAwareStatusBar from '../../components/Statusbar/FocustAwareStatusBar';
import {COLORS} from '../../constants/theme';

const Stack = createStackNavigator();

const LeaderBoardNavigator = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
      </Stack.Navigator>
    </>
  );
};

export default LeaderBoardNavigator;
