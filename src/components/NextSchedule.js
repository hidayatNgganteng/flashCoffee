import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import HeaderSchedule from './HeaderSchedule'
import SwipeCard from './SwipeCard'

const WIDTH_SCREEN = Dimensions.get('window').width

const NextSchedule = ({ navigation, schedules }) => {
  const renderItem = ({item, index}) => (
    <SwipeCard
      item={item}
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
          data={schedules}
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
