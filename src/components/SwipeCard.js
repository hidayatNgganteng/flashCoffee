import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import theme from '../theme'
import HeadlineSchedule from './HeadlineSchedule'

const SwipeCard = ({ storeBranch, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Text style={styles.title}>WEDNESDAY</Text>
        <Text style={styles.dateStyle}>7 Apr</Text>
      </View>

      <View style={styles.boxHeadline}>
        <HeadlineSchedule
          title={ storeBranch }
          time='08:00 - 17:00'/>
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
