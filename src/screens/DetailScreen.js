import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import DetailsCard from '../components/DetailsCard'
import ListDetails from '../components/ListDetails'
import theme from '../theme'

const DetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        title='7 APRIL 2021'
        leftPress={() => navigation.goBack()}/>
      
      <View style={styles.content}>
        <Text style={styles.title}>STORE</Text>
        <DetailsCard />
        <ListDetails
          title='TIME SCHEDULE'
          iconName='clock-outline'
          time='08:00'/>
        <ListDetails
          title='CLOCK IN'
          iconName='qrcode-scan'
          time='--:--'/>
        <ListDetails
          title='CLOCK OUT'
          iconName='qrcode-scan'
          time='--:--'/>
      </View>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.native_white
  },
  content: {
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  title: {
    fontSize: theme.fonts.large,
    fontWeight: 'bold'
  }
})
