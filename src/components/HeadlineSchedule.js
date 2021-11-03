import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import theme from '../theme'

const HeadlineSchedule = ({ title, time }) => {
  return (
    <View>
      <Text style={styles.title}>{ title }</Text>
        
      <View style={styles.timeStyle}>
        <Icon name='clock-outline' size={25} color={theme.colors.black} />
        <Text style={styles.hourStyle}>{ time }</Text>
      </View>
    </View>
  )
}

export default HeadlineSchedule

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fonts.normal,
    fontWeight: 'bold'
  },
  timeStyle:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  hourStyle: {
    marginLeft: 7,
    fontSize: theme.fonts.medium
  },
})
