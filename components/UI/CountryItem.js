import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFonts } from "expo-font";

import ChevronRight from '../../assets/chevron-right.svg'
import More from '../../assets/more.svg'

const CountryItem = (props) => {

const [fontsLoaded] = useFonts({
"Montserrat-700": require("../../assets/fonts/Montserrat-Bold.ttf"),
 "Montserrat-500": require("../../assets/fonts/Montserrat-Medium.ttf"),
"Montserrat-600": require("../../assets/fonts/Montserrat-SemiBold.ttf"),
});

return (
    <View style={styles.container}>
        <View style={[styles.wrapper, props.isFree==false && styles.disable]}>
            <props.flag width={44} height={44}/>
            <View style={styles.textWrapper}>
                <Text style={styles.textCountry}>{props.countryName}</Text>
                <Text style={styles.textCity}>{props.cityName}</Text>
            </View>
            {props.isFree==true && <ChevronRight style={styles.chevronRight}/>}
            {props.isFree==false && <More/>}
        </View>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  wrapper: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#2D2D2DBF',
    height: '68',
  },
  textWrapper: {
    flex: 1,
    marginLeft: 12,
  },
  textCountry: {
    color: '#fff',
    fontFamily: 'Montserrat-500',
    fontSize: 16,
    fontWeight: 500,
  },
textCity: {
	marginTop: 4,
  color: '#fff',
  fontFamily: 'Montserrat-400',
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 19.5,
  color: '#566379',
},
chevronRight: {
	color: '#fff',
	width: 24,
	height: 24,
},
disable: {
	opacity: 0.6,
}
})

export default CountryItem;