import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import CustomButton from './CustomButton'
import HeaderSchedule from './HeaderSchedule'
import HeadlineSchedule from './HeadlineSchedule'
import theme from '../theme'

const TodaySchedule = ({ navigation, schedule }) => {
  const { store_name, shop_open_hours, shope_closing_hours, clock_in, clock_out, isOpen } = schedule

  return (
    <View style={styles.container}>
      <HeaderSchedule
        label={`TODAY'S SCHEDULE`}
        btnLabel='Refresh'
        onPress={() => null}/>

      
        {
          isOpen ? (
            <TouchableOpacity onPress={() => navigation.navigate('Detail', { schedule })} style={styles.card}>
              <HeadlineSchedule
                title={ store_name }
                time={ `${shop_open_hours} - ${shope_closing_hours}` }/>

              <View style={styles.labelInfo}>
                <View style={styles.cardInfo}>
                  <CustomButton onPress={() => null} label='CLOCK IN' btnStyles={{}} />
                  <Text style={styles.checkTime}>{ clock_in === null ? '-- : --' : clock_in }</Text>
                </View>
                <Text style={styles.checkDash}>-----------</Text>
                <View style={styles.cardInfo}>
                  <CustomButton onPress={() => null} label='CLOCK OUT' btnStyles={styles.btnClockOut} />
                  <Text style={styles.checkTime}>{ clock_out === null ? '-- : --' : clock_out }</Text>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => null} style={styles.card} disabled>
              <Text style={styles.noSchedule}>NO SCHEDULE</Text>
            </TouchableOpacity>
          )
        }
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
  },
  noSchedule: {
    fontSize: theme.fonts.normal,
    color: theme.colors.black,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
