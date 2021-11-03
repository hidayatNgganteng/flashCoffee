import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import theme from '../theme'
import HeadlineSchedule from './HeadlineSchedule'
import EmptySchedule from './EmptySchedule'
import moment from 'moment'

const ScheduleCard = ({ item }) => {
  const { store_name, shop_open_hours, shope_closing_hours, date } = item

  return (
    <View style={styles.container}>
      <View style={styles.timeStyle}>
        <Text style={styles.dayStyle}>{ moment(item.date).format('ddd') }</Text>
        <Text style={[styles.dateStyle, { color: moment(item.date).format('dddd') === 'Sunday' ? theme.colors.pink : theme.colors.black }]}>{ moment(item.date).format('D') }</Text>
      </View>
      {
        item.isAvailableSchedule ? (
          <TouchableOpacity onPress={() => null} style={styles.card}>
            <HeadlineSchedule
              title={store_name}
              time={`${shop_open_hours} - ${shope_closing_hours}`}
              isWithTodayLabel={moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')}/>
          </TouchableOpacity>
        ) : (
          <EmptySchedule />
        )
      }
    </View>
  )
}

export default ScheduleCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20
  },
  timeStyle: {
    alignItems: 'center',
    width: 60
  },
  dayStyle: {
    color: theme.colors.gray,
    fontSize: theme.fonts.normal,
    letterSpacing: 0.55
  },
  dateStyle: {
    fontSize: theme.fonts.semiLarge,
    fontWeight: 'bold',
    marginTop: 3
  },
  card: {
    flex: 1,
    backgroundColor: theme.colors.semiGray,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    height: 85,
    justifyContent: 'center'
  }
})
