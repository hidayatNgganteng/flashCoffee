import React, { useState } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import HeaderSchedule from './HeaderSchedule'
import SwipeCard from './SwipeCard'

const WIDTH_SCREEN = Dimensions.get('window').width
const nextScheduleInit = [{
  date: '2021-11-01',
  openTime: '08:00',
  closeTime: '17:00',
  storeBranch: 'Mediterania Garden Residence'
},{
  date: '2021-11-01',
  openTime: '08:00',
  closeTime: '17:00',
  storeBranch: 'Tegal Box Office'
},{
  date: '2021-11-01',
  openTime: '08:00',
  closeTime: '17:00',
  storeBranch: 'Jogja Bay Babarsari'
},{
  date: '2021-11-01',
  openTime: '08:00',
  closeTime: '17:00',
  storeBranch: 'Quenstown Square Street'
},{
  date: '2021-11-01',
  openTime: '08:00',
  closeTime: '17:00',
  storeBranch: 'Iceland Tower Residence'
}]

const NextSchedule = ({ navigation }) => {
  const [nextSchedule, setNextSchedule] = useState(nextScheduleInit)

  const renderItem = ({item, index}) => (
    <SwipeCard
      storeBranch={item.storeBranch}
      onPress={() => null}/>
  )

  return (
    <View style={styles.container}>
      <HeaderSchedule
        label='NEXT SCHEDULE'
        btnLabel='See all'
        onPress={() => navigation.navigate('Schedules')}/>

      <View style={styles.boxNextSchedule}>
        <Carousel
          data={nextSchedule}
          renderItem={renderItem}
          sliderWidth={WIDTH_SCREEN-40}
          itemWidth={WIDTH_SCREEN-80}
          activeSlideAlignment='start'
          inactiveSlideScale={1}
          slideStyle={styles.slideStyle}
        />
      </View>
    </View>
  )
}

export default NextSchedule

const styles = StyleSheet.create({
  container: {
    marginTop: 23,
    paddingHorizontal: 20
  },
  boxNextSchedule: {
    marginTop: 7,
    flex: 1
  },
  slideStyle: {
    paddingRight: 10
  }
})
