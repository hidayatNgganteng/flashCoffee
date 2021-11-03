import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default {
  colors: {
    black: '#222222',
    yellow: '#ffdb00',
    pink: '#fc2760',
    green: '#5ac6ba',
    gray: '#b1b1b1',
    semiGray: '#f4f4f4',
    native_white: '#ffffff'
  },
  fonts: {
    // xSmall: 12,
    // small: 14,
    // medium: 17,
    // normal: 20,
    // large: 25,
    // semiLarge: 32,
    // xLarge: 55
    xSmall: RFPercentage(1.5),
    small: RFPercentage(1.7),//#
    medium: RFPercentage(2),//#
    normal: RFPercentage(2.2),//#
    large: RFPercentage(3),
    semiLarge: RFPercentage(3.6),//#
    xLarge: RFPercentage(7.3)//#
  }
}