import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import theme from '../theme'

const CustomButton = ({ onPress, label, btnStyles, labelStyles }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, btnStyles]}>
      <Text style={[styles.label, labelStyles]}>{ label }</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  btn: {
    backgroundColor: theme.colors.green,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  label: {
    textAlign: 'center',
    fontSize: theme.fonts.medium,
    color: theme.colors.native_white,
    fontWeight: 'bold'
  }
})
