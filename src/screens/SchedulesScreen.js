import moment from 'moment'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../components/Header'
import ScheduleCard from '../components/ScheduleCard'
import theme from '../theme'

const SchedulesScreen = ({ navigation, route }) => {
  let scheduleByMonth = []

  for (const i of route.params.schedules) {
    if (scheduleByMonth.length) {
      const searchMonth = scheduleByMonth.find(item => item.month === moment(i.date).format('MMMM YYYY'))

      if (searchMonth === undefined) {
        scheduleByMonth = [
          ...scheduleByMonth,
          {
            month: moment(i.date).format('MMMM YYYY'),
            data: [i]
          }
        ]
      } else {
        scheduleByMonth = scheduleByMonth.map(item => {
          if (item.month === moment(i.date).format('MMMM YYYY')) {
            return {
              ...item,
              data: [
                ...item.data,
                i
              ]
            }
          } else {
            return item
          }
        })
      }
    } else {
      scheduleByMonth = [{
        month: moment(i.date).format('MMMM YYYY'),
        data: [i]
      }]
    }
  }

  const generateSchedule = data => {
    const startOfMonth = moment(data[0].date).startOf('month').format('YYYY-MM-DD');
    const endOfMonth   = moment(data[0].date).endOf('month').format('YYYY-MM-DD');
    const countDayOfMonth = []
    
    for (let day = moment(startOfMonth); day.isSameOrBefore(endOfMonth); day.add(1, 'days')) {
      countDayOfMonth.push(moment(day).format('YYYY-MM-DD'))
    }
    
    return (
      <View>
        {
          countDayOfMonth
            .filter(el => moment(el).isSameOrAfter(moment().format('YYYY-MM-DD')))
            .map((item, index) => {
              const findData = data.find(i => moment(i.date).format('YYYY-MM-DD') === item)
              
              if (findData === undefined) {
                return <ScheduleCard key={index} item={{ date: item, isAvailableSchedule: false }} />
              } else {
                return <ScheduleCard key={index} item={{...findData, isAvailableSchedule: true}} navigation={navigation} />
              }
            })
        }
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header
        title='UPCOMING SCHEDULE'
        leftPress={() => navigation.goBack()}
        rightPress={() => null}/>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
        {
          scheduleByMonth.map((item, index) => (
            <View style={styles.content} key={index}>
            <Text style={styles.title}>{ item.month }</Text>
            <View style={styles.divider}/>
            
            {
              generateSchedule(item.data)
            }
          </View>
          ))
        }
      </ScrollView>
    </View>
  )
}

export default SchedulesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.native_white
  },
  content: {
    paddingVertical: 20,
    flex: 1
  },
  title: {
    fontSize: theme.fonts.large,
    fontWeight: 'bold',
    marginLeft: 15
  },
  divider: {
    marginTop: 20,
            borderColor: 'white',
            borderWidth: 1,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.15,
            shadowRadius: 3,

            elevation: 50
  },
  list: {
    marginTop: 5
  }
})
