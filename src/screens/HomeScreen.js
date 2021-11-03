import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import HomeInfo from '../components/HomeInfo'
import TodaySchedule from '../components/TodaySchedule'
import NextSchedule from '../components/NextSchedule'
import HomeFooter from '../components/HomeFooter'
import theme from '../theme'
import { getSchedules } from '../dummy/StoreList'
import moment from 'moment'

const scheduleInit = {
  id: "0",
  store_name: '',
  address: '',
  image: require('../assets/images/flash-coffee-space.jpeg'),
  date: moment().format('YYYY-MM-DD'),
  shop_open_hours: '08:00',
  shope_closing_hours: '17:00',
  clock_in: null,
  clock_out: null
}

const HomeScreen = ({ navigation }) => {
  const [schedules, setSchedules] = useState([scheduleInit])

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
          <NextSchedule schedules={schedules}  navigation={navigation} />
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
