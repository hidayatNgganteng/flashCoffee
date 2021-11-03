import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import SchedulesScreen from '../screens/SchedulesScreen'
import DetailScreen from '../screens/DetailScreen'

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Schedules" component={SchedulesScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator
