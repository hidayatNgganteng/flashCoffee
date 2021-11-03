import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import theme from '../theme'

const HeaderSchedule = ({ label, btnLabel, onPress }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{ label }</Text>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Text style={styles.btnText}>{ btnLabel }</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderSchedule

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: theme.fonts.normal,
    fontWeight: 'bold'
  },
  btn: {
    paddingLeft: 30,
    paddingVertical: 5
  },
  btnText: {
    color: theme.colors.pink,
    fontSize: theme.fonts.medium
  }
})
