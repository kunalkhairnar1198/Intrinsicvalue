import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LeaderboardScreen from '../../screens/drawerscreens/leaderboardscreen/LeaderboardScreen';

const Stack = createStackNavigator();

const LeaderBoardNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
    </Stack.Navigator>
  );
};

export default LeaderBoardNavigator;
