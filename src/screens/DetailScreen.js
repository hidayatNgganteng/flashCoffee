import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import DetailsCard from '../components/DetailsCard'
import ListDetails from '../components/ListDetails'
import theme from '../theme'
import moment from 'moment'

const DetailScreen = ({ navigation, route }) => {
  const {
    date,
    shop_open_hours,
    shope_closing_hours,
    clock_in,
    clock_out,
    image,
    store_name,
    address
  } = route.params.schedule

  return (
    <View style={styles.container}>
      <Header
        title={ moment(date).format('D MMMM YYYY') }
        leftPress={() => navigation.goBack()}/>
      
      <View style={styles.content}>
        <Text style={styles.title}>STORE</Text>
        <DetailsCard
          storeImage={image}
          storeName={store_name}
          address={address}/>
        <ListDetails
          title='TIME SCHEDULE'
          iconName='clock-outline'
          time={`${shop_open_hours} - ${shope_closing_hours}`}/>
        <ListDetails
          title='CLOCK IN'
          iconName='qrcode-scan'
          time={ clock_in === null ? '--:--' : clock_in }/>
        <ListDetails
          title='CLOCK OUT'
          iconName='qrcode-scan'
          time={ clock_out === null ? '--:--' : clock_out }/>
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
