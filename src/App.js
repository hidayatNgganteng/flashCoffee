import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native'
import AppNavigator from './navigations/AppNavigator'
import theme from './theme';

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.topSafeAreaStyle}></SafeAreaView>
      <SafeAreaView style={styles.bottomSafeAreaStyle}>
        <AppNavigator />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  topSafeAreaStyle: {
    flex: 0,
    backgroundColor: theme.colors.yellow
  },
  bottomSafeAreaStyle: {
    flex: 1
  }
})
