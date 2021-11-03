import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import CustomButton from './CustomButton'
import HeaderSchedule from './HeaderSchedule'
import HeadlineSchedule from './HeadlineSchedule'
import theme from '../theme'

const TodaySchedule = () => {
  return (
    <View style={styles.container}>
      <HeaderSchedule
        label={`TODAY'S SCHEDULE`}
        btnLabel='Refresh'
        onPress={() => null}/>

      <TouchableOpacity onPress={() => null} style={styles.card}>
        <HeadlineSchedule
          title='Mediterania Garden Residence'
          time='08:00 - 17:00'/>

        <View style={styles.labelInfo}>
          <View style={styles.cardInfo}>
            <CustomButton onPress={() => null} label='CLOCK IN' btnStyles={{}} />
            <Text style={styles.checkTime}>-- : --</Text>
          </View>
          <Text style={styles.checkDash}>-----------</Text>
          <View style={styles.cardInfo}>
            <CustomButton onPress={() => null} label='CLOCK OUT' btnStyles={styles.btnClockOut} />
            <Text style={styles.checkTime}>-- : --</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default TodaySchedule

const styles = StyleSheet.create({
  container: {
    marginTop: 23,
    paddingHorizontal: 20
  },
  card: {
    backgroundColor: theme.colors.semiGray,
    paddingVertical: 13,
    paddingHorizontal: 13,
    marginTop: 7,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'space-between'
  },
  labelInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 20
  },
  cardInfo: {
    alignItems: 'center'
  },
  btnClockOut: {
    backgroundColor: theme.colors.pink
  },
  checkTime: {
    fontSize: theme.fonts.normal,
    color: theme.colors.black,
    marginTop: 7,
    fontWeight: 'bold'
  },
  checkDash: {
    fontSize: theme.fonts.normal,
    color: theme.colors.gray
  }
})
