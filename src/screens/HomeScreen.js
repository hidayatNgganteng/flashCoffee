import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import HomeInfo from '../components/HomeInfo'
import TodaySchedule from '../components/TodaySchedule'
import NextSchedule from '../components/NextSchedule'
import HomeFooter from '../components/HomeFooter'
import theme from '../theme'
import { ScrollView } from 'react-native-gesture-handler'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HomeInfo />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View>
          <TodaySchedule />
          <NextSchedule />
        </View>

        <HomeFooter />
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.native_white
  },
  scrollContent: {
    justifyContent: 'space-between'
  }
})
