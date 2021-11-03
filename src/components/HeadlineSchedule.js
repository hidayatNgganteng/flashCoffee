import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomButton from './CustomButton'
import theme from '../theme'

const HeadlineSchedule = ({ title, time, isWithTodayLabel }) => {
  return (
    <View>
      <Text style={styles.title}>{ title }</Text>
        
      <View style={styles.timeStyle}>
        <Icon name='clock-outline' size={25} color={theme.colors.black} />
        <Text style={styles.hourStyle}>{ time }</Text>
        {
          isWithTodayLabel && (
            <CustomButton
              label='TODAY'
              btnStyles={styles.btn}/>
          )
        }
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
  btn: {
    backgroundColor: theme.colors.pink
  }
})
