import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import assets from '../assets'
import theme from '../theme'

const WIDTH_SCREEN = Dimensions.get('window').width

const HomeInfo = () => {
  return (
    <View style={styles.info}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => null} style={styles.leftSide}>
          <Image source={assets.images.avatar} style={styles.avatar} />
        </TouchableOpacity>
        <Text style={styles.title}>LIVE ATTENDANCE</Text>
        <TouchableOpacity onPress={() => null} style={styles.rightSide}>
          <Icon name="ios-notifications-outline" size={theme.fonts.semiLarge} color={theme.colors.black} />
        </TouchableOpacity>
      </View>
      <View style={styles.timeStyle}>
        <Text style={styles.hourStyle}>07:30</Text>
        <Text style={styles.dateStyle}>Monday, 5Apr 2021</Text>
      </View>
      <Image source={assets.images.bottomGradient} style={styles.bottomGradient} />
    </View>
  )
}

export default HomeInfo

const styles = StyleSheet.create({
  info: {
    backgroundColor: theme.colors.yellow,
    paddingTop: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  leftSide: {
    width: 70
  },
  rightSide: {
    paddingVertical: 10,
    width: 70,
    alignItems: 'flex-end'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  title: {
    color: theme.colors.black,
    fontSize: theme.fonts.medium,
    fontWeight: 'bold'
  },
  timeStyle: {
    marginTop: 15
  },
  hourStyle: {
    textAlign: 'center',
    fontSize: theme.fonts.xLarge,
    fontWeight: 'bold',
    letterSpacing: 2
  },
  dateStyle: {
    textAlign: 'center',
    fontSize: theme.fonts.small,
    fontWeight: 'bold',
    marginTop: 5
  },
  bottomGradient: {
    width: WIDTH_SCREEN,
    height: WIDTH_SCREEN*0.133, // dimensions
    marginTop: 10
  }
})
