import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import theme from '../theme'

const DetailsCard = ({ storeImage, storeName, address }) => {
  return (
    <View style={styles.container}>
      <Image source={storeImage} style={styles.thumbnail} />

      <View style={styles.content}>
        <Text style={styles.title}>{ storeName }</Text>
        <Text style={styles.description}>{ `${address}`.substring(0, 120) }...</Text>
        <TouchableOpacity onPress={() => null} style={styles.btn}>
          <Text style={styles.labelBtn}>View maps</Text>
        </TouchableOpacity>
      </View>  
    </View>
  )
}

export default DetailsCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.semiGray,
    marginTop: 15,
    padding: 15,
    borderRadius: 10
  },
  thumbnail: {
    width: 85,
    height: 85,
    borderRadius: 10
  },
  content: {
    flexShrink: 1,
    paddingLeft: 15
  },
  title: {
    color: theme.colors.black,
    fontSize: theme.fonts.normal,
    fontWeight: 'bold'
  },
  description: {
    marginTop: 5,
    color: theme.colors.native_gray,
    fontSize: theme.fonts.small,
    lineHeight: 20
  },
  btn: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: theme.colors.pink,
    width: 120,
    paddingVertical: 5,
    borderRadius: 15
  },
  labelBtn: {
    fontSize: theme.fonts.medium,
    textAlign: 'center',
    color: theme.colors.pink
  }
})
