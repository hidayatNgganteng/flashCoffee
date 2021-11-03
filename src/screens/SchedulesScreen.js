import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../components/Header'
import ScheduleCard from '../components/ScheduleCard'
import theme from '../theme'

const SchedulesScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        title='UPCOMING SCHEDULE'
        leftPress={() => null}
        rightPress={() => null}/>

      <View style={styles.content}>
        <Text style={styles.title}>APRIL 2021</Text>
        <View style={styles.divider}/>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
          <ScheduleCard
            day='MON'
            dateVal='5'
            schedule={{
              onPress: () => null,
              title: 'Mediterania residence',
              time: '08:00 - 17:00'
            }}/>
          <ScheduleCard
            day='TUE'
            dateVal='6'
            schedule={{
              onPress: () => null,
              title: 'Mediterania residence',
              time: '08:00 - 17:00'
            }}/>
        </ScrollView>
      </View>
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
    paddingVertical: 15,
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
