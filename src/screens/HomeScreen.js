import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Schedules')}>
        <Text>schedules</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text>detail</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})
