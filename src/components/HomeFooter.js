import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import theme from '../theme'
import CustomButton from './CustomButton'

const WIDTH_SCREEN = Dimensions.get('window').width

const HomeFooter = () => {
  return (
    <View style={styles.container}>
      <CustomButton
        onPress={() => null}
        label='Clock In'
        btnStyles={styles.leftBtn}
        labelStyles={styles.label}/>
      <CustomButton
        onPress={() => null}
        label='Clock Out'
        btnStyles={styles.rightBtn}
        labelStyles={styles.label}/>
    </View>
  )
}

export default HomeFooter

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 25
  },
  leftBtn: {
    paddingVertical: 18,
    width: WIDTH_SCREEN*0.43,
    borderRadius: 7
  },
  rightBtn: {
    backgroundColor: theme.colors.gray,
    width: WIDTH_SCREEN*0.43,
    paddingVertical: 18,
    borderRadius: 7
  },
  label: {
    fontSize: theme.fonts.normal
  }
})
