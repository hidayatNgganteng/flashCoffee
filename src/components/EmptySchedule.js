import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import theme from '../theme'

const EmptySchedule = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>NO SCHEDULE</Text>
    </View>
  )
}

export default EmptySchedule

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderStyle: 'dashed',
    height: 85
  },
  label: {
    fontSize: theme.fonts.normal,
    fontWeight: 'bold'
  }
})
