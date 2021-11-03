import moment from 'moment'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import theme from '../theme'
import HeadlineSchedule from './HeadlineSchedule'

const SwipeCard = ({ item, onPress }) => {
  const { date, store_name, shop_open_hours, shope_closing_hours } = item

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Text style={styles.title}>{ `${moment(date).format('dddd')}`.toUpperCase() }</Text>
        <Text style={styles.dateStyle}>{ moment(date).format('d MMM') }</Text>
      </View>

      <View style={styles.boxHeadline}>
        <HeadlineSchedule
          title={store_name}
          time={`${shop_open_hours} - ${shope_closing_hours}`}/>
      </View>
    </TouchableOpacity>
  )
}

export default SwipeCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.semiGray,
    paddingHorizontal: 13,
    paddingVertical: 13,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: theme.fonts.small,
    letterSpacing: 1,
    color: theme.colors.gray
  },
  dateStyle: {
    fontSize: theme.fonts.semiLarge,
    fontWeight: 'bold',
    marginTop: 3
  },
  boxHeadline: {
    marginTop: 22
  }
})
