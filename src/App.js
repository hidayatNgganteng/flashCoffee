import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigations/AppNavigator'

export default function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}
