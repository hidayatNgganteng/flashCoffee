import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import theme from '../theme'

const ListDetails = ({ title, iconName, time  }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ title }</Text>
      <View style={styles.timeStyle}>
        <Icon name={iconName} size={25} color={theme.colors.black} />
        <Text style={styles.label}>{ time }</Text>
      </View>
    </View>
  )
}

export default ListDetails

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  title: {
    fontSize: theme.fonts.large,
    color: theme.colors.black,
    fontWeight: 'bold'
  },
  timeStyle: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.semiGray,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 7
  },
  label: {
    marginLeft: 10,
    fontSize: theme.fonts.normal,
    fontWeight: 'bold'
  }
})
