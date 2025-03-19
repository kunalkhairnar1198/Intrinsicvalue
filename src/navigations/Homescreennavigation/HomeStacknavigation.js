import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../../screens/homescreens/HomeScreen'

const Stack = createStackNavigator()

const HomeStacknavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
    </Stack.Navigator>
)
}

export default HomeStacknavigation