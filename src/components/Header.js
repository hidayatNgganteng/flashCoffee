import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconAwesome from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'
import theme from '../theme'

const Header = ({ title, leftPress, rightPress }) => {
  return (
    <View style={[styles.container, { height: Platform.OS === 'ios' ? 44 : 56 }]}>
      <TouchableOpacity onPress={leftPress} style={styles.btn}>
        <Icon name='arrow-back' size={28} color={theme.colors.black} />
      </TouchableOpacity>
      <Text style={styles.title}>{ title }</Text>
      {
        rightPress ? (
          <TouchableOpacity onPress={rightPress} style={styles.btn}>
            <IconAwesome name='refresh' size={23} color={theme.colors.black} />
          </TouchableOpacity>
        ) : <View style={styles.emptyBtn}></View>
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.yellow
  },
  btn: {
    height: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center'
  },
  title: {
    fontSize: theme.fonts.normal,
    color: theme.colors.black,
    fontWeight: 'bold'
  },
  emptyBtn: {
    width: 50
  }
})
