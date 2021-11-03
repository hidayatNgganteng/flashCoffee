import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import theme from '../theme'
import HeadlineSchedule from './HeadlineSchedule'

const ScheduleCard = ({ day, dateVal, schedule }) => {
  return (
    <View style={styles.container}>
      <View style={styles.timeStyle}>
        <Text style={styles.dayStyle}>{ day }</Text>
        <Text style={styles.dateStyle}>{ dateVal }</Text>
      </View>
      <TouchableOpacity onPress={schedule.onPress} style={styles.card}>
        <HeadlineSchedule
          title={schedule.title}
          time={schedule.time}
          isWithTodayLabel={false}/>
      </TouchableOpacity>
      {/* <View style={styles.emptySchedule}>
        <Text style={styles.emptyScheduleLabel}>NO SCHEDULE</Text>
      </View> */}
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
    color: theme.colors.black,
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
  },
  emptySchedule: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderStyle: 'dashed',
    height: 85
  },
  emptyScheduleLabel: {
    fontSize: theme.fonts.normal,
    fontWeight: 'bold'
  }
})
