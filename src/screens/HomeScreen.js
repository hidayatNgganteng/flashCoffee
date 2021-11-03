import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HomeInfo from '../components/HomeInfo'
import TodaySchedule from '../components/TodaySchedule'
import NextSchedule from '../components/NextSchedule'
import HomeFooter from '../components/HomeFooter'
import theme from '../theme'
import { getSchedules } from '../dummy/StoreList'
import moment from 'moment'

const HomeScreen = ({ navigation }) => {
  const [schedules, setSchedules] = useState([])

  useEffect(() => {
    getSchedules().then(res => {
      setSchedules(res)
    })
  }, [])

  const todaySchedule = schedules.find(item => item.date === moment().format('YYYY-MM-DD'))

  return (
    <View style={styles.container}>
      <HomeInfo />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View>
          <TodaySchedule schedule={todaySchedule} navigation={navigation} />
          <NextSchedule navigation={navigation} />
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
